//2. Crear una clase Escuela (1) que tiene un listado de Cursos (2) al cual se le asignan &Alumnos (2)

//Clase alumno con sus atributos
class Alumno 
{    
    nombre:string;
    edad:number;

  constructor(nombre, edad)
  {
    this.nombre = nombre;
    this.edad = edad;
  }
}
//Clase carrera con sus atributos

class Carrera 
{
    nombre:string;
    alumnos:string[];

    constructor (nombre)
    {
      this.nombre = nombre;
      this.alumnos = [];
    }
    inscribirAlumnos(alumno)
    {  
      return this.alumnos.push(alumno);
    }
    mostrarAlumnos()
    {
      console.info(`Alumnos de la carrera: \n\n${this.nombre}`)
      for( let alumno in this.alumnos)
      {     
        console.info(
        `     Nombre: ${alumno[alumno]} .nombre}\n`)
      }
    }
}
//Clase escuela con sus atributos

class Escuela 
{
    nombre:string;
    direccion:string;
    carreras:string[];

  constructor(nombre, direccion)
  {
    this.nombre = nombre;
    this.direccion = direccion;
    this.carreras = [];   
  }

  anotarCarrera(carrera)
  {
    return this.carreras.push(carrera);
  }
}

const escuelaIES = new Escuela ("IES 9-023",null);

const software = new Carrera (" Desarrollo de Software:");
const mecatronica = new Carrera ("  Mecatronica:");

const marioano = new Alumno ("Marioano", 20);
const vicoria = new Alumno ("Vicoria", 24);
const bruno = new Alumno ("Bruno", 21);
const josefina = new Alumno ("Josefina", 32);


escuelaIES.anotarCarrera(software);
escuelaIES.anotarCarrera(mecatronica);

software.inscribirAlumnos(bruno)
software.inscribirAlumnos(marioano)

mecatronica.inscribirAlumnos(josefina)
mecatronica.inscribirAlumnos(vicoria)

software.mostrarAlumnos();
mecatronica.mostrarAlumnos();