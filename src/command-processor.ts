import { splitParamList } from "./helpers";
import { TelegramMessage, TelegramMessageEntity } from "./telegram";
import messages from "./messages";
import { commandRegistry } from "./commands";

function extractCommandAndParamsFromText(
  cmdEntity: TelegramMessageEntity,
  text: string
) {
  const indexOfCommandEnd = cmdEntity.offset + cmdEntity.length;
  const command = text.slice(cmdEntity.offset, indexOfCommandEnd);
  const params = splitParamList(text.slice(indexOfCommandEnd + 1));
  return { command, params };
}

// Processes the first telegram command in the entity list and returns a text message to send to the user
export async function processCommand(message: TelegramMessage) {
  if (!message.entities) return messages.NO_COMMAND_FOUND;

  const cmdEntity = message.entities.find(
    (entity) => entity.type === "bot_command"
  );

  if (!cmdEntity) return messages.NO_COMMAND_FOUND;

  const { command, params } = extractCommandAndParamsFromText(
    cmdEntity,
    message.text!
  );

  if (commandRegistry.contains(command)) {
    try {
      return commandRegistry.get(command)!.run(message, command, params);
    } catch (error) {
      if (error.name === "ValidationError") {
        return error.message;
      } else {
        throw error;
      }
    }
  } else {
    return messages.UNKNOWN_COMMAND(command);
  }
}
