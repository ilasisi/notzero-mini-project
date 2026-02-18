const chatContainer = document.querySelector(".chat-content");

export const messages = JSON.parse(localStorage.getItem("messages")) || [];

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

export default renderMessage;
