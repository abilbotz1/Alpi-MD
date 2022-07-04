let handler = async m => m.reply(`
`››╭─〘 *Donasi* 〙
╭╡🏮» Donasi ngab jangan gunain doang
│┝ ➪ » 083813417529 (Axis)
│╰───···─────
│⁺◛˖ 
╰──────────···───╮`
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
