import { useState } from "react";

const usersData = [
    { id: 1, name: "Ariunbayr", email: "Ariunbayr@gmail.com" },
    { id: 2, name: "Munkhbaysgalan", email: "munkhbaysgalan@gmail.com" },
    { id: 3, name: "Erdenejargal", email: "Erdejenjargal23@gmail.com" },
    { id: 4, name: "Bilguuntugs", email: "Bilguuntugs@gmail.com" },
    { id: 5, name: "Badraa", email: "Badraaa@gmail.com" },
    { id: 6, name: "Chinbiligt", email: "Chinbe@gmail.com" },
    { id: 7, name: "Delgermurun", email: "SNM777@gmail.com" },
    { id: 8, name: "Gunbileg", email: "Gunbileg@gmail.com" },
    { id: 9, name: "Erdenebold", email: "Erdenebold@gmail.com" },
    { id: 10, name: "Jargal", email: "Jargal@gmail.com" },
    { id: 11, name: "Khangarid", email: "Khangarid@gmail.com" },
    { id: 12, name: "Nomindari", email: "Nomio@gmail.com" },
    { id: 13, name: "Siilen", email: "Siilen@gmail.com" },
    { id: 14, name: "Munkhnaran", email: "Munkhnaran@gmail.com" },
    { id: 15, name: "Temuge", email: "Temuge@gmail.com" },
    { id: 16, name: "Temuulen", email: "Temuulen@gmail.com" },
    { id: 17, name: "Tuvshin", email: "Tuvshin@gmail.com" },
    { id: 18, name: "Undrakh", email: "Undrakh@gmail.com" },
    { id: 19, name: "Ganerdene", email: "Ganaa@gmail.com" },
];

export default function Home() {
    const [grid, setGrid] = useState(false);
    const [search, setSearch] = useState("");

    const filteredData = usersData.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className="w-screen h-screen bg-black overflow-y-auto">
            <div className="p-8 max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-5xl font-semibold text-green-400">
                        Хэрэглэгчийн жагсаалт
                    </h1>
                    <button
                        onClick={() => setGrid(!grid)}
                        className="px-8 py-4 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-300 ease-in-out"
                    >
                        {grid ? "Жагсаалт харах руу шилжих" : "Grid view рүү шилжих"}
                    </button>
                </div>
                <div className="mb-8">
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        className={`w-full p-4 border-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition ease-in-out duration-200 ${
                            search ? "border-green-500" : "border-gray-700"
                        }`}
                        placeholder="Хэрэглэгчийн нэрийг хайх..."
                    />
                </div>
                <div className={grid ? "grid grid-cols-2 gap-8" : "space-y-8"}>
                    {filteredData.map((user) => (
                        <div
                            key={user.id}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl border-4 hover:border-green-500 transition ease-in-out duration-300 transform hover:scale-105"
                        >
                            <h3 className="text-2xl font-semibold text-gray-900">
                                {user.id}. {user.name}
                            </h3>
                            <p className="text-gray-600 mt-2">{user.email}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
