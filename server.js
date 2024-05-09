const express = require('express');
const app = express();

// Data menu makanan dan minuman
const menu = [
    {
        nama: "Nasi Goreng",
        jenis: "Makanan",
        harga: 25000
    },
    {
        nama: "Ayam Goreng",
        jenis: "Makanan",
        harga: 30000
    },
    {
        nama: "Soto Ayam",
        jenis: "Makanan",
        harga: 28000
    },
    {
        nama: "Es Teh Manis",
        jenis: "Minuman",
        harga: 8000
    },
    {
        nama: "Jus Alpukat",
        jenis: "Minuman",
        harga: 12000
    }
];


// Endpoint untuk mengembalikan menu
app.get('/', (req, res) => {
    res.json(menu);
});

// Port yang digunakan oleh server
const PORT = process.env.PORT || 8080;

// Mulai server
app.listen(PORT, () => {
    console.log(`Server berjalan pada port :${PORT}`);
});
