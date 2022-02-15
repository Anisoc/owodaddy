import Owo from "uwuifier";
import Chance from "chance";
import "dotenv/config";
import { Client, Intents } from "discord.js";

const chance = new Chance();
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const owo = new Owo({
  spaces: {
    faces: 0.5,
    actions: 0.075,
    stutters: 0.1,
  },
  words: 1,
  exclamations: 1,
});

const c = process.env.OWO_C || 5;
const id = process.env.OWO_ID;

const token = process.env.OWO_TOKEN;

if (c == null || token == null || id == null) {
  console.log(c, token);
  throw "Please set OWO_C, OWO_ID and OWO_TOKEN.";
}

client.on("ready", () => {
  console.log(`Logged in as ${client?.user?.tag}, with chance ${c}!`);
});

client.on(
  "message",
  (msg: {
    author: { id: string };
    content: string;
    reply: (arg0: {
      content: string;
      allowedMentions: { repliedUser: boolean };
    }) => void;
  }) => {
    if (msg.author.id == id) return;
    const p = chance.integer({ min: 0, max: 100 });
    console.log(msg.content, p);
    if (c >= p)
      msg.reply({
        content: owo.uwuifySentence(msg.content),
        allowedMentions: { repliedUser: false },
      });
  }
);

client.login(token);
