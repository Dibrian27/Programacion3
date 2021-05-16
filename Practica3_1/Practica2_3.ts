//3. Crear una clase Cuenta Bancaria a la cual le podemos asignar fondos y sacar fondos

class CuentaBancaria 
{
    fondos:number;
    
  constructor (fondos)
  {
    this.fondos = fondos;
  }
  depositar(monto)
  {   
      if (monto > 500000) // depositar mas de 500000 mil se dispara alarma
      {
        console.info("1) Depositamos: "+ monto + "\n" + "   No puede depositar mas de 500000"+"\n")
      }
      else{
        console.info("1) Depostito satisfactorio "+ monto + "\n")
        return this.fondos += monto
      }
  }
  retirar(monto)
  {   
    if (monto > this.fondos) // retirar mas de su monto se dispara alarma
    {
      console.info("2) Retiramos: "+ monto + "\n" + "   Fondos insuficientes, no puedes retirar " + monto +" tu saldo es de " +this.fondos +"\n")
    }

    if (monto > 100000) // retirar mas de 100000 mil se dispara alarma
    {
      console.info("3) Retiramos: "+ monto + "\n" + "   No puedes retirar mas de 100000 mil "+"\n")
    }

    if(monto < this.fondos || monto < 100000)
    { 
      console.info("2/3) Extracción satisfactoria de "+ monto +"\n")
      return this.fondos -= monto 
    }
  }
}

const cuenta = new CuentaBancaria (0)

console.info("Monto de la cuenta " +cuenta.fondos+ "\n")

//1_Si le asignamos más de 500000 disparamos una alarma
cuenta.depositar(500100)

//3_Si intentamos sacar más de 100000 disparamos otra alarma
cuenta.retirar(150000)


console.info("\n"+"Monto despues de movimientos " +cuenta.fondos)
console.info("\n"+"----------------------------------------------------------"+"\n")

console.info("Monto de la cuenta " +cuenta.fondos+ "\n")

// Prueba sin alarmas
cuenta.depositar(1000)
cuenta.depositar(5000)
cuenta.retirar(4000)
console.info("Monto despues de movimientos " +cuenta.fondos)
