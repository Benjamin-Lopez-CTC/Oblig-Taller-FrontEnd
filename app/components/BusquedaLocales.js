export const BusquedaLocales = ({setQuery , setType , setPriceRange , setRating , setCity , setZone}) => {

    return( 
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <input
                id="query"
                name="query"
                type="text"
                placeholder="Nombre"
                onChange={(e) => setQuery(e.target.value)}
                autoComplete="given-name"
                className="block w-full rounded-md  px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-emerald-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
            />
            <select
                id="type"
                name="type"
                type="text"
                placeholder="Tipo"
                onChange={(e) => setType(e.target.value)}
                autoComplete="given-name"
                className="block w-full rounded-md  px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
            >
                <option value="" disabled selected>Tipo de local</option>
                <option value="">Todos</option>
                <option value="BAR">Bar</option>
                <option value="RESTAURANTE">Restaurante</option>
                <option value="CAFETERIA">Cafe</option>
                <option value="FOOD_TRUCK">Carrito</option>
                <option value="OTROS">Otros</option>
            </select>
            <input
                id="city"
                name="city"
                type="text"
                placeholder="Ciudad"
                onChange={(e) => setCity(e.target.value)}
                autoComplete="given-name"
                className="block w-full rounded-md  px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
            />
            <select
                id="rating"
                name="rating"
                type="text"
                placeholder="Rating"
                onchange={(e) => setType(e.target.value)}
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-emerald-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
            >
                <option value="" selected disabled>Rating</option>
                <option value="1">1 Estrella</option>
                <option value="2">2 Estrellas</option>
                <option value="3">3 Estrellas</option>
                <option value="4">4 Estrellas</option>
                <option value="5">5 Estrellas</option>
            </select>
            <input
                id="zone"
                name="zone"
                type="text"
                placeholder="Zona"
                onChange={(e) => setZone(e.target.value)}
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
            />
            <select
                id="priceRange"
                name="priceRange"
                type="text"
                placeholder="Price Range"
                onChange={(e) => setPriceRange(e.target.value)}
                autoComplete="given-name"
                className="block w-full rounded-md  px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
            >
                <option value="" disabled selected>Rango de precio</option>
                <option value="">Todos</option>
                <option value="ECONOMICO">Economico</option>
                <option value="MEDIO">Medio</option>
                <option value="ALTO">Alto</option>
            </select>
        </div>
    )
}
