const coex = {
    "empleados": [
      {
        "nombre": "Juanjose",
        "edad": 23,
        "direccion": {
          "calle": 16,
          "carrera": 66,
          "orientacion": "w"
        },
        "telefonos": [
          "1234567",
          "7654321"
        ],
        "hobbies": [
          "videojuegos",
          "peliculas"
        ]
      },
      {
        "nombre": "Pedro",
        "edad": 25,
        "direccion": {
          "calle": 56,
          "carrera": 42
        },
        "telefonos": [
          "65465458",
          "132138"
        ],
        "hobbies": [
          "futbol",
          "peliculas"
        ]
      },
      {
        "nombre": "Maria",
        "edad": 27,
        "direccion": {
          "calle": 6,
          "carrera": 12
        },
        "telefonos": [
          "1234567",
          "7654321"
        ],
        "hobbies": [
          "trotar"
        ]
      },
      {
        "nombre": "Luis",
        "edad": 29,
        "direccion": {
          "calle": 66,
          "carrera": 2,
          "orientacion": "w"
        },
        "telefonos": [
          "1234567",
          "7654321"
        ],
        "hobbies": [
          "futbol"
        ]
      },
      {
        "nombre": "Luisa",
        "edad": 31,
        "direccion": "conjunto el dorado apto 123",
        "hobbies": [
          "cocinar",
          "programar"
        ]
      }
    ]
  }
  console.log(coex);
  const {empleados} = coex
  const {direccion} = empleados
  empleados.forEach(el => {
    console.log(el.nombre)
  });
  empleados.forEach(el => {
    if(el.direccion === String || el.direccion.calle === undefined || el.direccion.carrera === undefined){
    console.log(el.direccion)}
    else if(el.direccion.orientacion === undefined){
        console.log(`la calle es ${el.direccion.calle} y la carrera es ${el.direccion.carrera}`);
    }else{console.log(`la calle es ${el.direccion.calle} y la carrera es ${el.direccion.carrera} y la orientacion es ${el.direccion.orientacion}`);}
  });