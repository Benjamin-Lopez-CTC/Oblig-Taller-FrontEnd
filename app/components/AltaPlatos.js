"use client";

import { useState, useEffect } from "react";
import { postPlato } from "./../../api/api";
import { useRouter } from "next/navigation";

export const AltaPlatos = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [localID, setLocalID] = useState("");
    const [city, setCity] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [campoObligatorioPH, setCampoObligatorioPH] = useState("");
    const [campoObligatorio, setCampoObligatorio] = useState("");

    const router = useRouter();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            router.replace("/login");
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await postPlato(
            name,
            category,
            localID,
            city,
            price,
            description,
        );

        if (data.error) {
            setCampoObligatorioPH("Campo obligatorio");
            setCampoObligatorio("Campo obligatorio");
        } else {
            alert("Plato dado de alta con exito");

            setCampoObligatorioPH("");
            setCampoObligatorio("");

            setName("");
            setCategory("");
            setLocalID("");
            setCity("");
            setPrice("");
            setDescription("");
        }
    };

    return (
        <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 pointer-events-none"
            ></div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-balance text-emerald-100 sm:text-5xl">
                    Alta Platos
                </h2>
                <p className="mt-2 text-lg/8 text-gray-600">Ingresa tu plato</p>
            </div>
            <form
                action="#"
                method="POST"
                className="mx-auto mt-16 max-w-lg sm:mt-20"
            >
                <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="first-name"
                            className="block text-sm/6 font-semibold text-white"
                        >
                            Nombre
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                value={name}
                                autoComplete="given-name"
                                placeholder={campoObligatorioPH}
                                onChange={(e) => setName(e.target.value)}
                                className="block w-full rounded-md bg-mist-700 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-emerald-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="city"
                            className="block text-sm/6 font-semibold text-white"
                        >
                            Ciudad
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="city"
                                name="city"
                                type="text"
                                value={city}
                                placeholder={campoObligatorioPH}
                                onChange={(e) => setCity(e.target.value)}
                                autoComplete="family-name"
                                className="block w-full rounded-md bg-mist-700 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-emerald-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="localID"
                            className="block text-sm/6 font-semibold text-white"
                        >
                            ID de Local
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="localID"
                                name="localID"
                                type="text"
                                value={localID}
                                placeholder={campoObligatorioPH}
                                autoComplete="localID"
                                onChange={(e) => setLocalID(e.target.value)}
                                className="block w-full rounded-md bg-mist-700 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-emerald-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label
                            htmlFor="price"
                            className="block text-sm/6 font-semibold text-white"
                        >
                            Precio
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="price"
                                name="price"
                                type="number"
                                min="1"
                                value={price}
                                autoComplete="price"
                                onChange={(e) => setPrice(e.target.value)}
                                className="block w-full rounded-md bg-mist-700 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-emerald-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label
                            htmlFor="price"
                            className="block text-sm/6 font-semibold text-white"
                        >
                            Descripcion
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="price"
                                name="price"
                                value={description}
                                autoComplete="price"
                                onChange={(e) => setDescription(e.target.value)}
                                className="block w-full rounded-md bg-mist-700 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-emerald-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 min-h-32 resize-none"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="category"
                            className="block text-sm/6 font-semibold text-white"
                        >
                            Categoria
                        </label>
                        <select
                            id="category"
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="block w-full rounded-md bg-mist-700 px-3.5 mt-2.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-emerald-700 placeholder:text-mist-500 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                        >
                            <option value="ENTRADA">Entrada</option>
                            <option value="PRINCIPAL">Principal</option>
                            <option value="POSTRE">Postre</option>
                            <option value="BEBIDA">Bebida</option>
                            <option value="OTROS">Otros</option>
                        </select>
                        {campoObligatorio && (
                            <p className="text-red-500 text-sm">
                                {campoObligatorio}
                            </p>
                        )}
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="block w-full rounded-md bg-emerald-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                    >
                        Dar de Alta
                    </button>
                </div>
            </form>
        </div>
    );
};
