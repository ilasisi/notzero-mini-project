export const Message = ({ name, text, time, isSender }) => {
    return (
        <div
            className={`px-4 py-3 rounded-2xl w-7/12 ${isSender ? "bg-blue-400 text-white self-end" : "bg-neutral-200"} `}
        >
            <p className="text-sm font-bold uppercase opacity-70">{name}:</p>
            <p className="my-2">{text}</p>
            <p className="text-sm opacity-70">{time}</p>
        </div>
    );
};
