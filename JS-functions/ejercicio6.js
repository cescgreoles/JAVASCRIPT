// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
// en caso que existan los elimina para retornar un array sin los elementos duplicados. 
// Puedes usar este array para probar tu función:




const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];


  function removeDuplicates(array) {

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        for (let x = i + 1; x < array.length; x++) {
            if (array[i] === array[x]) {
                array.splice(x, 1); 
                x--;
            }     
        }
        
    }

    return array

  }

  console.log(removeDuplicates(duplicates));