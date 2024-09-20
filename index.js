// instalasi modul http
const http = require('http')

// buat server
const server = http.createServer((req, res) =>{
    // res.writeHead(200, { 'Content-Type': 'text/html'});
    // res.write('Selamat Pagi');

    res.writeHead(200, { 'Content-Type': 'application/json'});

    if (req.url === '/dosen'){  
        messeage = 'List data dosen';
        data = ['Ahmad', 'Dimas', 'Widi']; 
    } else if (req.url === '/mahasiswa'){
        message = 'List data Mahasiswa';
        data = ['Bryan', 'Niko', 'Stephen'];
    } else {
        message = 'Tidak ditemukan';
        data = [];
    }
    res.write(JSON.stringify({
        'message' : message,
        'data' : data,
        'status' : 'status'
}));
    res.end()
} );

const port = 300;
const host = 'localhost';

server.listen(port, host, () => [
    console.log(`Server Berjalan di http://${host}:${port}`)
])