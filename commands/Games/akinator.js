const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const akinator = require("discord.js-akinator");

module.exports = { //if [OPTIONAL] it means, you don't need to type it!
  name: "akinator", //the Command Name [REQUIRED]
  category: "Games", //the Command Category [OPTIONAL]
  aliases: ['aki'], //the command aliases [OPTIONAL]
  cooldown: 2, //the Command Cooldown (Default in /botconfig/settings.json) [OPTIONAL]
  usage: "", //the Command usage [OPTIONAL]
  description: "The Akinator game", //the command description [OPTIONAL]
  memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
  requiredroles: [], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
  alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
  minargs: 0, // minimum args for the message, 0 == none [OPTIONAL]
  maxargs: 0, // maximum args for the message, 0 == none [OPTIONAL]
  minplusargs: 0, // minimum args for the message, splitted with "++" , 0 == none [OPTIONAL]
  maxplusargs: 0, // maximum args for the message, splitted with "++" , 0 == none [OPTIONAL]
  argsmissing_message: "", //Message if the user has not enough args / not enough plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  argstoomany_message: "", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const language = "en"; //The Language of the Game
    const childMode = false; //Whether to use Akinator's Child Mode
    const gameType = "character"; //The Type of Akinator Game to Play. ("animal", "character" or "object")
    const useButtons = false; //Whether to use Discord's Buttons
    const embedColor = "RANDOM"; //The Color of the Message Embeds

    akinator(message, {
        language: language, //Defaults to "en"
        childMode: childMode, //Defaults to "false"
        gameType: gameType, //Defaults to "character"
        useButtons: useButtons, //Defaults to "false"
        embedColor: embedColor //Defaults to "RANDOM"
    });
}
}