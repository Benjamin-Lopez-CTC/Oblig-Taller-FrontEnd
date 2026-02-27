'use client'
import { useState } from 'react';
import { register } from '../../api/api';

export default function Register() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [mensajeError, setMensajeError] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await register(username, name, password);

        if (data.error) {
            setMensaje("");
            setMensajeError(data.error);
        }
        else{
            setMensajeError("");
            setMensaje("Registrado correctamente");
        }
    }



    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <img
                        alt="Your Company"
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                        className="mx-auto h-10 w-auto"
                    /> */}
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
                        Registro
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label
                                htmlFor="Username"
                                className="block text-sm/6 font-medium text-gray-100"
                            >
                                Nombre de Usuario
                            </label>
                            <div className="mt-2">
                                <input
                                    id="Username"
                                    name="Username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-700 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="Name"
                                    className="block text-sm/6 font-medium text-gray-100"
                                >
                                    Nombre
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="Name"
                                    name="Name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    autoComplete="name"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-700 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="Password"
                                    className="block text-sm/6 font-medium text-gray-100"
                                >
                                    Contraseña
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="Password"
                                    name="Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-700 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <p className="mt-4 text-red-400 font-medium">
                            {mensajeError && mensajeError}
                        </p>
                        <p className="mt-4 text-green-400 font-medium">
                            {mensaje && mensaje}
                        </p>
                        <div>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="flex w-full justify-center group px-8 py-2.5 bg-emerald-500 rounded-lg text-white cursor-pointer active:scale-95 transition duration-300 hover:bg-emerald-700"
                            >
                                Registrarse
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}