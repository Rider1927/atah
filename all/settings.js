require("./module")

//================OWNER+NAMA OWNER+NAMA BOT=============\\
global.owner = "6289617554095" //nomor owner ganti aja jadi nomor asli lu
global.namabot = "Bot Plery V8" //nama bot ini
global.namaCreator = "MODS" //nama creator
//================JANGAN DI UBAH NTAR ERROR=============\\
global.autoJoin = false //NOT CHANGE / JANGAN GANTI
global.antilink = false //NOT CHANGE / JANGAN GANTI
global.versisc = 'V.8.0' //NOT CHANGE / JANGAN GANTI
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
//================BAGIAN PENGATURAN PANEL=============\\
global.domain = 'https://anjay-kintol.com' //pake domain panel mu yang aktif
global.apikey = 'plta_' //Ini bagian apikey plta kalau ga ngerti cara ambilnya chat gw 089617554095
global.capikey = 'pltc_' //ini bagian apikey pltc kalau ga ngerti cara ambilnya chat gw 089617554095
global.eggsnya = '15' //ini id eggs kalau ga tau di biarin aja
global.location = '1' //jangan diganti nanti error loh
//================LINK+GAMBAR=============\\
global.imageurl = 'https://telegra.ph/file/5499996f06bce81d47202.jpg' //ganti aja punya mu ini telegra.ph
global.imageurl2 = 'https://telegra.ph/file/95b545d3efee76c3591fd.jpg' //ganti aja punya mu ini telegra.ph
global.isLink = 'https://t.me/Murmerajabg' //bebas mau link apaan
global.thumb = fs.readFileSync("./thumb.png") ///NOT CHANGE / JANGAN GANTI
global.audionya = fs.readFileSync("./all/sound.mp3") //NOT CHANGE / JANGAN GANTI
//================I DON'T KNOW=============\\
global.rezzx9 = '' // SERAH LU TAPI JANGAN DIHAPUS TANDA '
global.rezzx1 = '' // SERAH LU TAPI JANGAN DIHAPUS TANDA '
global.rezzx2 = '' // SERAH LU TAPI JANGAN DIHAPUS TANDA '
global.rezzx3 = '' // SERAH LU TAPI JANGAN DIHAPUS TANDA '
global.rezzx4 = '' // SERAH LU TAPI JANGAN DIHAPUS TANDA '
global.rezzx5 = '' // SERAH LU TAPI JANGAN DIHAPUS TANDA '
//================I DON'T KNOW=============\\
global.tekspushkon = "" //NOT CHANGE / JANGAN GANTI
global.tekspushkonv2 = "" //NOT CHANGE / JANGAN GANTI
global.packname = "� Created By" //GANTI AJ
global.author = "RezzX" //GANTI SERAH MU
global.jumlah = "5" ////NOT CHANGE / JANGAN GANTI
global.dana = "089617554095" //ganti pake no lu jika ga punya kasih kosong aja
global.gopay = "089510054512" //ganti pake no lu jika ga punya kasih kosong aja
global.ovo = ""//isi pake no lu jika ga punya kasih kosong aja

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})