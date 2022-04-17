class Ninja {
    constructor(nombre, salud, velocidad, fuerza){
        this.nombre=nombre;
        this.salud=salud;
        this.velocidad=velocidad;
        this.fuerza=fuerza;
    }
    sayName(){
        console.log(this.nombre);
    }
    showStats(){
        console.log(`Nombre: ${this.nombre}, Fuerza ${this.fuerza}, Velocidad ${this.velocidad}, Salud ${this.salud}`);
    }
    drinkSake(){
        this.salud+=10;
    }
}
/*Extiende la clase Ninja y crea la clase Sensei. Un Sensei debe tener 200 de salud, 10 de velocidad y 10 de fuerza por defecto. 
Además, un Sensei debe tener un nuevo atributo llamado sabiduría , 
y el valor predeterminado debe ser 10. Finalmente, agrega el método speakWisdom(). 
speakWisdom()debe llamar al métododrinkSake() desde la clase Ninja, antes de hacer console.logging un mensaje de sabiduría. */

class Sensei extends Ninja {
    constructor(nombre){
        super(nombre,200,10,10);
        this.wisdom=10;

    }
    speakWisdom(){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses");
    }

}
// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"