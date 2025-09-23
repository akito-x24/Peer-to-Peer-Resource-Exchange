// src/components/ResourceGrid.js
export default function ResourceGrid() {
  const resources = [
    { id: 1, name: "Laptop", credits: 20, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Camera", credits: 30, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Projector", credits: 40, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Books", credits: 10, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Tablet", credits: 15, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Guitar", credits: 25, image: "https://via.placeholder.com/150" },
    { id: 7, name: "Drone", credits: 50, image: "https://via.placeholder.com/150" },
    { id: 8, name: "VR Headset", credits: 35, image: "https://via.placeholder.com/150" },
    { id: 1, name: "Notes", credits: 20, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Calculator", credits: 30, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Umbrella", credits: 40, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Mouse", credits: 10, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Pendrive", credits: 15, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Permanent Marker", credits: 25, image: "https://via.placeholder.com/150" },
    { id: 7, name: "Induction", credits: 50, image: "https://via.placeholder.com/150" },
    { id: 8, name: "Chair", credits: 35, image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="p-6 grid grid-cols-4 gap-4">
      {resources.map((res) => (
        <div key={res.id} className="border rounded-lg p-4 shadow bg-white">
          <img src={res.image} alt={res.name} className="w-full h-32 object-cover mb-2 rounded" />
          <h3 className="font-semibold">{res.name}</h3>
          <p className="text-sm text-gray-600">Credits: {res.credits}</p>
        </div>
      ))}
    </div>
  );
}
