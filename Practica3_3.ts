const mostrarArreglo2 = (array: string[]): void => {
    for(let v of array) {
        console.info(v);
    }
}

const arr1: string[] = ["azul", "verde","rojo"];

console.info("---------Colores del Array----------");
mostrarArreglo2(arr1);

console.info("---------Quitamos verde----------");
arr1.splice(1,1,"");
mostrarArreglo2(arr1);