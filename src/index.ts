import { Client } from "discord.js"
import { IntentOptions } from "./config/intentionsOptions"
import { onInteraction } from "./config/onInteraction";
import { onReady } from "./events/onReady";

(async () => {
  const BOT = new Client({intents: IntentOptions});
 
  BOT.on("ready", async () => await onReady(BOT));

  BOT.on(
    "interactionCreate",
    async (interaction) => await onInteraction(interaction)
  );

  await BOT.login(process.env.BOT_TOKEN);
})();