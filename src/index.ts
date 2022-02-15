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
    faces: 0.15,
    actions: 0.1,
    stutters: 0.15,
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
    
    if (msg.author.id == 254742598177128451) 
    {
    try {
    const p2 = chance.integer({ min: 0, max: 100 });
      if (p2 == 0){
        
          msg.reply({
            content: "༼☯﹏☯༽ What the U W U did you just say about me (✿ヘᴥヘ) nyaaaa~ , you wittle (人◕ω◕) I'll have you know I gwaduated top of my cwass (◕‿◕✿) , and I've been involved in numewous hugging on evewyone! (◕ᴥ◕), and I have over thwee hundwed hugs (/・・)ノ whyaaaa~~ . I am twained in ultimut hugging and I'm the top hugger in the entire animay cult community! (ノ￣ー￣)ノ You are evewything to me owo (ﾉ･o･)ﾉ. (♥ω♥*) I will wipe you the uwu out with pwecision the wikes of which has never been seen before on this Earth!!! , mark my owo words (´⌣`ʃƪ) . You think you can get away with saying that to me over the innerwit!!! Think again, senpai-san. As we speak I am contacting my secwet network of spies across the entire earth!!!! (´∀｀•) and your virginity, oh wait where is it is being twaced right now so you better prepare for the wainbows!, senpai-san (●´艸｀)ヾ . The wainbow that bwings joy!!!!! v(^∀^*) . You're so cool!, senpai-san （＾∀＾）. I can be anywhere, anytime, and I can hug you in over seven hundwed ways (￣∇￣) , and that's just with my bare handz owyaaaa!. Not only am I extensivewy twained in unarmed hugging (´w｀*), but I have access to your heart :3 (｀▽´) and I will use it to its full extent to hug youuuu! off the face of the continent (*´∇｀*) , senpai-san.",
            allowedMentions: { repliedUser: false },
          });
          return;
          }
    } catch (err) {
      msg.reply({
        content: "sowwy OwO something *sweats* went wwong.",
        allowedMentions: { repliedUser: false },
      });
      console.log(err);
    }
    }
    
    const p = chance.integer({ min: 0, max: 100 });
    let owomsg = owo.uwuifySentence(msg.content);
    owomsg = owomsg.replace(/`/gm, "\\`");
    try {
      if (c >= p)
        if (owomsg.length <= 2000)
          msg.reply({
            content: owomsg,
            allowedMentions: { repliedUser: false },
          });
        else {
          msg.reply({
            content: "sowwy OwO youw message is too wong.",
            allowedMentions: { repliedUser: false },
          });
        }
    } catch (err) {
      msg.reply({
        content: "sowwy OwO something *sweats* went wwong.",
        allowedMentions: { repliedUser: false },
      });
      console.log(err);
    }
  }
);

client.login(token);
