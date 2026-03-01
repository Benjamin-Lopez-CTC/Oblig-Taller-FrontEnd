'use client'
import { Navbar } from "./../components/Navbar"
import { LocalCard } from "./../components/LocalesCard"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";

import { getLocalesFiltrados } from "./../../api/api";
import { BusquedaLocales } from "./../components/BusquedaLocales";

export default function Locales() {
    
    const router = useRouter();

    const [locales, setLocales] = useState([]);

    const [query, setQuery] = useState("");
    const [type, setType] = useState("");
    const [priceRange, setPriceRange] = useState("");
    const [rating, setRating] = useState("");
    const [city, setCity] = useState("");
    const [zone, setZone] = useState("");

    useEffect(() => {
        const mostrarLocales = async () => {
            const data = await getLocalesFiltrados(query, type, priceRange, rating, city, zone);
            console.log(data.items);
            setLocales(data.items);
        }

        mostrarLocales();
    }, [query, type, priceRange, rating, city, zone])

    return(
        <>
            {/* Navbar */}

            <Navbar />

            {/* Barra de busqueda */}

            <div className="max-w-9xl mx-auto px-6 mt-10">
                <h3 className="text-3xl md:text-3xl font-semibold text-gray-100 mb-8 border-b border-emerald-500 inline-block pb-2">
                    Filtros
                </h3>
            </div>

            <div className="mx-auto max-w-2xl mt-4 px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <BusquedaLocales setQuery={setQuery} setType={setType} setPriceRange={setPriceRange} setRating={setRating} setCity={setCity} setZone={setZone} />
            </div>

            {/* Locales */}
            <div className="max-w-9xl mx-auto px-6 mt-10">
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-100 mb-8 border-b border-emerald-500 inline-block pb-2">
                    Locales disponibles
                </h1>
            </div>

            <div className="w-full min-h-screen bg-mist-950">
                <div className="max-w-7x1 mx-auto px-6 py-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                        {
                            locales.map((local, index) => (
                                <LocalCard key={index} local={local} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}