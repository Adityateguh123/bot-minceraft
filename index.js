const mineflayer = require('mineflayer')
// untuk bot nya nick , ip server  , password( jika akun premium)
const bot = mineflayer.createBot({
 username: 'THERCIBOT38494', // nama bot
 host: 'bottestings3.aternos.me', // ip server
 port: '35241', // port
 version: '1.17', //versi
});
// discord
const { Client, Intents} = require('discord.js')
const intents = new Intents(['GUILDS', 'GUILD_MESSAGES'])
const client = new Client({ intents})

let channel = "997105887279853599"

const Token = 'OTk3MTA3NzUzODU4MzcxNTk1.GuCHZM.ZU4Xp-WYul3ua9PMkMu_phUNQG53ZstiJkawTA'
//  log

let BOTNAME = bot.username
bot.on('kicked', console.log); 
bot.on('error', console.log);

// commads atau perintah

client.on('ready', () => {
  console.log(`The discord bot logged in! Username: ${client.user.username}!`) 
 client.channels.cache.get(channel) 
  if (!channel) { console.log(`I could not find the channel `)                                               }
})

client.on('messageCreate', message => {
  if (message.channel.id !== channel.id) return
  
  if (message.author.id === client.user.id) return
  
  bot.chat(`${message.author.username}: ${message.content}`)
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return

  channel.send(`${username}: ${message}`)
})



client.login(Token);