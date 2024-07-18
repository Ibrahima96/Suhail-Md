const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_02_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNixcbiAgICAgICAgNTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4LFxuICAgICAgICA2NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDYwLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDksXG4gICAgICAgIDksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUxLFxuICAgICAgICA4NixcbiAgICAgICAgMTk2LFxuICAgICAgICA0NixcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMDksXG4gICAgICAgIDkyLFxuICAgICAgICAxNDksXG4gICAgICAgIDk2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDg1LFxuICAgICAgICA2NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2LFxuICAgICAgICA5OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEzLFxuICAgICAgICA4MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNixcbiAgICAgICAgMjksXG4gICAgICAgIDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIsXG4gICAgICAgIDksXG4gICAgICAgIDI1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAwLFxuICAgICAgICAxMyxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMzksXG4gICAgICAgIDQzLFxuICAgICAgICAxODQsXG4gICAgICAgIDU5LFxuICAgICAgICA0MixcbiAgICAgICAgMTgzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxLFxuICAgICAgICA4LFxuICAgICAgICA0MixcbiAgICAgICAgODcsXG4gICAgICAgIDQzLFxuICAgICAgICA0NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxODUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3LFxuICAgICAgICA5MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc4LFxuICAgICAgICA2NixcbiAgICAgICAgMjEyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NixcbiAgICAgICAgOTksXG4gICAgICAgIDQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIno4WVVEVG5IZGwwRXVIcHBoeUw5dDc1Wm5hVFlSY3MrT0RuN0w4aFJKUzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjIxNzYwMjYzNjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFOUVFQTZDQzFCRjM1OEE4Njc4MDM1OEU1N0QxNjNEMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzNDAxMjRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaTZFWUp0R0ZRTmlnQzF2V2t2ZHNjQVwiLFxuICBcInBob25lSWRcIjogXCI4ZDU1ODczMC0yYTRiLTRlMDAtOGNhOC0wYzc2NWM0MWFhMWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOSxcbiAgICAgIDE1MSxcbiAgICAgIDE4NSxcbiAgICAgIDIyNSxcbiAgICAgIDcsXG4gICAgICA4MCxcbiAgICAgIDE0MCxcbiAgICAgIDYyLFxuICAgICAgMjQ4LFxuICAgICAgNTAsXG4gICAgICAyMixcbiAgICAgIDM3LFxuICAgICAgMjEzLFxuICAgICAgMjMxLFxuICAgICAgODQsXG4gICAgICAxMzcsXG4gICAgICAxMTQsXG4gICAgICAzMixcbiAgICAgIDE1MixcbiAgICAgIDEyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MixcbiAgICAgIDg4LFxuICAgICAgMjAxLFxuICAgICAgNzIsXG4gICAgICA5OSxcbiAgICAgIDE2NyxcbiAgICAgIDIyLFxuICAgICAgNDYsXG4gICAgICAyNTMsXG4gICAgICAyMzEsXG4gICAgICA2MixcbiAgICAgIDcsXG4gICAgICA0OCxcbiAgICAgIDExLFxuICAgICAgNzQsXG4gICAgICAyMSxcbiAgICAgIDE5MCxcbiAgICAgIDE4NCxcbiAgICAgIDE1MCxcbiAgICAgIDE5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5WVNaSzdaS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjIxNzYwMjYzNjMxOjkyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi44OT44O844Kz44Oe44OrLkJpY29tYXJ1IFNob2d1bmHEq1wiLFxuICAgIFwibGlkXCI6IFwiODM5NjY3Nzg0MDkxNTk6OTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmJTMkt3R0VOV2g1clFHR0JVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSRTNMdzBHM0RyNS83UFNZcTBIWkFrOG53aC8rbVJlb0N1WU50R0RZSndJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInRQVFFVVFNIWXE3dDA5QmxFdVVOTFJDTjBlMHQyVUFzZWlNMm5hWjFKRnlvNU9DajJxczRJWjdlSmRMT1J1RC94ODFCajNzV3ZpbFpNcXZIaGt4NUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk55aTZNa2pKbjVBbkFzTHVPS0dkOWIzUzUwYVp1UWVIRHZuZnA1eVNtNW5ZM3dNakVjY0lvYTZsdThEUndpbll0cThROFNSTWliSk9ZZFVHNkRabmhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyMTc2MDI2MzYzMTo5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzNDAxMjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMSktcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxKSy5qc29uIjogIntcImtleURhdGFcIjpcImZHT1RLUU1QNjg3eTZGdG1lWGxPa045akFQc1ljbDR5YlZ5SHJwMklvTzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcwNDMzOTczNCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
