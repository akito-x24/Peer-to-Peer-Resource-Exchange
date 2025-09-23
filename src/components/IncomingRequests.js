// src/components/IncomingRequests.js
export default function IncomingRequests() {
  const requests = [
    { id: 1, from: "Alice", resource: "Laptop", credits: 30 },
    { id: 2, from: "Bob", resource: "Camera", credits: 50 },
  ];

  return (
    <div className="p-4 border-b">
      <h2 className="text-lg font-bold mb-2">📥 Incoming Requests</h2>
      {requests.map((req) => (
        <div key={req.id} className="border rounded p-2 mb-2 bg-gray-50">
          <p>
            <strong>{req.from}</strong> requests <em>{req.resource}</em>
          </p>
          <p className="text-sm text-gray-600">Credits: {req.credits}</p>
        </div>
      ))}
    </div>
  );
}
