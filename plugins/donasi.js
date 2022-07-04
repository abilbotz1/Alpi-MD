let handler = async m => m.reply(`
╭─〘 *Donasi* 〙
╭╡📮: Donasi ngab jgan gunain doang.
│┝‷✧ *Pulsa:* 083813417529 [Axis]
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat nomor dibawah
│    
╰──────────···───╮`
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
