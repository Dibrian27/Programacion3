/*
1. Crear una clase de Auto con los atributos (marca, modelo, potencia, max. velocidad)
_Crear 5 autos en un array
_Iterar el array y mostrar los autos por pantalla
_Iteramos los autos y calculamos con un método (calcular tiempo) cuanto tarda en forma óptima en recorrer x kms
_Hacer casos de prueba*/
class Auto 
{
    marca:string;
    modelo:string;
    potencia:number;
    maxVelocidad:number;

    constructor (marca, modelo, potencia, maxVelocidad) 
    {
      this.marca = marca;
      this.modelo = modelo;
      this.potencia = potencia;
      this.maxVelocidad = maxVelocidad;
    }
  
    calcularTiempo(kilometros){
      return kilometros/this.maxVelocidad;
    }   
}

const a1 = new Auto ("Peugeot", "308", 50, 150);
const a2 = new Auto ("Fiat", "Cronos", 80, 170);
const a3 = new Auto ("Renault", "Clio", 40, 130);
const a4 = new Auto ("BMW", "Z4", 95, 230);
const a5 = new Auto ("Ford", "Figo", 70, 210);

let arrayAutos = [];
arrayAutos.push(a1,a2,a3,a4,a5);


function TiempoDeCadaAuto(array, kilometros)
{
  let calculoTiempo = 0
  for (let i in array)
  {
    calculoTiempo = array[i].calcularTiempo(kilometros);
    console.info ("\n"+`Auto ${array[i].marca} ${array[i].modelo} demora ${calculoTiempo} seg`);
  }
}

function MostrarAutos(array)
{
    for (let i in array)
    {
      console.info( JSON.stringify (array[i]));
    }     
}
MostrarAutos(arrayAutos)
TiempoDeCadaAuto(arrayAutos, 1000)