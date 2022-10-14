
const got$$ = document.createElement("div"); 
got$$.className = "general";
document.body.appendChild(got$$); 


function pintar (characters) {
    got$$.innerHTML = ""; 

    for (const character of characters) {
        const carta$$ = document.createElement("div");
        const titulo$$ = document.createElement("h3"); 
        const img$$ = document.createElement("img"); 

        carta$$.className = "cards"
        titulo$$.className = "titulo"
        img$$.className = "img"

        titulo$$.textContent = character.title; 
        img$$.src = character.image;

        carta$$.appendChild(titulo$$);
        carta$$.appendChild(img$$);
        got$$.appendChild(carta$$); 
    }
    

}







fetch("https://thronesapi.com/api/v2/Characters")
  .then((characters) => characters.json())
  .then((characters) => { pintar(characters)});
