let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/2e2eb7d093fec08fd00d4.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let aine = '6289654360447@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: ` *• SEWA BOT & UP TO PREMIUM •*
        
1. 𝗦𝗘𝗪𝗔𝗕𝗢𝗧𝗭 𝗠𝗨𝗥𝗔𝗛 𝗖𝗨𝗠𝗔 10𝗞 𝗣𝗘𝗥𝗠𝗔𝗡𝗘𝗡 
   𝗠𝗜𝗡𝗔𝗧? 𝗖𝗛𝗔𝗧 𝗢𝗪𝗡𝗘𝗥 𝗗𝗜 𝗕𝗔𝗪𝗔𝗛🐤

wa.me/${owner[0]}
*Bukan Bot!!!*
*Owner ${conn.user.name}*
`,
  buttonText: 'Harga sesuai owner yang nentukan',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'7487741964584083'}]}],
  headerImage: { productId: '7487741964584083',
  jpegThumbnail: baper },
  businessOwnerJid: `6285850539404@s.whatsapp.net`
  },
  footerText: 'Follow github owner github.com/rieltod',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
