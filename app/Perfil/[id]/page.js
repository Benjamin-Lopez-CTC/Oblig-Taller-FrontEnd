"use client";

import { Navbar } from "../../components/Navbar";
import { RestaurantCard } from "./../../components/CartaLocalPerfil";
import { DishCard } from "./../../components/CartaPlatoPerfil";

import { perfilUsuario } from "../../../api/api";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Perfil() {
    const params = useParams();
    const [user, setUser] = useState({});
    const [locals, setLocals] = useState([]);
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        const traerUsuario = async () => {
            const data = await perfilUsuario(params.id);

            console.log("Informacion del Perfil", data);

            setUser(data.item);
            setLocals(data.item.locals);
            setDishes(data.item.dishes);
        };
        traerUsuario();
    }, []);

    return (
        <>
            <Navbar />
            <main className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-32">
                <header className="mb-20">
                    <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-emerald-400 mb-2">
                        {user.name}
                    </h1>
                    <p className="text-lg text-gray-400">@{user.username}</p>
                </header>

                <p className="text-5xl text-emerald-400 border-b border-emerald-500 inline-block pb-2 font-semibold mb-6">
                    Locales
                </p>

                <div className="w-full mb-10 bg-mist-950">
                    <div className="max-w-7xl mx-auto px-6 py-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                            {locals.map((local, index) => (
                                <RestaurantCard
                                    key={index}
                                    name={local.name}
                                    location={local.city}
                                    price={local.priceRange}
                                    image={
                                        local.photos &&
                                        local.photos.length > 0 &&
                                        local.photos[0].startsWith("https")
                                            ? local.photos[0]
                                            : "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <p className="text-5xl text-emerald-400 border-b border-emerald-500 inline-block pb-2 font-semibold mb-6">
                    Platos
                </p>

                <div className="w-full mb-10 bg-mist-950">
                    <div className="max-w-7xl mx-auto px-6 py-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                            {dishes.map((dish, index) => (
                                <DishCard
                                    key={index}
                                    name={dish.name}
                                    category={dish.category}
                                    price={dish.price}
                                    image={
                                        dish.photos &&
                                        dish.photos.length > 0 &&
                                        dish.photos[0].startsWith("https")
                                            ? dish.photos[0]
                                            : "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
