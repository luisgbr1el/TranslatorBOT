const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client();
const fs = require("fs");

// TO UPDATE HOW MANY GUILDS THE BOT ARE ON HTTPS://TOP.GG/ (OPTIONAL)
const DBL = require("dblapi.js");
const dbl = new DBL('DBL_API_TOKEN', bot);


bot.commands = new Discord.Collection();

// SHOW THAT THE COUNTER ARE POSTED
 dbl.on('posted', () => {
   console.log('O contador está disponível!');
 })
fs.readdir("./comandos/", (err, files) => {
	if(err) console.error(err);

	let arquivojs = files.filter(f => f.split(".").pop() == "js");
	arquivojs.forEach((f, i) =>{
		let props = require(`./comandos/${f}`);
		console.log(`Comando ${f} carregado com sucesso.`)
		bot.commands.set(props.help.name, props);
	});
});

// UPDATE THE COUNTER ON A TIME PERIOD
	bot.on('ready', () => {
		setInterval(() => {
        dbl.postStats(bot.guilds.size, bot.shards.Id, bot.shards.total);
  }, 1800000);
		
		var servers = bot.guilds.cache.size;
    	console.log('Estou pronto para ser usado! (^-^)');
		bot.user.setActivity(`t.help | ${servers} servers`, {type: "LISTENING"});
  

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
		if (message.content === "t.") {
		message.reply('type ``t.help`` to a guide.');
		}


	let arquivocmd = bot.commands.get(command.slice(prefix.length));
	if(arquivocmd) return arquivocmd.run(bot,message,args);


	});

bot.login(config.token);
