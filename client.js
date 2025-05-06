const socket = new WebSocket('ws://localhost:8080');

socket.onopen = () => {
    console.log("Terhubung ke server WebSocket.");
};

socket.onmessage = event => {
    const messageList = document.getElementById("messages");
    const listItem = document.createElement("li");
    listItem.textContent = event.data;
    messageList.appendChild(listItem);
};

socket.onclose = () => {
    console.log("Koneksi WebSocket ditutup.");
};

function sendMessage() {
    const input = document.getElementById("messageInput");
    socket.send(input.value);
    input.value = "";
}