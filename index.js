const TelegramBot=require('node-telegram-bot-api')
const dotenv=require('dotenv')
const  axios  = require('axios')

dotenv.config()
// console.log(process.env.BOT_TOKEN)
const Token=process.env.BOT_TOKEN


//create a bot that uses 'polin gto fetch new updates
const bot=new TelegramBot(Token,{polling:true})

bot.on('message',(msg)=>{//event listener
    const text=msg.text
    console.log("Message received:",text)
    bot.sendMessage(msg.chat.id,"you said: "+ text)
})

bot.onText(/\/start/,(msg)=>{//whenver some one will send /start it RE
    bot.sendMessage(msg.chat.id,"Hello? I am a bot.how can i help you?")
})
bot.onText(/\/joke/,async (msg)=>{
    
    const joke=await axios.get('https://official-joke-api.appspot.com/random_joke')
    const setup=joke.data.setup
    const punchline=joke.data.punchline;
    bot.sendMessage(msg.chat.id,setup+"?d"+punchline)

})




