const fs = require('fs') 
fs.writeFileSync('catatan.txt', 'Nama Saya Rudi Kurnia Al Amin') 
//fs.appendFileSync('catatan.txt', ' Saya tinggal di lumpo') 

const validator = require('validator') 
const ambilCatatan = require('./catatan.js') 
const pesan = ambilCatatan() 
console.log(pesan) 
console.log(validator.isURL('https://RudiKurnia.com'))

const chalk = require('chalk');

// Mencetak teks dengan warna merah
console.log(chalk.red('print warna merah sukses'));