const fs = require('fs')
const chalk = require('chalk')

module.exports = {
  SESSION_ID: 'QUEENELISA;;;==ANlNkekZkdthmViFVRYd2b5wmW2ZXZ5RWaUpVMZVHSMZjNCNzSJlkT0sWTjEUUJNEaVNmWpwd=328749999562',
  ALIVE_REACT: '👋',
  ALIVE_MESSAGE: `*Hello @name [ And @gname @members Number of Members ] I am Alive Now !*

⏰ Now time is @time
📅 Date : @date

🟢 I am online still @uptime
🔄 Response Delay : @ping Ms
💻 Host : @host
🪢 Version : @version

☫ Work Mode : @mode
☫ Work Type : @worktype

ᑭᖇIᗰᗴ- M D`,
  ALIVE_MEDIA: 'https://telegra.ph/file/d842677f522b6bef4dfe6.jpg',
  MONGODB_URL: 'mongodb+srv://darrell:mucheri@cluster0.mwu1ina.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', 
  PREFIX: '.',
  LANGUAGE: 'EN',
  PORT: 3000,
  BOT_NAME: 'Prime-𝙼𝙳',
  OWNER_NAME: ' 𝙵𝚁𝙰𝙽𝙺 𝙺𝙰𝚄𝙼𝙱𝙰',
  OWNER_NUMBER: '265993702468',
  SUDO: '265993702468',
  WORK_TYPE: 'public',
  WORK_MODE: 'group',
  TIME_ZONE: 'Asia/Colombo',
  CAPTION: '© 𝙼𝙰𝙳𝙴 4 𝚈𝙾𝚄 𝙱𝚈 𝙵𝚁𝙰𝙽𝙺 𝙺𝙰𝚄𝙼𝙱𝙰❤️𝚃𝙷𝙰𝙽𝙺𝚂 𝚃𝙾 𝙼𝚁 𝙵𝚁𝙰𝙽𝙺\n   ߷ +265993702468 ߷',
  STICKER_AUTHOR: 'Frank kaumba dev',
  STICKER_PACK: '𝙵𝙸𝚇𝙸𝚃 𝙱𝚈 =>',
  REMOVE_BG_APIKEY: '',
  MAXIMUM_FILESIZE: 9000,
  OWNER_R_EMOJI: '🦠',
  ALIVE_AS_GIF: true,
  AUTO_VOICE: true,
  INBOX_BLOCK: false,
  OWNER_REACT: true,
  AUTO_REACT: true,
  ONLY_PM_GROUP_MSG_SEND: true,
  AUTO_SEEN_STATUS: true,
  BOT_OFFLINE: true,
  READ_MESSAGE: false,
  ANTI_MSG_SPAM: false,
  ANTI_BAD_WORD: true,
  ANTI_VIEW_ONES: true,
  ANTI_DELETE: true,
  BANED_USER_MSG_SEND: true,
  BLOCK_CMD_MSG_SEND: false,
  INBOX_BLOCK_MSG_SEND: false,
  CMD_CORRECT: true,
  ANTI_CHANNEL_FORWARD: false,
  ANTI_BOT: false,
  BUTTON_MESSAGES: false,
  SONG_DOWNLOAD_TYPE: 'selectable', // audio , document
  VIDEO_DOWNLOAD_TYPE: 'selectable', // video
  FB_DOWNLOAD_TYPE: 'selectable', // hdvideo , sdvideo
  TIKTOK_DOWNLOAD_TYPE: 'selectable', // nowmvideo , wmvideo
  MSG: {
    ONLY_GROUP_MSG: 'Subzero  Can Use Groups!',
    ONLY_PM_MSG: 'Subzero Can Use Private Chats!',
    BAD_DETECT_MSG: '@user Bad Words Are For Your Family Not here!\n\n𝓜𝓻 𝓕𝓻𝓪𝓷𝓴',
    BANED_MSG: "@user You Can't use SubZero, You are banned by 𝓜𝓻 𝓕𝓻𝓪𝓷𝓴!",
    GROUP_LEAVE: '👋 Bye @groupName I am Going.🥹\n\n 𝓅𝓇𝒾𝓂ℯ 𝓫𝔂 𝓜𝓻 𝓕𝓻𝓪𝓷𝓴\n\n Join\n\n https://chat.whatsapp.com/D30Er6xlMDf0IFjLkUtULW',
    INBOX_BLOCK:
      '❌ 𝙼𝚁 𝙵𝚁𝙰𝙽k has activated auto inbox blocking. So you will be auto blocked after 8 seconds starting now...\n\n *𝙲𝙾𝙽𝚃𝙰𝙲𝚃 𝙷𝙸𝙼 𝙾𝙽 +263719647303* \n\n '
  },
  BOT_RULES:
    "*⚖️ 𝘱𝘳𝘪𝘮𝘦 𝙱𝙾𝚃 𝚁𝚄𝙻𝙴𝚂 ⚖️*\n\n☫ Don't spam messages.\n☫ Don't add groups without asking owner.\n"
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright('Update ' + __filename))
  delete require.cache[file]
  require(file)
})
