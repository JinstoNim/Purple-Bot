const Discord = require('discord.js');
const botConfig = require("../botconfig");
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {

}
if(!xp[message.author.id]){
xp[message.author.id] = {
    xp: 0,
    level: 1
};
}
let curxp = xp[message.author.id].xp;
let curlvl = xp[message.author.id].level;
let nxtLvlXp = curlvl * 300;
let difference = nxtLvlXp - curxp;

let lvlembed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("00FFE8")
.addField("level", curlvl, true)
.addField("XP", curxp, true)
.setFooter(`${difference} XP til level up`)

message.channel.send(lvlembed);



module.exports.help = {
    name: "level"
}
