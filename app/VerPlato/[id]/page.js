"use client";

import { Navbar } from "./../../components/Navbar";
import DetallesPlato from "./../../components/DetallesPlato";
import { Footer } from "./../../components/Footer";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const VerPlato = () => {
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
            <DetallesPlato />
            <Footer />
        </>
    );
};

export default VerPlato;
