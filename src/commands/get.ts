import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "../interfaces/Command";
import { MessageEmbed } from "discord.js";

export const test: Command = {
  data: new SlashCommandBuilder()
    .setName("get")
    .setDescription("Get the link to GitHub profile")
    .addStringOption((option) =>
      option
        .setName("username")
        .setDescription("GitHub username")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("repository")
        .setDescription("GitHub repository")
        .setRequired(false)
    ),

    run: async (interaction) => {

      await interaction.deferReply();

      const { user } = interaction;
      const username = interaction.options.getString("username", true);
      const repository = interaction.options.getString("repository", false);
      const reply = new MessageEmbed();

      reply.setColor('#d62d2d')
      reply.addField('Account', username, true)
      reply.setAuthor({name : 'asked for a link', iconURL: user.displayAvatarURL()})

      if(repository) reply.setDescription('https://github.com/' + username + '/' + repository)
      else reply.setDescription('https://github.com/' + username)
      if(repository) reply.addField('Repository', repository, true)
      
      await interaction.editReply({ embeds: [reply] });
    }
};