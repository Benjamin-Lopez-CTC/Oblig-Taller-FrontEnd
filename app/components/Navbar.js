"use client"

import { useEffect } from "react";

import Image from "next/image";
import GralIcon from "./../images/icons/list-gral.png";
import LocalesIcon from "./../images/icons/list-local.png";
import PlatosIcon from "./../images/icons/list-plato.png";
import { useState } from "react";
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [user, setUser] = useState(null);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setUser(user);
    }, []);

    const mostrarPerfil = () => {
        if (user == null) {
            return (
                <div className="hidden gap-3 lg:flex lg:flex-1 lg:justify-end">
                    <a
                        href="./../login"
                        className="text-sm/6 font-semibold text-white"
                    >
                        Login <span aria-hidden="true">&rarr;</span>
                    </a>
                    <a
                        href="./../register"
                        className="text-sm/6 font-semibold text-white"
                    >
                        Registrarse <span aria-hidden="true">&uarr;</span>
                    </a>
                </div>
            );
        } else {
            return (
                <Popover className="relative">
                    <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
                        Perfil
                        <ChevronDownIcon
                            aria-hidden="true"
                            className="size-5 flex-none text-gray-500"
                        />
                    </PopoverButton>

                    <PopoverPanel
                        transition
                        className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-teal-950 outline-1 -outline-offset-1 outline-white/10 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                    >
                        <div className="p-4">
                            <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5">
                                <div className="flex-auto">
                                    <a
                                        href="./../AltaLocal"
                                        className="block font-semibold text-white"
                                    >
                                        Mi perfil
                                    </a>
                                    <p className="mt-1 text-gray-400">
                                        Informacion de mi cuenta
                                    </p>
                                </div>
                            </div>
                            <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5">
                                <div className="flex-auto">
                                    <button
                                        className="block font-semibold text-white"
                                        onClick={() => {
                                            localStorage.removeItem("user");
                                            setUser(null);
                                            alert("Sesión cerrada correctamente");
                                        }}
                                    >
                                        Cerrar sesión
                                    </button>
                                </div>
                            </div>
                        </div>
                    </PopoverPanel>
                </Popover>
            );
        }
    };

    const mostrarRegistroMobile = () => {
        if (user == null) {
            return (
                <div className="py-6">
                    <a
                        href="./../login"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                        Login
                    </a>
                    <a
                        href="./../register"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                        Registrarse
                    </a>
                </div>
            );
        } else {
            return (
                <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-white/5">
                        Perfil
                        <ChevronDownIcon
                            aria-hidden="true"
                            className="size-5 flex-none group-data-open:rotate-180"
                        />
                    </DisclosureButton>

                    <DisclosurePanel className="mt-2 space-y-2">
                        <div className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-white/5">
                            <a
                                href="./../AltaLocal"
                                className="block ps-5 font-semibold text-white"
                            >
                                Mi perfil
                            </a>
                        </div>

                        <div className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-white/5">
                            <button                                
                                className="block ps-5 font-semibold text-white"
                                onClick={() => {
                                    localStorage.removeItem("user");
                                    setUser(null);
                                    alert("Sesión cerrada correctamente");
                                }}
                            >
                                Cerrar sesión
                            </button>
                        </div>
                    </DisclosurePanel>
                </Disclosure>
            );
        }
    };

    return (
        <header className="bg-teal-900">
            <nav
                aria-label="Global"
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            >
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            alt=""
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                            className="h-8 w-auto"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                    >
                        <span className="sr-only">Menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
                            Listados
                            <ChevronDownIcon
                                aria-hidden="true"
                                className="size-5 flex-none text-gray-500"
                            />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-teal-950 outline-1 -outline-offset-1 outline-white/10 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                            <div className="p-4">
                                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5">
                                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                                        <Image src={GralIcon} alt="icono" />
                                    </div>
                                    <div className="flex-auto">
                                        <a
                                            href="/"
                                            className="block font-semibold text-white"
                                        >
                                            Listado general
                                        </a>
                                        <p className="mt-1 text-gray-400">
                                            Ver locales y platos
                                        </p>
                                    </div>
                                </div>
                                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5">
                                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                                        <Image src={LocalesIcon} alt="icono" />
                                    </div>
                                    <div className="flex-auto">
                                        <a
                                            href="./../Locales"
                                            className="block font-semibold text-white"
                                        >
                                            Locales con filtrado
                                        </a>
                                        <p className="mt-1 text-gray-400">
                                            Buscar locales específicos
                                        </p>
                                    </div>
                                </div>
                                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5">
                                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                                        <Image src={PlatosIcon} alt="icono" />
                                    </div>
                                    <div className="flex-auto">
                                        <a
                                            href="./../Platos"
                                            className="block font-semibold text-white"
                                        >
                                            Platos con filtrado
                                        </a>
                                        <p className="mt-1 text-gray-400">
                                            Buscar platos específicos
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
                            Cargar
                            <ChevronDownIcon
                                aria-hidden="true"
                                className="size-5 flex-none text-gray-500"
                            />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-teal-950 outline-1 -outline-offset-1 outline-white/10 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                            <div className="p-4">
                                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5">
                                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                                        <a
                                            href="#"
                                            className="text-sm/6 font-semibold text-white"
                                        >
                                            icono
                                        </a>
                                    </div>
                                    <div className="flex-auto">
                                        <a
                                            href="./../AltaLocal"
                                            className="block font-semibold text-white"
                                        >
                                            Locales
                                        </a>
                                        <p className="mt-1 text-gray-400">
                                            Cargar nuevos locales
                                        </p>
                                    </div>
                                </div>
                                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5">
                                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                                        <a
                                            href="#"
                                            className="text-sm/6 font-semibold text-white"
                                        >
                                            icono
                                        </a>
                                    </div>
                                    <div className="flex-auto">
                                        <a
                                            href="#"
                                            className="block font-semibold text-white"
                                        >
                                            Platos
                                        </a>
                                        <p className="mt-1 text-gray-400">
                                            Cargar nuevos platos
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </PopoverPanel>
                    </Popover>
                    {mostrarPerfil()}
                </PopoverGroup>
            </nav>
            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="lg:hidden"
            >
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-teal-950 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-400"
                        >
                            <span className="sr-only">Cerrar</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-white/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-white/5">
                                        Listado
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="size-5 flex-none group-data-open:rotate-180"
                                        />
                                    </DisclosureButton>

                                    <DisclosurePanel className="mt-2 space-y-2">
                                        <div className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-white/5">
                                            <a
                                                href="/"
                                                className="block ps-5 font-semibold text-white"
                                            >
                                                Listado general
                                            </a>
                                        </div>

                                        <div className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-white/5">
                                            <a
                                                href="./../Locales"
                                                className="block ps-5 font-semibold text-white"
                                            >
                                                Locales
                                            </a>
                                        </div>

                                        <div className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-white/5">
                                            <a
                                                href="./../Platos"
                                                className="block ps-5 font-semibold text-white"
                                            >
                                                Platos
                                            </a>
                                        </div>
                                    </DisclosurePanel>
                                </Disclosure>

                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-white/5">
                                        Cargar
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="size-5 flex-none group-data-open:rotate-180"
                                        />
                                    </DisclosureButton>

                                    <DisclosurePanel className="mt-2 space-y-2">
                                        <div className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-white/5">
                                            <a
                                                href="./../AltaLocal"
                                                className="block ps-5 font-semibold text-white"
                                            >
                                                Locales
                                            </a>
                                        </div>

                                        <div className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-white/5">
                                            <a
                                                href="./../AltaPlato"
                                                className="block ps-5 font-semibold text-white"
                                            >
                                                Platos
                                            </a>
                                        </div>
                                    </DisclosurePanel>                                
                                </Disclosure>
                                {mostrarRegistroMobile()}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
