const TelegramBot = require('node-telegram-bot-api');
const getWeatherForecast = require('./operations');

const API_KEY = '946589c9f071f680a199401f8881b9ba';
const TOKEN = '6914839326:AAGkJpzAk7ZUk5ErKhN7kq50-vv0UO1T2mY';
const LAT = 13.736717;
const LON = 100.523186;
const bot = new TelegramBot(TOKEN, { polling: true });



bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "Welcome", {
        "reply_markup": {
            resize_keyboard: true,
            "keyboard": [["Forecast in Bangkok"]]
        }
    });
});

bot.onText(/Forecast in Bangkok/, (msg) => {    

    bot.sendMessage(msg.chat.id, 'Choose prefered intervals', {
        "reply_markup": {
            resize_keyboard: true,
            "keyboard": [["at intervals of 3 hours"], ["at intervals of 6 hours"]]
        }
    });
});

bot.onText(/at intervals of 3 hours/, async (msg) => {    
    const response = await getWeatherForecast(LAT, LON, API_KEY, 3);

    bot.sendMessage(msg.chat.id, response);
});

bot.onText(/at intervals of 6 hours/, async (msg) => {    
    const response = await getWeatherForecast(LAT, LON, API_KEY, 6);

    bot.sendMessage(msg.chat.id, response);
});