const express = require('express')
const app = express()

// Halaman utama dengan format HTML
app.get('', (req, res) => {
    res.send('<h1>Selamat datang di halaman utama</h1>')
})

// Halaman bantuan dengan format HTML
app.get('/bantuan', (req, res) => {
    res.send('<h1>Ini halaman bantuan</h1>')
})

// Halaman infoCuaca dengan format JSON
app.get('/infoCuaca', (req, res) => {
    res.send([{
        prediksiCuaca: 'cuaca berpotensi hujan',
        lokasi: 'Padang'
    }])
})

// Halaman tentang dengan format JSON
app.get('/tentang', (req, res) => {
    res.send([{
        nama: 'Rudi Kurnia Al A',
        pekerjaan: 'Mahasiswa'
    }])
})

// Server berjalan di port 4000
app.listen(4000, () => {
    console.log('Server berjalan pada port 4000.')
})
