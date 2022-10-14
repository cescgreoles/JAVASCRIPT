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

let phtml$$ = document.createElement('p'); 
phtml$$.textContent = ('Soy dinámico!')
document.body.appendChild(phtml$$)
// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let h2$$ = document.querySelector(".fn-insert-here");
h2$$.textContent = 'Wubba Lubba dub dub'; 

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let ul$$ = document.createElement("ul"); 


for (const app of apps) {
    let li$$ = document.createElement("li"); 
    li$$.textContent = app; 
    ul$$.appendChild(li$$)
}

document.body.appendChild(ul$$); 


// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let nodos$$ = document.querySelectorAll(".fn-remove-me"); 
for (const nodo of nodos$$) {
   nodo.remove()
}


// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

let insertp$$ = document.createElement("p"); 
document.querySelectorAll("div"); 


// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here