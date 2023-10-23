const TelegramBot = require('node-telegram-bot-api');
const { Command } = require("commander");


const TOKEN = '6701606699:AAF6UOHdSLR1xrbEkS4hmTZd5iz2qw8MWOM';
const CHAT_ID = 449021637;
const bot = new TelegramBot(TOKEN, { polling: true });
const program = new Command();


program
    .command('send-message')
    .description('Bot send message to the chat')
    .argument('<message>')
    .alias('m')
    .action(async (msg) => {
        await bot.sendMessage(CHAT_ID, msg);
        process.exit();
    });

program
    .command('send-photo')
    .description('Bot send photo to the chat - use path to the photo')
    .argument('<path>')
    .alias('p')
    .action(async (photo_path) => {        
        await bot.sendPhoto(CHAT_ID, photo_path);
        process.exit();
    });

program.parse();