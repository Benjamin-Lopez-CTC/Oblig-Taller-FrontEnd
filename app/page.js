'use client'
import {Navbar} from "./components/Navbar"
import {LocalCard} from "./components/LocalesCard"
import {PlatoCard} from "./components/PlatosCard"

import {useRouter} from "next/navigation"
import {useEffect, useState} from "react";

import {traerLocales} from "./../api/api";
import {traerPlatos} from "./../api/api";

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
        <Navbar/>

        {
            locales.map((local, index) => (
                <LocalCard key={index} local ={local}/>
            ))
        }

        <br></br>
        
        {
            platos.map((plato, index) => (
                <PlatoCard key={index} plato ={plato}/>
            ))
        }


        {/* <button type="button" onClick={handleSubmit}>
            login
        </button> */}
        {/* <div>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-white">Customers also purchased</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div className="group relative">
                        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-white">
                                    <a href="#">
                                        <span aria-hidden="true" className="absolute inset-0"></span>
                                        Basic Tee
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm text-white">Black</p>
                            </div>
                            <p className="text-sm font-medium text-white">$35</p>
                        </div>
                    </div>
        <div className="group relative">
            <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg" alt="Front of men&#039;s Basic Tee in white." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
            <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-white">
                <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Basic Tee
                </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Aspen White</p>
            </div>
            <p className="text-sm font-medium text-gray-900">$35</p>
            </div>
        </div>
        <div className="group relative">
            <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg" alt="Front of men&#039;s Basic Tee in dark gray." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
            <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">
                <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Basic Tee
                </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Charcoal</p>
            </div>
            <p className="text-sm font-medium text-gray-900">$35</p>
            </div>
        </div>
                    <div className="group relative">
                        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg" alt="Front of men&#039;s Artwork Tee in peach with white and brown dots forming an isometric cube." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
                        <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-gray-700">
                                <a href="#">
                                    <span aria-hidden="true" className="absolute inset-0"></span>
                                    Artwork Tee
                                </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">Iso Dots</p>
                        </div>
                            <p className="text-sm font-medium text-gray-900">$35</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </>
    );
}
