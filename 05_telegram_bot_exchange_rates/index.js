const TelegramBot = require('node-telegram-bot-api');
const {getWeatherForecast, getEuro, getUSDollar} = require('./operations');

const API_KEY = '946589c9f071f680a199401f8881b9ba';
const TOKEN = '6914839326:AAGkJpzAk7ZUk5ErKhN7kq50-vv0UO1T2mY';
const LAT = 13.736717;
const LON = 100.523186;
const bot = new TelegramBot(TOKEN, { polling: true });


bot.on('message', async (msg) => {
    let response = '';

    switch (msg.text) {
        case "/start":
            bot.sendMessage(msg.chat.id, "Welcome", {
                "reply_markup": {
                    resize_keyboard: true,
                    "keyboard": [["Weather"], ["Currency Rates"]]
                }
            });
            break;
        
        case "Weather":
            bot.sendMessage(msg.chat.id, 'Choose what you need to know', {
                "reply_markup": {
                    resize_keyboard: true,
                    "keyboard": [["at intervals of 3 hours", "at intervals of 6 hours"], ['Back']]
                }
            });
            break;
        
        case "Currency Rates": 
            bot.sendMessage(msg.chat.id, 'Choose what you need to know', {
                "reply_markup": {
                    resize_keyboard: true,
                    "keyboard": [["USD", "EUR"], ['Back']]
                }
            });
            break;
        
        case "Back":
            bot.sendMessage(msg.chat.id, 'Choose what you need to know', {
                "reply_markup": {
                    resize_keyboard: true,
                    "keyboard": [["Weather"], ["Currency Rates"]]
                }
            });
            break;
        
        case "at intervals of 3 hours":
            response = await getWeatherForecast(LAT, LON, API_KEY, 3);
            bot.sendMessage(msg.chat.id, response);
            break;
        
        case "at intervals of 6 hours":
            response = await getWeatherForecast(LAT, LON, API_KEY, 6);
            bot.sendMessage(msg.chat.id, response);
            break;
        
        case "USD":
            response = await getUSDollar();
            bot.sendMessage(msg.chat.id, response);
            break;
        
        case "EUR":
            response = await getEuro();
            bot.sendMessage(msg.chat.id, response);
            break;        
        
        default:
            bot.sendMessage(msg.chat.id, "Sorry! No such an information");
            break;
    }
    
});