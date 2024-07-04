const TelegrambotApi = require('node-telegram-bot-api')

const token = "7363068240:AAFT0FbRZcX8zSLStgXr-aTuReBnduBfPdg";

const bot = new TelegrambotApi(token, {polling: true})



const start = () => {
    bot.setMyCommands([
      { command: "/start", description: 'Приветствие' },
      { command: "/info", description: "Информация" },
    ]);

    bot.on("message", async (msg) => {
      const text = msg.text;
      const chatId = msg.chat.id;
      console.log(msg)
      bot.sendMessage(chatId, `Ты мне писал ${text}`);

      if (text === "/start") {
        await bot.sendSticker(
          chatId,
          "https://cdn.tlgrm.ru/stickers/dfa/80c/dfa80c88-f172-4fd3-9ac7-b20e5f611cbd/192/5.webp"
        );
        return bot.sendMessage(chatId, "Hello");
      }
      if (text === "/info") {
        return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name}`);
      }
      return bot.sendMessage(chatId,'Я не понял, повтори')
    });

}

start()