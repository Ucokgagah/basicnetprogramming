const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// Mengatur path untuk direktori views dan public sebelum digunakan
const direktoriPublic = path.join(__dirname, '../public');
const direktoriviews = path.join(__dirname, '../templates'); 

// Setup handlebars engine dan lokasi folder views
app.set('view engine', 'hbs'); // Perbaikan di sini
app.set('views', direktoriviews);

app.set('views', direktoriviews);

// Mengatur direktori public sebagai direktori untuk file statis
app.use(express.static(direktoriPublic));

// Halaman utama menggunakan Handlebars
app.get('/', (req, res) => {
    res.render('index', {
        judul: 'Aplikasi Cek Cuaca',
        nama: 'Rudi Kurnia Al A'
    });
});

// Halaman tentang
app.get('/tentang', (req, res) => {
    res.render('tentang', {
        judul: 'Tentang Saya',
        nama: 'Rudi Kurnia Al A'
    });
});

// Halaman bantuan
app.get('/bantuan', (req, res) => {
    res.render('bantuan', {
        judul: 'Halaman Bantuan',
        teksBantuan: 'Ini adalah teks bantuan',
        nama: 'Rudi Kurnia Al A'
    });
});

// Halaman infoCuaca dengan format JSON
app.get('/infoCuaca', (req, res) => {
    res.send([{
        prediksiCuaca: 'cuaca berpotensi hujan',
        lokasi: 'Padang'
    }]);
});

// Server berjalan di port 4000
app.listen(4000, () => {
    console.log('Server berjalan pada port 4000.');
});
