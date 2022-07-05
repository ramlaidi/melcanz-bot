let handler  = async (m, { conn, args }) => {
   m.reply(`Mau? Beli Sama Owner Dah full apikey`)
}
 
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc)$/i

module.exports = handler
