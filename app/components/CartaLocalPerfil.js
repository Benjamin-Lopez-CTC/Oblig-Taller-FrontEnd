export function RestaurantCard({ name, location, price, image }) {
    return (
        <article className="group cursor-pointer">
            <div className="relative bg-card-dark rounded-2xl overflow-hidden border 2 border-emerald-700 hover:border-emerald-500/50 transition-colors duration-300">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-800">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                        style={{ backgroundImage: `url('${image}')` }}
                    />
                </div>

                <div className="p-5 flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors">
                            {name}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">{location}</p>
                    </div>
                    <span className="text-gray-400 text-sm mb-3">
                        {price ? price : "Precio no disponible"}
                    </span>
                </div>
            </div>
        </article>
    );
}