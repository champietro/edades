/*EJERCICIOS REPASO

1)  El DT de los infantiles del equipo de fútbol desea saber el 
promedio de la edad de los chicos
La edad de los chicos va de 3 a 7 años. Las edades son cargadas 
al azar (use la función aleatorio(menorValor, mayorValor), 
es decir aleatorio(3,7))
Muestre todas las edades y el promedio de las mismas.
*/

let menorValor: number = 3;
let mayorValor: number = 7;

let aleatorio = function (menorValor, mayorValor: number) {
  let edades: number[] = new Array(5);
  for (let i = 0; i < 6; i++){
    edades[i] = Math.floor(Math.random() * (mayorValor - menorValor + 1) ) + menorValor;

  }

  let promedio: number = 0;

  for (let i = 0; i < 5; i++) {
    promedio = edades[i] + promedio;
  }
  promedio = promedio / 5;
  console.log("Promedio: " + promedio);

  for (let i = 0; i < 5; i++) {
    console.log("Edades:" + edades[i]);
  }
};

aleatorio(menorValor, mayorValor);
