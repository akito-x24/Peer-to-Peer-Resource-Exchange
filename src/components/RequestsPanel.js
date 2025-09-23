// src/components/RequestsPanel.js
export default function RequestsPanel({ requests, onAction }) {
  return (
    <div className="flex flex-col h-full border-r bg-gray-100 p-4 overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">📩 Requests & DM</h2>

      {requests.map(req => (
        <div key={req.id} className="border rounded p-3 mb-3 bg-white shadow">
          <p>
            <strong>{req.from}</strong> requests <em>{req.resource}</em>
          </p>

          {req.status === "pending" ? (
            <div className="mt-2 flex gap-2">
              <button
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                onClick={() => onAction(req.id, "accepted")}
              >
                Accept
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                onClick={() => onAction(req.id, "rejected")}
              >
                Reject
              </button>
            </div>
          ) : (
            <p className={`mt-2 font-semibold ${req.status === "accepted" ? "text-green-600" : "text-red-600"}`}>
              {req.status.toUpperCase()}
            </p>
          )}
        </div>
      ))}

      {requests.length === 0 && <p className="text-gray-500">No incoming requests.</p>}
    </div>
  );
}
