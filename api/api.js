// URL Base
const BaseURL = "https://api-react-taller-production.up.railway.app";

// Registro
const register = async (username, name, password) => {
    const response = await fetch(`${BaseURL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({ username, name, password })
    })

    const data = await response.json();

    console.log("Informacion de registro", data);

    return data;
}

// Login
const login = async (username, password) => {
    const response = await fetch(`${BaseURL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({ username, password })
    })

    const data = await response.json();

    console.log("Informacion de login", data);

    return data;
}

// Mostrar Locales
const traerLocales = async () => {
    const data = await fetch(`${BaseURL}/api/locals`).then((res) => res.json());
    return data;
}

// Mostrar Locales filtrados
const getLocalesFiltrados = async (q="", type="", priceRange="", rating="", city="", zone="") => {
    const data = await fetch(`${BaseURL}/api/locals?q=${q}&type=${type}&priceRange=${priceRange}&rating=${rating}&city=${city}&zone=${zone}`).then(res => res.json());
    return data;
}

// Mostrar Platos
const traerPlatos = async () => {
    const data = await fetch(`${BaseURL}/api/dishes`).then((res) => res.json());
    return data;
}

// Mostrar Platos filtrados
const getPlatosFiltrados = async (q="", category="", dateFrom="", dateTo="", city="", localId="") => {
    const data = await fetch(`${BaseURL}/api/dishes?q=${q}&category=${category}&dateFrom=${dateFrom}&dateTo=${dateTo}&city=${city}&localId=${localId}`).then(res => res.json());
    return data;
}

export {
    register,
    login,
    traerLocales,
    traerPlatos,
    getLocalesFiltrados,
    getPlatosFiltrados
}