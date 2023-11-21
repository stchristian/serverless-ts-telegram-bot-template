# Serverless Telegram Bot Template (TypeScript)

Welcome to the Serverless Telegram Bot Template project! 🚀

This template provides a starting point for developing Telegram bots using the Serverless framework and TypeScript. Building serverless Telegram bots allows you to focus on the bot's functionality without the hassle of managing server infrastructure.

## Features

- Serverless Framework: Utilize the power of the Serverless Framework for deploying and managing your serverless architecture effortlessly.
- TypeScript Support: Develop your Telegram bot using TypeScript, ensuring a more robust and maintainable codebase.
- Telegram API Integration: Easily communicate with the Telegram API to create interactive and dynamic bot experiences.
- Out of the box support for parameter validation with the help of Yup schema validation. Parameters that include multiple words can be put in quotes.

## Steps

1. You must have serverless framework already installed and AWS credentials properly set up. If you don't have it, see [here](https://www.serverless.com/framework/docs/getting-started)
2. Use this template to create a new service with the following command

```
serverless create \
--template-url https://github.com/stchristian/serverless-ts-telegram-bot-template \
--path myNewTelegramBot
```

3. Configure telegram token
   - Get your telegram bot token from @BotFather
   - Additionally check the [telegram bot tutorials](https://core.telegram.org/bots/tutorial)
4. Set up necessary variables so they are available in the environment (TELEGRAM_TOKEN, TELEGRAM_API_BASE_URL). Use [serverless parameteres](https://www.serverless.com/framework/docs/guides/parameters) for the variables. For that you'll need to connect this project to Serverless Dashboard
5. Add your commands in **/src/commands.ts**
6. Run `serverless deploy`
7. Copy the url of the endpoint in the console. [Set up](https://core.telegram.org/bots/api#setwebhook) the webhook endpoint for Telegram API
8. Send /ping to your bot!

## Contributing

If you have ideas for improvements or additional features, feel free to contribute and create a pull request!

Happy coding! 🤖✨
