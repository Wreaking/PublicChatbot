require('dotenv')
const { Client,Util, Collection,MessageEmbed,Structures } = require("discord.js");
const keepAlive = require('./server.js')
keepAlive()
async function errorEmbed(text,message){
      const newembed = new Discord.MessageEmbed()
      .setColor("#FF7676")
      .setDescription(`**❌ | ${text} **`)
       return message.lineReply(newembed);
    }
const Discord = require('discord.js');
const client = new Client({
    disableEveryone: true
})
const axios = require("axios")
require('discord-reply');

//=============================================
const channel_id = ""//PLEASE PASTE CHANNEL ID IF YOU DON'T KNOW HOW TO GET CHANNEL ID ENABLE DEVELOPER MODE ON OR JOIN OUR SERVER
//=============================================
client.on('ready', () => {
	console.log(`[INFO]: Ready on client (${client.user.tag})`);
	console.log('-------------------------------------');
	client.user.setActivity(`Powered By NeoBot |  ${client.users.cache.size} users`, {
		    type: 'WATCHING'
	});
});

client.on('message', async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
if (message.content.includes(`@`)) {
return message.lineReply(`**:x: Please dont mention anyone**`);
 }
   
   try {
  if (message.channel.id != channel_id) return
  let res = await axios.get(`http://api.brainshop.ai/get?bid=159454&key=RKi4jqvbEarRLLq2&uid=[uid]&msg=[msg]=${encodeURIComponent(message.content)}`);
  message.reply({
    embed:{
      title: "AI ChatBot", //you can remove if you want 
      description:res.data.cnt, //don't remove this
      color: '#cc0000',
    }
    });
  } catch {
   errorEmbed(`Bot error, please try again!`,message)
   }
})

client.on('ready', async () => {
    console.clear()
    console.log(`${client.user.tag} is online!`)
})

client.login(process.env.TOKEN);//IF YOU ARE USING REPLIT OR GLITCH PLEASE GO TO READ.ME
