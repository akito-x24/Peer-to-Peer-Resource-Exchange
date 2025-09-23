// src/components/ChatPanel.js
export default function ChatPanel({ chats, setChats }) {
  const handleRequestAction = (peer, action) => {
    setChats(prev => {
      const peerChat = prev[peer];
      if (!peerChat) return prev;

      if (action === "accepted") {
        return {
          ...prev,
          [peer]: {
            ...peerChat,
            active: true,
            messages: [
              ...peerChat.messages,
              { type: "info", text: "Request accepted!" },
            ],
          },
        };
      } else if (action === "rejected") {
        return {
          ...prev,
          [peer]: {
            ...peerChat,
            messages: peerChat.messages.filter(msg => msg.type !== "request"),
          },
        };
      }
      return prev;
    });
  };

  return (
    <div className="flex flex-col h-full p-4 bg-gray-100 overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">💬 Chats & Requests</h2>

      {Object.entries(chats).map(([peer, chat]) => (
        <div key={peer} className="border rounded p-3 mb-3 bg-white shadow">
          <h3 className="font-semibold mb-2">{peer}</h3>

          {chat.messages.map((msg, idx) => {
            if (msg.type === "request") {
              return (
                <div key={idx} className="mb-2 p-2 bg-yellow-100 rounded">
                  <p>
                    {msg.from} is requesting for <strong>{msg.item}</strong>
                  </p>
                  {!chat.active && (
                    <div className="mt-1 flex gap-2">
                      <button
                        className="bg-green-500 text-white px-2 py-1 rounded"
                        onClick={() => handleRequestAction(peer, "accepted")}
                      >
                        Accept
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded"
                        onClick={() => handleRequestAction(peer, "rejected")}
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              );
            } else if (msg.type === "info") {
              return (
                <div key={idx} className="mb-2 text-green-600">
                  {msg.text}
                </div>
              );
            } else {
              return (
                <div key={idx} className="mb-2 p-2 bg-gray-200 rounded">
                  {msg.text}
                </div>
              );
            }
          })}

          {chat.active && (
            <input
              className="w-full border mt-2 p-1 rounded"
              placeholder={`Message ${peer}...`}
              onKeyDown={e => {
                if (e.key === "Enter" && e.target.value.trim() !== "") {
                  const text = e.target.value;
                  setChats(prev => ({
                    ...prev,
                    [peer]: {
                      ...prev[peer],
                      messages: [...prev[peer].messages, { type: "chat", text }],
                    },
                  }));
                  e.target.value = "";
                }
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

