const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hola Mundo')
})
 let port = process.env.PORT || 3000;
app.listen(port)
 
require('dotenv').config()

//////////////////////////////////////////////////////////////////////////
const mineflayer = require('mineflayer');

console.log('Comenzando...')

function createBot () {
    const bot = mineflayer.createBot({
    host: "bfbwfgergre.aternos.me",
    port: "62446",
    username: "Bot",
    version: false
    })
    bot.on('login', function() {
      bot.chat('/register 123456 123456')
    })
    bot.on('chat', (username, message) => {
      if (username === bot.username) return
      target = bot.players[username].entity
      let entity
      switch (message) {
        case ';start':
          bot.setControlState('forward', true)
          bot.setControlState('jump', true)
          bot.setControlState('sprint', true)
          break
          case ';stop':
            bot.clearControlStates()
            break
          }
        })
        bot.on('spawn', function() {
          bot.chat('Ya apareci ')
        })
        bot.on('death', function() {
          bot.chat('morí, voy a reaparecer')
        })
        bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn))
        bot.on('error', err => console.log(err))
        bot.on('end', createBot)
}
