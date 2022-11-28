
let nombreDeUsuario = prompt("ingresar nombre");

if (nombreDeUsuario =="") {
    alert ("el ingreso de nombre esta vacio");
}
else {
    alert ("bienvendo " + nombreDeUsuario);
}

let edadDelUsuario = parseInt(prompt("¿Cuál es tu edad?"));

if(edadDelUsuario >= 18) {
    alert("puedes ingresar, eres mayor de edad");
}
else if (edadDelUsuario <= 18 && edadDelUsuario >0){
    alert ("eres menor de edad, por lo cual, podrias encontrarte limitado al responder algunas preguntas");
}
else {
    alert ("no has ingresado un valor edad");
}

let presupuesto = parseInt(prompt("¿Cuál es tu presupuesto para estas vacaciones?"));

if (presupuesto <200) {
    alert ("según el presupuesto cargado, puedes elegir hoteles de 1 estrella;");
}
else if (presupuesto <500){
    alert ("según el presupuesto cargado, puedes elegir hoteles de 2 estrella;");
}else if (presupuesto <700){
    alert ("según el presupuesto cargado, puedes elegir hoteles de 3 estrella;");
}
else if (presupuesto <800){
    alert ("según el presupuesto cargado, puedes elegir hoteles de 4 estrella;");
}
else if (presupuesto >=1000){
    alert ("según el presupuesto cargado, puedes elegir hoteles de 5 estrella;");
}
else {
    alert ("no has ingresado tu presupuesto;");
}

let ciudad = prompt(`Elija un mes del año para conocer el mejor destino:
1: enero
2: febrero
3: marzo
`);

switch (ciudad) {
  case "1":
    alert("Brasil, temperaturas por encima de los 30°");
    break;
  case "2":
    alert("Cancun, temperaturas por encima de los 30°");
    break;
  case "3":
    alert("Edimburgo, temperaturas por encima de los 30°");
    break;
  default:
    alert("no has ingresado un destino valido");
    break;
}

alert ( "gracias por su visita, continuaremos gestionando JS")



