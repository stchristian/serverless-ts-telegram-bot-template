import axios from "axios";

const API_BASE_URL = `${process.env.TELEGRAM_API_BASE_URL}/bot${process.env.TELEGRAM_TOKEN}`;

/**
 * Communication service for interacting with the Telegram API.
 *
 * This class encapsulates communication with the Telegram API, with each member function
 * corresponding to a specific API call. It utilizes the axios library to send HTTP requests
 * to the Telegram API endpoint, with a base URL and API Token derived from the provided environment variables.
 *
 * *Note:** This class is not exhaustive in covering all possible Telegram API calls. Feel free to contribute
 */
class TelegramService {
  telegramApi = axios.create({
    baseURL: API_BASE_URL,
    timeout: 1000,
  });

  sendMessage(chatId, text) {
    const path = "/sendMessage";
    return this.telegramApi.post(path, { text, chat_id: chatId });
  }
}

const telegramService = new TelegramService();

export default telegramService;
