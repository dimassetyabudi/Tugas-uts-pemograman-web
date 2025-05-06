const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', socket => {
    console.log("Klien terhubung.");

    socket.on('message', message => {
        console.log("Pesan diterima:", message);

        // Kirim pesan ke semua klien yang terhubung
        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send("Pesan dari klien: " + message);
            }
        });
    });

    socket.on('close', () => {
        console.log("Klien terputus.");
    });
});