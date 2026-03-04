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

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

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

// Alta de Locales
const postLocal = async (name, type, priceRange, city, zone, address, hours, photos) => {
    const res = await fetch(`${BaseURL}/api/locals`,{
        method: "POST",
        headers:{"Content-Type" : "application/json",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({name, type, priceRange, city, zone, address, hours, photos})
    });

    const data = await res.json();

    console.log("Informacion del Local Creado", data);

    return data;
}

// Detalles de local
const getLocal = async (id) => {
    const res = await fetch(`${BaseURL}/api/locals/${id}`);
    const data = await res.json();
    return data;
}

// Detalles de usuario
const perfilUsuario = async (id) => {
    const res = await fetch(`${BaseURL}/api/users/${id}`)
    const data = await res.json();
    return data;
}

// Publicacion de reseña de local
const postReview = async (id, rating, comment) => {
    const res = await fetch(`${BaseURL}/api/locals/${id}/reviews`,{
        method: "POST",
        headers: {"Content-Type" : "application/json" ,
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({rating, comment})
    });

    console.log(res);

    if (res.ok) {
        const data = await res.json();
        return data;
    } else {
        return null;
    }
};

export {
    register,
    login,
    traerLocales,
    traerPlatos,
    getLocalesFiltrados,
    getPlatosFiltrados,
    postLocal,
    getLocal,
    perfilUsuario,
    postReview
}