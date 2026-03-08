"use client";

import { Navbar } from "./../../components/Navbar";
import DetallesLocal from "./../../components/DetallesLocal";
import { Footer } from "./../../components/Footer";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const VerLocal = () => {
    const router = useRouter();

    useEffect(() => {
        const userLS = JSON.parse(localStorage.getItem("user"));

        if (!userLS) {
            router.replace("/login");
        }
    }, []);

    return (
        <>
            <Navbar />
            <DetallesLocal />
            <Footer />
        </>
    );
};

export default VerLocal;
