"use client";
import { Navbar } from "./../components/Navbar";
import { PlatoCard } from "./../components/PlatosCard";
import { Footer } from "./../components/Footer";

import { useEffect, useState } from "react";

import { getPlatosFiltrados } from "./../../api/api";
import { BusquedaPlatos } from "./../components/BusquedaPlatos";

export default function Platos() {
    const [platos, setPlatos] = useState([]);

    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("");
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [city, setCity] = useState("");

    useEffect(() => {
        const mostrarPlatos = async () => {
            const data = await getPlatosFiltrados(
                query,
                category,
                dateFrom,
                dateTo,
                city,
            );
            console.log(data.items);
            setPlatos(data.items);
        };
        mostrarPlatos();
    }, [query, category, dateFrom, dateTo, city]);

    return (
        <>
            {/* Navbar */}

            <Navbar />

            {/* Barra de busqueda */}

            <div className="max-w-9xl mx-auto px-6 mt-10">
                <h3 className="text-3xl md:text-3xl font-semibold text-gray-100 mb-5 border-b border-emerald-500 inline-block pb-2">
                    Filtros
                </h3>
            </div>

            <div className="mx-5 max-w-2xl my-4 px-4 sm:px-6  lg:max-w-4xl lg:px-8">
                <BusquedaPlatos
                    setQuery={setQuery}
                    setCategory={setCategory}
                    setDateFrom={setDateFrom}
                    setDateTo={setDateTo}
                    setCity={setCity}
                />
            </div>

            {/* Platos */}
            <div className="max-w-9xl mx-auto px-6 mt-10">
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-100 mb-8 border-b border-emerald-500 inline-block pb-2">
                    Platos disponibles
                </h1>
            </div>

            <div className="w-full min-h-screen bg-mist-950">
                <div className="max-w-7x1 mx-auto px-6 py-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                        {platos.map((plato, index) => (
                            <PlatoCard key={index} plato={plato} />
                        ))}
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}