export function PlatoCard({ plato }) {
    return (
        <>
            <div className="p-4 bg-mist-950 rounded-lg shadow max-w-80 border-1 border-emerald-700">
                <img className="w-full h-48 object-cover rounded-md"
                    src={plato.photos ? plato.photos[0] : "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"}
                    alt={plato.name} />
                <div className="flex justify-between items-center">
                    <p className="text-white text-xl font-semibold">
                        {plato.name}
                    </p>
                    <span className="text-sm text-gray-400">
                        {plato.category}
                    </span>
                </div>
                <p className="text-white font-semibold text-sm mb-3">{plato.description}</p>
                <p className="text-gray-200 mb-3">{plato.price ? "$" + plato.price : "Precio Desconocido"}</p>
                <button className="group px-8 py-2.5 bg-emerald-500 rounded-lg text-white cursor-pointer active:scale-95 transition duration-300 hover:bg-emerald-700">
                    <p className="relative h-6 overflow-hidden">
                        <span>Detalles</span>
                    </p>
                </button>
            </div>
        </>
    );
} 