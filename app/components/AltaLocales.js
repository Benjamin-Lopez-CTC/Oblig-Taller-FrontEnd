'use client'

import { useState } from 'react';
import {postLocal} from './../../api/api';

export const AltaLocales = () => {
    const [name , setName] = useState("");
    const [type , setType] = useState("");
    const [priceRagne , setPriceRange] = useState("");
    const [city , setCity] = useState("");
    const [zone , setZone] = useState("");
    const [address , setAddress] = useState("");
    const [hours , setHours] = useState("");
    const [photo , setPhoto] = useState("");
    const [photos , setPhotos] = useState([]);

    const [campoObligatorioPH, setCampoObligatorioPH] = useState("");
    const [campoObligatorio, setCampoObligatorio] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        setPhotos([...photos, photo]);
        setPhoto("");
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const data = await postLocal(name, type, priceRagne, city, zone, address, hours, photos);

        if(data.error){
            setCampoObligatorioPH("Campo obligatorio");
            setCampoObligatorio("Campo obligatorio");
        }
    }

    return (
        <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 pointer-events-none"
            >
                {/* <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[1440.5px] max-w-none -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[2887.5px]"
                />  */}
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-balance text-emerald-100 sm:text-5xl">
                    Alta Locales
                </h2>
                <p className="mt-2 text-lg/8 text-gray-600">
                    Ingresa tu local
                </p>
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
                                placeholder={campoObligatorioPH}
                                onChange={(e) => setCity(e.target.value)}
                                autoComplete="family-name"
                                className="block w-full rounded-md bg-mist-700 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-emerald-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="zone"
                            className="block text-sm/6 font-semibold text-white"
                        >
                            Zona
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="zone"
                                name="zone"
                                type="text"
                                autoComplete="zone"
                                onChange={(e) => setZone(e.target.value)}
                                className="block w-full rounded-md bg-mist-700 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-emerald-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label
                            htmlFor="address"
                            className="block text-sm/6 font-semibold text-white"
                        >
                            Dirección
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="address"
                                name="address"
                                type="text"
                                autoComplete="organization"
                                onChange={(e) => setAddress(e.target.value)}
                                className="block w-full rounded-md bg-mist-700 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-emerald-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="hours"
                            className="block text-sm/6 font-semibold text-white"
                        >
                            Horas
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="hours"
                                name="hours"
                                type="text"
                                onChange={(e) => setHours(e.target.value)}
                                autoComplete="hours"
                                className="block w-full rounded-md bg-mist-700 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-emerald-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                            />
                        </div>
                    </div>
                    <select
                        id="type"
                        name="type"
                        type="text"
                        placeholder="Tipo"
                        onChange={(e) => setType(e.target.value)}
                        autoComplete="given-name"
                        className="block w-full rounded-md bg-mist-700 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-emerald-700 placeholder:text-mist-500 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                    >
                        <option defaultValue={'default value'} disabled className='text-mist-500'>Tipo de local</option>
                        <option value="BAR">Bar</option>
                        <option value="RESTAURANTE">Restaurante</option>
                        <option value="CAFETERIA">Cafe</option>
                        <option value="FOOD_TRUCK">Carrito</option>
                        <option value="OTROS">Otros</option>
                    </select>
                    {campoObligatorio && <p className='text-red-500 text-sm'>{campoObligatorio}</p>}

                    <select
                        id="priceRange"
                        name="priceRange"
                        type="text"
                        placeholder="Rango de Precio"
                        onChange={(e) => setPriceRange(e.target.value)}
                        autoComplete="given-name"
                        className="block w-full rounded-md bg-mist-700 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-emerald-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                    >
                        <option value="" defaultValue={'default value'} className='text-mist-500' disabled>Rango de precio</option>
                        <option value="ECONOMICO">Economico</option>
                        <option value="MEDIO">Medio</option>
                        <option value="ALTO">Alto</option>
                    </select>
                    {campoObligatorio && <p className='text-red-500 text-sm'>{campoObligatorio}</p>}
                    
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="photo"
                            className="block text-sm/6 font-semibold text-white"
                        >
                            Photo
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="photo"
                                name="photo"
                                type="text"
                                onChange={(e) => setPhoto(e.target.value)}
                                className="block w-full rounded-md bg-mist-700 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-emerald-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600"
                                defaultValue={""}
                            />
                        </div>
                    </div>
                    <button
                        onClick={handleClick}
                        className="block  rounded-md bg-emerald-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                    >
                        Subir Foto
                    </button>
                </div>
                {photos.map((photo) => (
                    <p key={photo}>{photo}</p>
                ))}

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
}
