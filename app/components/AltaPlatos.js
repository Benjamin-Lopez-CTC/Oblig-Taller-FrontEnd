"use client";

import { useState, useEffect } from "react";
import { postLocal } from "./../../api/api";
import { useRouter } from "next/navigation";


export const AltaPlatos = () => {

    const router = useRouter();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        
        if (!user) {
            router.replace("/login");
        }
    }, []);


    return (
        <div>
            <h1>Alta Platos</h1>
        </div>
    );
}