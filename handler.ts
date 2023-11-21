import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { TelegramUpdate } from "./src/telegram";
import { processCommand } from "./src/command-processor";
import telegramService from "./src/telegram-service";

export const webhook: APIGatewayProxyHandlerV2 = async (event) => {
  if (typeof event.body === "undefined") {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Missing body",
      }),
      headers: { "Content-Type": "application/json" },
    };
  }

  const body = JSON.parse(event.body) as TelegramUpdate;

  if (body.message) {
    const response = await processCommand(body.message);
    await telegramService.sendMessage(body.message.chat.id, response);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "ok",
    }),
    headers: { "Content-Type": "application/json" },
  };
};
