const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/476208407d14e0aa2d2bd.mp4" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://wa.me/qr/O2VNE2KEHPJZB1"                       // put your app url here,
global.email ="havefun777444@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://wa.me/message/O7YN7O7IZ7ZNN1";
global.website=process.env.GURL || "https://wa.me/message/O7YN7O7IZ7ZNN1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d3363fddb7a5143013385.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "☛𝐓𝐑𝐈𝐋𝐋𝐒-𝐌𝐃☚" 


global.devs = "2347082703155" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347082703155";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347082703155";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/476208407d14e0aa2d2bd.mp4" // "null" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_22_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTksXG4gICAgICAgIDQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDM5LFxuICAgICAgICA4NixcbiAgICAgICAgODUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3LFxuICAgICAgICAzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIsXG4gICAgICAgIDczLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTExLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDc1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjIwLFxuICAgICAgICA0OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDgyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDMwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNixcbiAgICAgICAgNzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDksXG4gICAgICAgIDksXG4gICAgICAgIDM2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NixcbiAgICAgICAgMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE2LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVTFUWWh3Y1lITDUveUdKZGlQK0pUNlQ3YmsrNWZTUGdud2JiVk42M0JDQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUTc4dFZQdzNTX2VYRkUwREZnNlBmUVwiLFxuICBcInBob25lSWRcIjogXCJhZjAyNGI3Yy05OWE2LTQ5ZmEtYWFkMC1iMDU3NGQ5M2FhZjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOCxcbiAgICAgIDI0LFxuICAgICAgMjM1LFxuICAgICAgMjMxLFxuICAgICAgMjQyLFxuICAgICAgNTksXG4gICAgICAxMTgsXG4gICAgICAyNDgsXG4gICAgICAxNixcbiAgICAgIDEzNyxcbiAgICAgIDI0NSxcbiAgICAgIDEwMSxcbiAgICAgIDE5OCxcbiAgICAgIDU0LFxuICAgICAgMTQwLFxuICAgICAgMTAxLFxuICAgICAgMjQ3LFxuICAgICAgMTQ5LFxuICAgICAgMTk2LFxuICAgICAgMTcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNyxcbiAgICAgIDI0MixcbiAgICAgIDcyLFxuICAgICAgMTgsXG4gICAgICA2MCxcbiAgICAgIDE2NixcbiAgICAgIDIxOCxcbiAgICAgIDIxMixcbiAgICAgIDM5LFxuICAgICAgOTEsXG4gICAgICAxNDEsXG4gICAgICAxNTQsXG4gICAgICAxMTcsXG4gICAgICA5NixcbiAgICAgIDI1LFxuICAgICAgMTY2LFxuICAgICAgMTg3LFxuICAgICAgNzUsXG4gICAgICAxMTUsXG4gICAgICAxMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjM3V0JKUTNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwODI3MDMxNTU6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuC6uGlcIixcbiAgICBcImxpZFwiOiBcIjc0MDY3MzMxODIxNTcxOjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUG01aHNjQ0VLMzJzYlVHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqMUhTektLVDd2bGlheHFRZlQ0dkV3SGpMd3pzb0p4cWRMMVAzdzZ5RGhzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9XbkJVc3pPOXJKQ2xZRUtaN1dFd01MaG55SDZJNGpqTFFleUM2eVNjTHMyb01udkovZkR6N1RmR2FLK0ltaS9BVkgzY0c1NWtpVnNhV0dVdHg2SkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxHd05QK0gxY09NQ3h0anJaRU1Jdi9yNFUvQnBNTVhPZHc4YmZuRU9YK0IyZHo1VytXQnp1RDh0cUtCSWpRRXV4RTlLWXRtbSsrQVNMUE5mV0dGTER3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODI3MDMxNTU6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI1Nzk3NjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPK3pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU8rei5qc29uIjogIntcImtleURhdGFcIjpcIm1jKzhOMnZBdklMNllNcVpSZ01jcm42QTRrL3VLaWpwSGVNbWJ0OU5oODA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Njg1ODc0NDI1LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "☛𝐓𝐑𝐈𝐋𝐋𝐒-𝐌𝐃☚" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐓𝐑𝐈𝐋𝐋𝐒-𝐌𝐃 』```", //*『dm • trills tech』*\n https://wa.me/qr/O2VNE2KEHPJZB1"),
 
  author : process.env.PACK_AUTHER|| "☛𝗧𝗥𝗜𝗟𝗟𝗦☚",
  packname: process.env.PACK_NAME || "☛𝐓𝐑𝐈𝐋𝐋𝐒-𝐌𝐃☚",
  botname : process.env.BOT_NAME  || "☛𝐓𝐑𝐈𝐋𝐋𝐒-𝐌𝐃☚",
  ownername:process.env.OWNER_NAME|| "☛𝗧𝗥𝗜𝗟𝗟𝗦☚",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "TRILLS"  ).toUpperCase(),



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
  //userImages:process.env.USER_IMAGES|| "https://telegra.ph/file/d3363fddb7a5143013385.jpg",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

  
