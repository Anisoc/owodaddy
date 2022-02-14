import owo from "owoifyx";
import Chance from "chance";
import "dotenv/config";
import { Client, Intents } from "discord.js";

const chance = new Chance();
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const c = process.env.OWO_C || 5;

const token = process.env.OWO_TOKEN;

if (c == null || token == null) {
  console.log(c, token);
  throw "Please set OWO_C and OWO_TOKEN.";
}

client.on("ready", () => {
  console.log(`Logged in as ${client?.user?.tag}, with chance ${c}!`);
});

client.on("message", (msg) => {
  if (msg.author.id == "942816078055239720") return;
  const p = chance.integer({ min: 0, max: 100 });
  console.log(msg.content, p);
  if (c <= p)
    msg.reply({
      content: owo(msg.content),
      allowedMentions: { repliedUser: false },
    });
});

client.login(token);
