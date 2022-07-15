const mineflayer = require('mineflayer')
// untuk bot nya nick , ip server  , password( jika akun premium)
const bot = mineflayer.createBot({
 username: 'THERCIBOT38494', // nama bot
 host: '', // ip server
 port: '', // port
 version: '', //versi
});
const pvp = require('mineflayer-pvp').plugin
const { pathfinder, Movements, goals } = require('mineflayer-pathfinder')
//  log
bot.on('kicked', console.log); 
bot.on('error', console.log);

// commads atau perintah
bot.loadPlugin(pathfinder) 
bot.loadPlugin(pvp)
bot.on('chat', (username, message) => {
  if (message === '$pvp') {
    const player = bot.players[username]

    if (!player) {
      bot.chat("lu dimana gw ga liat ,coba ke sini.")
      return
    }

    bot.pvp.attack(player.entity)
  }

  if (message === 'stop') {
    bot.pvp.stop()
  }
})