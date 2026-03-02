'use client'
import { PaperClipIcon } from '@heroicons/react/20/solid'

import {Navbar} from '../../components/Navbar';

import { perfilUsuario } from '../../../api/api';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Perfil() {

    const params = useParams();
    const [user, setUser] = useState({});
    const [locals, setLocals] = useState([]);

    useEffect(() => {
        const traerUsuario = async () => {
            const data = await perfilUsuario(params.id);

            console.log("Informacion del Perfil", data);

            setUser(data.item);
            setLocals(data.item.locals);            
        }
        traerUsuario();
    }, []);

    return(
        <>
        <Navbar />
        <h1>{user.name}</h1>
        <p>{user.username}</p>
        <h2>Locales</h2>
        {locals.map((local) => (
            <div key={local.id}>
                <h3>{local.name}</h3>
                <p>{local.description}</p>
            </div>
        ))} 
        </>
    )

}
