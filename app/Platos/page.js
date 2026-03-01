'use client'
import { Navbar } from "./../components/Navbar"
import { PlatoCard } from "./../components/PlatosCard"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";

import { traerPlatos } from "./../../api/api";

export default function Platos() {
    
    const router = useRouter();

    const [platos, setPlatos] = useState([]);

    const mostrarPlatos = async () => {
        const data = await traerPlatos();
        console.log(data.items);
        setPlatos(data.items);
    }

    useEffect(() => {
        mostrarPlatos();
    }, [])


    return(
        <>
            {/* Navbar */}

            <Navbar />

            {/* Platos */}
            <div className="max-w-9xl mx-auto px-6 mt-10">
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-100 mb-8 border-b border-emerald-500 inline-block pb-2">
                    Platos disponibles
                </h1>
            </div>

            <div className="w-full min-h-screen bg-mist-950">
                <div className="max-w-7x1 mx-auto px-6 py-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                        {
                            platos.map((plato, index) => (
                                <PlatoCard key={index} plato={plato} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}