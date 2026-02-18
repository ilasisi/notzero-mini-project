import renderMessage, { messages } from "./message.js";
import {
    currentTime,
    randomItem,
    randomMessages,
    randomNames,
} from "./utils.js";

const input = document.querySelector("input");
const submitButton = document.querySelector("button");

const sendMessage = () => {
    const text = input.value.trim();

    if (text === "") {
        alert("Please your message");
        return;
    }

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

renderMessage();

submitButton.addEventListener("click", sendMessage);

input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});
