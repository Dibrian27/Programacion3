const mostrarArreglo = (array: string[]): void => {
    for(let v of array) {
        console.info(v);
    }
}

const arr: string[] = ["azul", "verde","rojo"];

console.info("---------Colores del Array----------");
mostrarArreglo(arr);
console.info("----------Agregamos amarillo entre azul y verde---------");
arr.splice(1,0,"amarillo");
mostrarArreglo(arr);
console.info("---------Agregamos naranja entre verde y rojo----------");
arr.splice(3,0,"naranja");
mostrarArreglo(arr);