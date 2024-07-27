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
global.gurl  =process.env.GURL  || "https://wa.me/qr/O2VNE2KEHPJZB1";
global.website=process.env.GURL || "https://wa.me/qr/O2VNE2KEHPJZB1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d3363fddb7a5143013385.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "☛𝐓𝐑𝐈𝐋𝐋𝐒-𝐌𝐃☚" 


global.devs = "2347025369036" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347025369036";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347025369036";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_48_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTgsXG4gICAgICAgIDg4LFxuICAgICAgICAyOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTksXG4gICAgICAgIDk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAyLFxuICAgICAgICAzLFxuICAgICAgICA4NixcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDYzLFxuICAgICAgICA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA3OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAzMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwLFxuICAgICAgICA0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDk3LFxuICAgICAgICA5NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDczLFxuICAgICAgICA0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDgzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDksXG4gICAgICAgIDYzLFxuICAgICAgICAxODcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY1LFxuICAgICAgICA4NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIngzMUpkSHJXMVhUczcySjhOenlYQjRnNzkzblBtYnhLQ0hodTd0M0YxNWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkwyRUdCckZjU0VhZ05YNlg1TzJrMFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWUzNjBhMjUtMGQzMy00ZWM1LTg4YjItZTQxN2NiZGZhYTM1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMyxcbiAgICAgIDEyMSxcbiAgICAgIDE1MyxcbiAgICAgIDEyOSxcbiAgICAgIDIxMyxcbiAgICAgIDcyLFxuICAgICAgMTk2LFxuICAgICAgNDQsXG4gICAgICAyNTAsXG4gICAgICAyMDksXG4gICAgICAyMzIsXG4gICAgICA3OCxcbiAgICAgIDE5NixcbiAgICAgIDE5LFxuICAgICAgMTEwLFxuICAgICAgMTAyLFxuICAgICAgMjcsXG4gICAgICAxNzIsXG4gICAgICA5OSxcbiAgICAgIDE0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjAsXG4gICAgICAyNyxcbiAgICAgIDExMixcbiAgICAgIDc5LFxuICAgICAgODAsXG4gICAgICAzMSxcbiAgICAgIDE1MSxcbiAgICAgIDEzNixcbiAgICAgIDExNCxcbiAgICAgIDk0LFxuICAgICAgMjMzLFxuICAgICAgNzYsXG4gICAgICAyMTcsXG4gICAgICA4OCxcbiAgICAgIDIyMCxcbiAgICAgIDIwMCxcbiAgICAgIDE1NSxcbiAgICAgIDg3LFxuICAgICAgMjU0LFxuICAgICAgMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSE45UVhQUUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMjUzNjkwMzY6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2NDY5MDgyMjk2MzI0MjozMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPN052UGdCRVBpNWxiVUdHQk1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInJwN1NjS0JjcGVqUW01QkxXTDZWYnh3YUFuZUU0OEk3UUdjMGZLaFd1aE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUG5aVUE4RnlXK1lucWxPRW50YnBhclRsMTlkQTFnQ2g4VzlNQ05aSzNNck85MUg4TnFuZnBPV0hOQmFzQlFZWU9mTkord01xbjk2ak5pbWNQZmpyQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTTJSWXpmVnN2UzVUbG82d0pkK0J5VG4zSDFMc2dZemlwOVZiRElVNUdtdGdxSSt4UUxNQTM5UU12S1NCSGE1RnN6UFFJN1o5aVVCY0h6ejJDbDhMRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAyNTM2OTAzNjozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjExMzI3NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
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

  
