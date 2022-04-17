class Ninja {
    constructor(nombre, salud){
        this.nombre=nombre;
        this.salud=salud;
        this.velocidad=3;
        this.fuerza=3;
    }
    sayName(){
        console.log(this.nombre);
    }
    showStats(){
        console.log(`El nombre del ninja es  ${this.nombre} su fuerza es ${this.fuerza} su velocidad es ${this.velocidad} y su salud es ${this.salud}`);
    }
    drinkSake(){
        this.salud+=10
    }
}
const ninja1 = new Ninja("Hyabusa",100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();