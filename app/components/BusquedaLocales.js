export const BusquedaLocales = ({
    setQuery,
    setType,
    setPriceRange,
    setRating,
    setCity,
    setZone,
}) => {
    return (
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
                <label
                    htmlFor="query"
                    className="block text-sm/6 mb-2 font-semibold text-white"
                >
                    Nombre
                </label>
                <input
                    id="query"
                    name="query"
                    type="text"
                    onChange={(e) => setQuery(e.target.value)}
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-mist-700 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-emerald-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                />
            </div>
            <div>
                <label
                    htmlFor="type"
                    className="block text-sm/6 mb-2 font-semibold text-white"
                >
                    Tipo
                </label>
                <select
                    id="type"
                    name="type"
                    type="text"
                    onChange={(e) => setType(e.target.value)}
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-mist-700 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-emerald-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                >
                    <option value="">Todos</option>
                    <option value="BAR">Bar</option>
                    <option value="RESTAURANTE">Restaurante</option>
                    <option value="CAFETERIA">Cafe</option>
                    <option value="FOOD_TRUCK">Carrito</option>
                    <option value="OTROS">Otros</option>
                </select>
            </div>
            <div>
                <label
                    htmlFor="city"
                    className="block text-sm/6 mb-2 font-semibold text-white"
                >
                    Ciudad
                </label>
                <input
                    id="city"
                    name="city"
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-mist-700 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-emerald-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                />
            </div>
            <div>
                <label
                    htmlFor="rating"
                    className="block text-sm/6 mb-2 font-semibold text-white"
                >
                    Rating
                </label>
                <select
                    id="rating"
                    name="rating"
                    type="text"
                    placeholder="Rating"
                    onChange={(e) => setRating(e.target.value)}
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-mist-700 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-emerald-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                >
                    <option value="">Todos</option>
                    <option value="1">1 Estrella</option>
                    <option value="2">2 Estrellas</option>
                    <option value="3">3 Estrellas</option>
                    <option value="4">4 Estrellas</option>
                    <option value="5">5 Estrellas</option>
                </select>
            </div>
            <div>
                <label
                    htmlFor="zone"
                    className="block text-sm/6 mb-2 font-semibold text-white"
                >
                    Zona
                </label>
                <input
                    id="zone"
                    name="zone"
                    type="text"
                    onChange={(e) => setZone(e.target.value)}
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-mist-700 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-emerald-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                />
            </div>
            <div>
                <label
                    htmlFor="priceRange"
                    className="block text-sm/6 mb-2 font-semibold text-white"
                >
                    Rango de precio
                </label>
                <select
                    id="priceRange"
                    name="priceRange"
                    type="text"
                    onChange={(e) => setPriceRange(e.target.value)}
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-mist-700 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-emerald-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                >
                    <option value="">Todos</option>
                    <option value="ECONOMICO">Economico</option>
                    <option value="MEDIO">Medio</option>
                    <option value="ALTO">Alto</option>
                </select>
            </div>
        </div>
    );
};
