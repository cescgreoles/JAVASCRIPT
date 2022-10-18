const divHeader = document.createElement("div");
const divBienvenido = document.createElement("div");
const divSearch = document.createElement("div");
const divPokemons = document.createElement("div");

const imgHeader = document.createElement("img");
const h1Bienvenido = document.createElement("h1");
const h3Search = document.createElement("h3");

h1Bienvenido.textContent = "¡HOLA, BIENVENIDOS A NUESTRA POKEDEX!";
h3Search.textContent = "BUSCA AQUÍ TUS POKEMONS FAVORITOS";

divHeader.className = "title-container";
divBienvenido.className = "bienvenido-menu-container";
divSearch.className = "search-container";
divPokemons.className = "pokemons-container";
imgHeader.className = "title-image";

imgHeader.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png";

document.body.appendChild(divHeader);
divHeader.appendChild(imgHeader);
document.body.appendChild(divBienvenido);
divBienvenido.appendChild(h1Bienvenido);
document.body.appendChild(divSearch);
divSearch.appendChild(h3Search);
document.body.appendChild(divPokemons);

fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30")
    .then((poke) => poke.json())
    .then((poke) => {
        paint(poke);
    });

function paint(poke) {
    divPokemons.innerHTML = "";

    const input$$ = document.createElement("input");
    document.body.appendChild(input$$);
    divSearch.appendChild(input$$);

    const form$$ = document.createElement("form");
    const button$$ = document.createElement("button");
    const imgButton = document.createElement("img");

    input$$.id = "searchTerm";

    form$$.onsubmit = (event) => onSearch(event, poke);

    imgButton.src =
        "https://i.pinimg.com/originals/f7/b4/1b/f7b41b0b170d8765d7f6684497c7763a.png";
    imgButton.className = "button-icon";

    document.body.appendChild(form$$);
    document.body.appendChild(button$$);
    document.body.appendChild(imgButton);

    divSearch.appendChild(button$$);
    button$$.appendChild(imgButton);
    divSearch.appendChild(form$$);
    form$$.appendChild(input$$);
    form$$.appendChild(button$$);

    for (const pokemon of poke.results) {
        fetch(pokemon.url)
            .then((respons) => respons.json())
            .then((respons) => {
                pokemonInfo(respons);
            });

        console.log(pokemon);

        function pokemonInfo(infoPokemon) {
            const divCard = document.createElement("div");
            divCard.className = "card";

            const divTitleId = document.createElement("div");
            divTitleId.className = "title-id";

            const h1Poke = document.createElement("h1");
            h1Poke.className = "card-title";
            h1Poke.textContent = infoPokemon.name;

            const idNumber = document.createElement("id");
            idNumber.className = "id";
            idNumber.textContent = infoPokemon.id;

            const imgPoke = document.createElement("img");
            imgPoke.className = "card-image";
            imgPoke.src = infoPokemon.sprites.front_shiny;

            const divImageSpan = document.createElement("div");
            divImageSpan.className = "div-image-span";

            const divSpans$$ = document.createElement("div");
            divSpans$$.className = "div-spans";

            const spanTypes = document.createElement("span");
            spanTypes.textContent = "TYPES";
            spanTypes.className = "span-types";

            const spanAbilities = document.createElement("span");
            spanAbilities.textContent = "ABILITIES";
            spanAbilities.className = "span-abilities";

            const span$$ = document.createElement("span");

            for (const type of infoPokemon.types) {
                span$$.textContent += type.type.name + " ";
                console.log(type);
            }

            const span2$$ = document.createElement("span");

            for (const ability of infoPokemon.abilities) {
                span2$$.textContent += ability.ability.name + " ";
                console.log(ability);
            }

            document.body.appendChild(divTitleId);
            document.body.appendChild(h1Poke);
            document.body.appendChild(idNumber);

            document.body.appendChild(divImageSpan);
            document.body.appendChild(imgPoke);
            document.body.appendChild(divSpans$$);
            document.body.appendChild(spanTypes);
            document.body.appendChild(span$$);
            document.body.appendChild(spanAbilities);
            document.body.appendChild(span2$$);

            divPokemons.appendChild(divCard);

            divCard.appendChild(divTitleId);
            divTitleId.appendChild(idNumber);
            divTitleId.appendChild(h1Poke);
            divCard.appendChild(divImageSpan);
            divImageSpan.appendChild(imgPoke);
            divImageSpan.appendChild(divSpans$$);

            divSpans$$.appendChild(span$$);
            divSpans$$.appendChild(spanAbilities);
            divSpans$$.appendChild(span2$$);
            divSpans$$.appendChild(spanTypes);
            divSpans$$.appendChild(span$$);

            console.log(infoPokemon);
        }
    }
}

function onSearch(event, poke) {
    event.preventDefault();
    const value = document.getElementById("searchTerm").value;
    console.log(value);
    for (const pokemon of poke.results) {
        if (
            pokemon.name.toLowerCase().includes(value.toLowerCase()) ||
            pokemon.id.toLowerCase().includes(value.toLowerCase())
        ) {
            document.getElementById(pokemon.id).classList.remove("hidden");
            console.log(pokemon.name, pokemon.id);
        } else {
            document.getElementById(pokemon.id).classList.add("hidden");
        }
    }
}
