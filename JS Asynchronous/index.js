// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.

// fetch("https://api.agify.io?name=michael").then(function(resultadoDelFetch) {

//     return resultadoDelFetch.json(); 

// }).then(function (datosFinales) {
//     console.log(datosFinales);
// });


// 1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.

// const baseUrl = 'https://api.nationalize.io/?name=';

// const button$$ = document.querySelector("button"); 
// const input$$ = document.querySelector("input"); 

// const realizarPeticion = () == {

//     const nombre = input$$.value; 

//     fetch("https://api.nationalize.io/?name=" + nombre){
//     .then((response) => response.json())
//     .then((response) => console.log(response));


// }

// button$$.addEventListener("click" , realizarPeticion); 


// 1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
// de MZ.

