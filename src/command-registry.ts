import { Schema } from "yup";
import { TelegramMessage } from "./telegram";

type CommandHandler = (
  message: TelegramMessage,
  command: string,
  params: string[]
) => string | undefined;

interface Command {
  name: string;
  run: CommandHandler;
  paramsSchema?: Schema;
}

/**
 * Class to hold the list of commands of the Telegram BOT.
 */
class CommandRegistry {
  private commands: Map<string, Command> = new Map();

  addCommand(name: string, handler: CommandHandler, paramsSchema: Schema) {
    if (typeof this.commands.get(name) !== "undefined") {
      throw new Error(`Command ${name} does already exist`);
    }

    const newCommand: Command = {
      name,
      run: (message, command, params) => {
        if (paramsSchema) {
          paramsSchema.validateSync(params);
        }
        return handler(message, command, params);
      },
      paramsSchema,
    };

    this.commands.set(newCommand.name, newCommand);
  }

  get(name: string) {
    return this.commands.get(name);
  }

  contains(name: string) {
    return this.commands.has(name);
  }
}

export const commandRegistry = new CommandRegistry();
