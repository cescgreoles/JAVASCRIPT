// Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".
//  Usa la función .includes de javascript.


const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta barça', 'Camiseta lacoste']

let camisetas = []; 


for (let x = 0; x < products.length; x++) {
    if (products[x].includes('Camiseta')) {
        camisetas.push(products[x]);
    }
    
}

console.log(camisetas);
