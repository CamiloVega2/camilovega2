class Persona {
    nombre;
    peso;
    altura;
    edad;
    cedula;
    fechadenacimiento

    constructor(fechadenacimiento,nombre,peso,altura,edad,cedula){
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
        this.edad = edad;
        this.cedula = cedula;
        this.fechadenacimiento = fechadenacimiento
    }
    calcularIMC(){
        const IMC = this.peso / (this.altura * this.altura)
    return ` EL IMC es ${IMC}`  }

    info(){
        return `Nombre ${this.nombre} cedula ${this.cedula}`
    }
    
}
const jorge = new Persona('Jorge',80,1.70,41,10054324567)
const yeffer = new Persona('Yeffer',60,1.68,19,1005623212)
const camilo = new Persona('Camilo',54,1.68,22,1239543443)

console.log(jorge.info(),jorge.calcularIMC());
