import { Client as DiscordClient, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';

export const Client = new DiscordClient({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

Client.login(process.env.DISCORD_TOKEN);

export const getChannel = (id: string) => {
  const guild = Client.guilds.cache.first();

  return guild.channels.cache.get(id);
};
