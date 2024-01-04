const socket = io("http://localhost:3000", { transports: ["websocket"] });

// extract message and messages from the DOM
const message = document.getElementById("message");
const messages = document.getElementById("messages");

// listen for the 'message' event from the server
socket.on("message", ({ data }) => {
    handleNewMessage(data);
});

// listen for the 'history' event from the server
socket.on("chat-history", ({ data: history }) => {
    if (!history) return;

    if (Array.isArray(history)) {
        for (let i = 0; i < history.length; i++) handleNewMessage(history[i]);
        return;
    }
    handleNewMessage(history);
});

// send a message to the server when the form is submitted
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function submitMessageToServer() {
    socket.emit("message", { data: message.value.trim() });
    clearInput();
}

function handleNewMessage(data) {
    messages.appendChild(createNewMessage(data));
}

function createNewMessage(data) {
    const textMsg = document.createElement("div");
    textMsg.classList.add("message-div");

    // add the message to the DOM
    textMsg.appendChild(document.createTextNode(data));

    return textMsg;
}

function clearInput() {
    message.value = "";
}
