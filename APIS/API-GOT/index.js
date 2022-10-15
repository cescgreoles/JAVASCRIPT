fetch("https://thronesapi.com/api/v2/Characters")
    .then((characters) => characters.json())
    .then((characters) => {
        pintar(characters);
    });

const divStart = document.createElement("div");
const divSearch = document.createElement("div");
const got$$ = document.createElement("div");

divStart.className = "first-container";
divSearch.className = "search";
got$$.className = "got";

document.body.appendChild(divStart);
document.body.appendChild(divSearch);
document.body.appendChild(got$$);

function onSearch(event, characters) {
    event.preventDefault();
    const value = document.getElementById("searchTerm").value;
    console.log(value);
    for (const character of characters) {
        if (
            character.fullName.toLowerCase().includes(value.toLowerCase()) ||
            character.title.toLowerCase().includes(value.toLowerCase())
        ) {
            document.getElementById(character.id).classList.remove("hidden");
            console.log(character.fullName, character.title);
        } else {
            document.getElementById(character.id).classList.add("hidden");
        }
    }
}

function pintar(characters) {
    got$$.innerHTML = "";

    const img1$ = document.createElement("img");
    img1$.src =
        "https://1000logos.net/wp-content/uploads/2020/09/Game-of-Thrones-logo.png";

    const form$$ = document.createElement("form");
    form$$.className = "myform";
    const input$$ = document.createElement("input");
    const button$$ = document.createElement("button");
    button$$.textContent = "SEARCH YOUR CHARACTER";
    input$$.id = "searchTerm";

    form$$.onsubmit = (event) => onSearch(event, characters);

    img1$.appendChild(divStart);
    form$$.appendChild(input$$);
    form$$.appendChild(button$$);
    divSearch.appendChild(form$$);

    for (const character of characters) {
        const carta$$ = document.createElement("div");
        const titulo$$ = document.createElement("h3");
        const img$$ = document.createElement("img");
        const p$$ = document.createElement("p");

        carta$$.id = character.id;

        carta$$.className = "cards";
        titulo$$.className = "titulo";
        img$$.className = "img";
        p$$.className = "full-name";

        titulo$$.textContent = character.title;
        img$$.src = character.imageUrl;
        p$$.textContent = character.fullName;

        carta$$.appendChild(img$$);
        carta$$.appendChild(titulo$$);
        carta$$.appendChild(p$$);
        got$$.appendChild(carta$$);
    }
}
