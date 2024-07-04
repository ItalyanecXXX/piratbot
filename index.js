const TelegrambotApi = require('node-telegram-bot-api')

const token = "7363068240:AAFT0FbRZcX8zSLStgXr-aTuReBnduBfPdg";
const sequelize = require('./db');
const bot = new TelegrambotApi(token, {polling: true})
const UserModel = require('./models');


const start = async () => {

    try {
      await sequelize.authenticate()
      await sequelize.sync()
    } catch (e) {
      console.log('Подключенте к базе данных', e)
    }

    bot.setMyCommands([
      { command: "/start", description: 'Приветствие' },
      { command: "/info", description: "Информация" },
    ]);

    bot.on("message", async (msg) => {
      const text = msg.text;
      const chatId = msg.chat.id;
      try {
        if (text === "/start") {
          await UserModel.create({chatId})
          await bot.sendSticker(chatId, "https://cdn.tlgrm.ru/stickers/dfa/80c/dfa80c88-f172-4fd3-9ac7-b20e5f611cbd/192/5.webp");
          return bot.sendMessage(chatId, "Hello");
        }
        if (text === "/info") {
          return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name}`);
        }
        return bot.sendMessage(chatId, "Я не понял, повтори");

      } catch (e) {
        return bot.sendMessage(chatId, 'Произошла какая то ошибка');
      }
      console.log(msg)
      bot.sendMessage(chatId, `Ты мне писал ${text}`);

      
    });

}

start()