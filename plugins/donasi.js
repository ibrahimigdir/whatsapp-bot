let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Dana/Ovo/Axis [083129621297]
│ • Telkomsel [081331954563]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
