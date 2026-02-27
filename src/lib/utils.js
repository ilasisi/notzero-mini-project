export const currentTime = () => {
    return new Date().toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
};

export const randomItem = (items) => {
    return items[Math.floor(Math.random() * items.length)];
};

export const randomNames = ["Tunde", "Aisha", "Chinedu", "Sola", "Yemi"];
export const randomMessages = [
    "Thanks for reaching out! I'll get back to you shortly.",
    "Hi! I've received your message and will respond soon.",
    "Hello 👋 Thanks for your message. I'll reply as soon as I can.",
    "Your message has been received. Talk soon!",
    "Thanks for contacting me. I'll get back to you shortly.",
    "Hi there! I'm currently unavailable but will respond soon.",
    "Message received 👍 I'll reply as soon as possible.",
    "Thanks for the message! I'll be in touch shortly.",
    "Hello! I've seen your message and will get back to you.",
    "Thanks for reaching out. I'll respond when I'm available.",
];
