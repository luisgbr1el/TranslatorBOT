const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const config = require("./config.json");
const fs = require("fs");

const bot = new Discord.Client();
bot.commands = new Discord.Collection();


fs.readdir("./comandos/", (err, files) => {
	if(err) console.error(err);

	let arquivojs = files.filter(f => f.split(".").pop() == "js");
	arquivojs.forEach((f, i) =>{
		let props = require(`./comandos/${f}`);
		console.log(`Comando ${f} carregado com sucesso.`)
		bot.commands.set(props.help.name, props);
	});
});


	bot.on('ready', () => {
		var servers = bot.guilds.cache.size;
  console.log('Estou pronto para ser usado! (^-^)');
  let activNum = 0;
  
  setInterval(function(){
  	if (activNum === 0) {
  		bot.user.setActivity(".help for a guide / .help para um guia / .help para instrucciones.", {type: "LISTENING"});
  		activNum = 1;

  	} else if(activNum === 1) {
  		  		bot.user.setActivity(`${servers} servers.`, {type: "STREAMING", url: "https://twitch.tv/luisgabriel539"});
  		activNum = 0;
  	}


  }, 10 * 1000)
});

// Create an event listener for messages
	bot.on('message', message => {
	if(message.channel.type === "dm") return;

	  	if (!message.guild) return;

	
	let prefix = config.prefix;
	let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let args = messageArray.slice(1);

	if(!message.content.startsWith(prefix)) return;
		if (message.content === ".") {
		message.reply('type **.help** to a guide.');
		}


	let arquivocmd = bot.commands.get(command.slice(prefix.length));
	if(arquivocmd) return arquivocmd.run(bot,message,args);


	});

bot.login(config.token);