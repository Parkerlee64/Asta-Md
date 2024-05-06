//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "astromedia0010@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Astropeda/Asta-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/P37NWrz.jpeg";
global.devs = "2349168023704";
global.sudo = process.env.SUDO || "2349168023704";
global.owner = process.env.OWNER_NUMBER || "2349168023704";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 4;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Astro;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUF6Ly9xcW5rWTZsTlEzVVJySWthNXRRNDFzT3k5MnlHSGIzQUs3TEpGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnBwVUpUb1dLYnNrT3pyT1NYWE5vbU0xblc2OG41U29oaEM0cndQd1dtdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRml5QWUzZHhqRTIwUlkyVHd3NVd3MkYvaG83MFF3bjRsQlJvUEkxQTJFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSTDNPa0NuN3RCZjVFSEhHbGowdllrRWFTSEptczlXZVhnVkdyY003OEFzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNDY09IQVVJK1ByT2VhY2RFSitlL2Q2RkJ3c3NnQm9NVmY0Y09pdVFna1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ1cTNxK3huVkJPL3pTazduK3RtM1JpYVlhRFFzUU9mZnpaZno2c0tnUlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0JJaTJidFpkZUJFWmh3ZVd0YUoydlYrTllMRWYzWlY4M1pGaVlBaDUyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVi94SmR0MG5TdHRUUGM0VUM3eTlOK05kK0pRQzFOZG4vU3VXNUdBZ0NuND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNndkhTbS9TUWdCc2tHaGFUWEJVNENFR2w2c20wMmNDRG9QNjJjV3FwOXdIeGMydDdXanRCTVM4dkRadEk4MWdIanBsK0pOUEZXMnhuT3pxdWpWRGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ2LCJhZHZTZWNyZXRLZXkiOiIvOC9vVVVMTndTSDdiRWZlNVAyL20wanBuUmtsNkRRc002akhhZzhQbjhZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2em1hcGNES1RtU0M4N0RScW5HU3pBIiwicGhvbmVJZCI6IjY3YTQxYTJiLTQ0NDctNDhiZS1hOTEwLTI4NGQ1OWM2YWI2MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkdkJDWjVDSlhTQThXUmFVRGxHR2doMWcwSFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1pHb1UwTEprZnR6TS9KckFXNko2dlIwY3NJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdRQVBKOFA0IiwibWUiOnsiaWQiOiIyMzQ5MTY4MDIzNzA0OjE4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlBhcmtlciBMZWUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wydTBLRUhFTHpTNUxFR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Iml3OElra1M0ZFRhdk1VWkNWRko4YU53QmYxeFBYL2I3d3JXaWJnZEVZU1k9IiwiYWNjb3VudFNpZ25hdHVyZSI6IndWUnpRYWM1REx0YktBZUJqVWRMZk5RdE9RUElDYTdVV3FDei9vZTRtR2xSS3k4UUlpbEkzbU1JVE9EcS80L3ZLVEF0cUlFUXdkNW1jbnVlRThVSEF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkQ3FEaG5MUjRrOEhUMVlnbUdZWlV6WXNKUXRpZ1hqSW1jbmRtdmxPWkNkMUtWZm1kSXNSemJXb3pTVVlUeThhdUhxWCtIM0cwWjNJLzJpQ3UzcUlqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxNjgwMjM3MDQ6MThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXNQQ0pKRXVIVTJyekZHUWxSU2ZHamNBWDljVDEvMis4SzFvbTRIUkdFbSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNTAyMjE1NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFamsifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©ᴀsᴛᴀ ᴍᴅ",
  author: process.env.PACK_AUTHER || "ᴀsᴛᴀ ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "parker lee",
  ownername: process.env.OWNER_NAME || "parkerlee",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ASTA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
