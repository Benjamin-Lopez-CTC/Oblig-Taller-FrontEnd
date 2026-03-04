export const BusquedaPlatos = ({
    setQuery,
    setCategory,
    setDateFrom,
    setDateTo,
    setCity,
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
                    htmlFor="category"
                    className="block text-sm/6 mb-2 font-semibold text-white"
                >
                    Categoria
                </label>
                <select
                    id="category"
                    name="category"
                    type="text"
                    onChange={(e) => setCategory(e.target.value)}
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-mist-700 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-emerald-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                >
                    <option value="">Todos</option>
                    <option value="ENTRADA">Entrada</option>
                    <option value="PRINCIPAL">Principal</option>
                    <option value="POSTRE">Postre</option>
                    <option value="BEBIDA">Bebida</option>
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
                    htmlFor="fechaDesde"
                    className="block text-sm/6 mb-2 font-semibold text-white"
                >
                    Fecha desde
                </label>
                <input
                    id="fechaDesde"
                    name="fechaDesde"
                    type="date"
                    onChange={(e) => setDateFrom(e.target.value)}
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-mist-700 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-emerald-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                />
            </div>
            <div>
                <label
                    htmlFor="fechaHasta"
                    className="block text-sm/6 mb-2 font-semibold text-white"
                >
                    Fecha hasta
                </label>
                <input
                    id="fechaHasta"
                    name="fechaHasta"
                    type="date"
                    onChange={(e) => setDateTo(e.target.value)}
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-mist-700 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-emerald-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                />
            </div>
        </div>
    );
};
