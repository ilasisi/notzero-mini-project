const input = document.querySelector("input");
const submitButton = document.querySelector("button");
const chatContainer = document.querySelector(".chat-content");

const sendMessage = () => {
    const message = input.value.trim();

    renderMessage("You", message, "message sender");

    input.value = "";

    setTimeout(autoReply, 1000);
};

const autoReply = () => {
    const message = randomItem(randomMessages);
    const name = randomItem(randomNames);

    renderMessage(name, message, "message receiver");
};

const renderMessage = (name, message, className) => {
    const messageContainer = document.createElement("div");

    messageContainer.className = className;

    messageContainer.innerHTML = `
    <p class="name">${name}:</p>
    <p class="text">${message}</p>
    <p class="time">${currentTime()}</p>
    `;

    chatContainer.appendChild(messageContainer);

    chatContainer.scrollTop = chatContainer.scrollHeight;
};

submitButton.addEventListener("click", sendMessage);

input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});
