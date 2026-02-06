const input = document.querySelector("input");
const submitButton = document.querySelector("button");
const chatContainer = document.querySelector(".chat-content");

const messages = JSON.parse(localStorage.getItem("messages")) || [];

const sendMessage = () => {
    const text = input.value.trim();

    messages.push({
        name: "You",
        text,
        isSender: true,
        time: currentTime(),
    });

    localStorage.setItem("messages", JSON.stringify(messages));

    renderMessage();

    input.value = "";

    setTimeout(autoReply, 1000);
};

const autoReply = () => {
    const text = randomItem(randomMessages);
    const name = randomItem(randomNames);

    messages.push({
        name,
        text,
        isSender: false,
        time: currentTime(),
    });

    localStorage.setItem("messages", JSON.stringify(messages));

    renderMessage();
};

const renderMessage = () => {
    chatContainer.innerHTML = "";
    messages.forEach((message) => {
        const messageContainer = document.createElement("div");

        messageContainer.classList.add(
            "message",
            message.isSender ? "sender" : "receiver",
        );

        messageContainer.innerHTML = `
    <p class="name">${message.name}:</p>
    <p class="text">${message.text}</p>
    <p class="time">${message.time}</p>
    `;

        chatContainer.appendChild(messageContainer);
    });

    chatContainer.scrollTop = chatContainer.scrollHeight;
};

renderMessage();

submitButton.addEventListener("click", sendMessage);

input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});
