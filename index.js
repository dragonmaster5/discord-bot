const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === '?creator') {
 msg.reply('Leo Regulus');
 }
 });

client.login('NjA2MzE0MzYzMDQwNjk0Mjc5.XUJQrw.RaFjGYOvzy4e1ZU5f4rE9gqvsvk');