const express = require('express');
const app = express();

// Data mahasiswa
const mahasiswa = [
    {
        nim: "123456789",
        fakultas: "Teknik",
        jurusan: "Informatika"
    },
    {
        nim: "987654321",
        fakultas: "Ilmu Sosial dan Politik",
        jurusan: "Ilmu Komunikasi"
    },
    {
        nim: "246810123",
        fakultas: "Ekonomi dan Bisnis",
        jurusan: "Manajemen"
    }
];

// Endpoint untuk mengembalikan menu
app.get('/', (req, res) => {
    res.json(mahasiswa);
});

// Port yang digunakan oleh server
const PORT = process.env.PORT || 8080;

// Mulai server
app.listen(PORT, () => {
    console.log(`Server berjalan pada port :${PORT}`);
});
