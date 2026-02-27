'use client'
import { Navbar } from "./components/Navbar"
import { LocalCard } from "./components/LocalesCard"
import { PlatoCard } from "./components/PlatosCard"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";

import { traerLocales } from "./../api/api";
import { traerPlatos } from "./../api/api";

export default function Home() {

    const router = useRouter();

    const [locales, setLocales] = useState([]);
    const [platos, setPlatos] = useState([]);

    const mostrarLocales = async () => {
        const data = await traerLocales();
        console.log(data.items);
        setLocales(data.items);
    }

    const mostrarPlatos = async () => {
        const data = await traerPlatos();
        console.log(data.items);
        setPlatos(data.items);
    }

    useEffect(() => {
        mostrarLocales();
        mostrarPlatos();
    }, [])


    // const handleSubmit = () =>{
    //     router.push("/login");
    // }

    return (
        <>
            {/* Navbar */}

            <Navbar />

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

            <br></br>

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
