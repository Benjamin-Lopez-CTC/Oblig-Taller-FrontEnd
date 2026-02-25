const BaseURL = "https://api-react-taller-production.up.railway.app";

const register = async ( username , name , password ) => {
    const response = await fetch(`${BaseURL}/api/auth/register` , {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({username , name , password})
    })

    const data = await response.json();

    console.log("Informacion de registro", data);
}

const traerLocales = async () =>{
    const data = await fetch (`${BaseURL}/api/locals`).then((res) => res.json());
    return data;
}

const traerPlatos = async () =>{
    const data = await fetch (`${BaseURL}/api/dishes`).then((res) => res.json());
    return data;
}

export {
    register,
    traerLocales,
    traerPlatos,
}