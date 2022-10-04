// 1.1 Consigue el valor "HULK" del array de cars y muestralo por consola.
// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
// 1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers[0]);

avengers[0] = "IRON MAN";
console.log(avengers);

console.log(avengers.length);


// 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
// Muestra en consola el último personaje del array


// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push('Summer', 'Morty'); 
console.log(rickAndMortyCharacters);

rickAndMortyCharacters.pop()
rickAndMortyCharacters.splice(1,1)

console.log(rickAndMortyCharacters);






