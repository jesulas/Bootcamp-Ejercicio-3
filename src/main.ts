import "./style.css";

console.log("Hello Typescript!");

interface Grupo {
    Nombre: string;
    Año: number;
    Activo : boolean;
    Tipo_musical: string;
}
const grupo1: Grupo = {
    Nombre: "The Beatles",
    Año: 1960,
    Activo : true,
    Tipo_musical: "Pop Rock",
}
const grupo2: Grupo = {
    Nombre: "Queen",
    Año: 1970,
    Activo : false,
    Tipo_musical: "Rock",
}
const grupo3: Grupo = {
    Nombre: "AC DC",
    Año: 1973,
    Activo : true,
    Tipo_musical: "Hard Rock",
}
const grupo4: Grupo = {
    Nombre: "Ludwig van Beethoven",
    Año: 1973,
    Activo : false,
    Tipo_musical: "Clásica",
}
const grupo5: Grupo = {
    Nombre: "The Rolling Stones",
    Año: 1962,
    Activo : true,
    Tipo_musical: "Rock",
}

console.log(grupo1);
console.log(grupo2);
console.log(grupo3);
console.log(grupo4);
console.log(grupo5);