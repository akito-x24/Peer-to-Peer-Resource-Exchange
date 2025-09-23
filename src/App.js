// // src/App.js
// import { useState } from "react";
// import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";

// import UserProfileBar from "./components/UserProfileBar";
// import ResourceGrid from "./components/ResourceGrid";
// import LendResourceButton from "./components/LendResourceButton";
// import RequestsPanel from "./components/RequestsPanel";
// import Chatbox from "./components/Chatbox";

// function App() {
//   const [user, setUser] = useState(null);

//   // All incoming requests
//   const [requests, setRequests] = useState([
//     { id: 1, from: "Alice", resource: "Laptop", status: "pending" },
//     { id: 2, from: "Bob", resource: "Camera", status: "pending" },
//   ]);

//   // Active chats keyed by peer name
//   const [chats, setChats] = useState({});

//   if (!user) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="text-center bg-white p-8 rounded-lg shadow-lg w-96">
//           <h1 className="text-3xl font-bold mb-6">🔐 Resource Exchange Login</h1>

//           <GoogleLogin
//             onSuccess={(credentialResponse) => {
//               const decoded = jwtDecode(credentialResponse.credential);
//               setUser(decoded);
//             }}
//             onError={() => console.log("Login Failed")}
//           />
//         </div>
//       </div>
//     );
//   }

//   // Accept / Reject handler
//   const handleRequestAction = (id, action) => {
//     const req = requests.find(r => r.id === id);
//     if (!req) return;

//     if (action === "accepted") {
//       // Open chat
//       if (!chats[req.from]) {
//         setChats(prev => ({ ...prev, [req.from]: [] }));
//         // TODO: Initialize WebSocket connection here
//       }
//     } else if (action === "rejected") {
//       // Remove request
//       setRequests(prev => prev.filter(r => r.id !== id));
//     }

//     // Update request status
//     setRequests(prev => prev.map(r => r.id === id ? { ...r, status: action } : r));
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <UserProfileBar user={user} />

//       <div className="flex flex-1 overflow-hidden">
//         {/* Left Sidebar */}
//         <aside className="w-1/4 border-r overflow-y-auto">
//           <RequestsPanel
//             requests={requests}
//             onAction={handleRequestAction}
//           />
//         </aside>

//         {/* Main Resource Grid */}
//         <main className="flex-1 overflow-y-auto">
//           <ResourceGrid />
//         </main>

//         {/* Right Sidebar - Active Chats */}
//         <aside className="w-1/4 border-l overflow-y-auto">
//           {Object.entries(chats).map(([peer, messages]) => (
//             <Chatbox key={peer} peer={peer} messages={messages} />
//           ))}
//         </aside>
//       </div>

//       <LendResourceButton />
//     </div>
//   );
// }

// export default App;


// src/App.js
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import UserProfileBar from "./components/UserProfileBar";
import ResourceGrid from "./components/ResourceGrid";
import LendResourceButton from "./components/LendResourceButton";
import ChatPanel from "./components/ChatPanel"; // merged panel

function App() {
  const [user, setUser] = useState(null);

  // Active chats: each key is peer name, value: { messages: [], hasRequest: boolean }
  const [chats, setChats] = useState({
    Alice: { messages: [{ type: "request", item: "Calculator", from: "Alice" }], active: false },
    Bob: { messages: [], active: false },
  });

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg w-96">
          <h1 className="text-3xl font-bold mb-6">🔐 Resource Exchange Login</h1>
          <GoogleLogin
            onSuccess={(res) => {
              const decoded = jwtDecode(res.credential);
              setUser(decoded);
            }}
            onError={() => console.log("Login Failed")}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <UserProfileBar user={user} />

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Chat Panel */}
        <aside className="w-1/4 border-r overflow-y-auto">
          <ChatPanel chats={chats} setChats={setChats} />
        </aside>

        {/* Main Resource Grid */}
        <main className="flex-1 overflow-y-auto">
          <ResourceGrid />
        </main>
      </div>

      <LendResourceButton />
    </div>
  );
}

export default App;
