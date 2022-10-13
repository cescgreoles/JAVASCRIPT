// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const div$$ = document.createElement('div')
document.body.appendChild(div$$);



// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const div1$$ = document.createElement('div'); 
const p$$ = document.createElement('p'); 
div1$$.appendChild(p$$)

document.body.appendChild(p$$);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const divenp$$ = document.createElement('div'); 
document.body.appendChild(divenp$$)

for (let i = 0; i < 6; i++) {
   
    const p$$ = document.createElement('p'); 
    divenp$$.appendChild(p$$); 
    
}

// 2.4 Inserta dinamicamesnte con javascript en un html una p con el texto 'Soy dinámico!'.

const phtml$$ = document.createElement('p'); 
phtml$$ = document.createTextNode('Soy dinámico!')

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

// const inserth2$$  

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here