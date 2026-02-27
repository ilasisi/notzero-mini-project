import { useRef, useState } from "react";
import { Message } from "./components/Message";
import {
    currentTime,
    randomItem,
    randomMessages,
    randomNames,
} from "./lib/utils";

function App() {
    const chatContainerRef = useRef();
    const [text, setText] = useState("");
    const [messages, setMessages] = useState(
        JSON.parse(localStorage.getItem("messages") ?? "[]"),
    );

    const sendMessage = (message) => {
        setMessages((messages) => {
            const newMessages = [...messages, message];
            localStorage.setItem("messages", JSON.stringify(newMessages));

            return newMessages;
        });

        chatContainerRef.current.scrollTop =
            chatContainerRef.current.scrollHeight;
    };

    const autoReply = () => {
        const text = randomItem(randomMessages);
        const name = randomItem(randomNames);

        const botMessage = {
            name,
            text,
            isSender: false,
            time: currentTime(),
        };

        sendMessage(botMessage);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newMessage = {
            name: "You",
            text: text.trim(),
            isSender: true,
            time: currentTime(),
        };

        sendMessage(newMessage);
        setText("");

        setTimeout(autoReply, 1000);
    };

    return (
        <div className="flex flex-col w-full h-dvh overflow-hidden sm:h-auto sm:rounded-2xl sm:w-125]">
            <header className="text-center bg-blue-400 text-white text-2xl p-2">
                <h1>Chat Rooms</h1>
            </header>
            <main
                ref={chatContainerRef}
                className="bg-white px-4 py-3 flex flex-col gap-3 flex-1 min-h-[80dvh] sm:min-h-125 max-h-125 overflow-y-auto scroll-smooth"
            >
                {messages.map((message, index) => (
                    <Message
                        key={index}
                        name={message.name}
                        text={message.text}
                        time={message.time}
                        isSender={message.isSender}
                    />
                ))}
            </main>
            <form onSubmit={handleSubmit}>
                <footer className="bg-white border-t border-neutral-300 p-5 flex gap-3">
                    <input
                        name="message"
                        className="flex-1 px-4 py-3 rounded-2xl border border-neutral-300"
                        placeholder="Start typing..."
                        value={text}
                        required
                        onChange={(event) => setText(event.target.value)}
                    />
                    <button
                        type="submit"
                        className="rounded-2xl bg-blue-400 border-none text-white px-4 py-3"
                    >
                        Send Message
                    </button>
                </footer>
            </form>
        </div>
    );
}

export default App;
