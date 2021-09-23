class Jugador{
    vida = 100;
    habilidad = 100;
    poder = ""
    nombre = "";
    constructor(nombre, poder){
        this.nombre = nombre;
        this.poder = poder;
    }

    recuperar(jugadorObjetivo){
        if(this.habilidad<10){
            console.log("estas a punto de morir");
            jugadorObjetivo.habilidad +=100;
        }else{
            console.log("aun pudes vivir");
        }
        this.status(jugadorObjetivo);
    }

    revivir(jugadorObjetivo){
        jugadorObjetivo.habilidad +=100;
        jugadorObjetivo.vida +=100;
        this.status(jugadorObjetivo);
    }
   
    curar(jugadorObjetivo){
        jugadorObjetivo.vida +=20;
        this.habilidad -=40;
        this.status(jugadorObjetivo);
    }

    atacar(jugadorObjetivo){
        jugadorObjetivo.vida -=20;
        this.habilidad -=40;
        this.status(jugadorObjetivo);
    }

    status(jugadorObjetivo){
        console.log(jugadorObjetivo);
        console.log(this);
    }
}

let personaje1 = new Jugador('spider man', 'telaraña');
let personaje2 = new Jugador('Doctor Octopus', 'escalar');

console.log(personaje1);
console.log(personaje2);