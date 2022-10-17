fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
    .then((poke) => poke.json())
    .then((poke) => {
        paint(poke);
    });

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

function paint(poke) {
    divPokemons.innerHTML = "";

    const input$$ = document.createElement("input");
    document.body.appendChild(input$$);
    divSearch.appendChild(input$$);

    const button$$ = document.createElement("button");
    const imgButton = document.createElement("img");

    imgButton.src =
        "https://i.pinimg.com/originals/f7/b4/1b/f7b41b0b170d8765d7f6684497c7763a.png";
    imgButton.className = "button-icon";

    document.body.appendChild(button$$);
    document.body.appendChild(imgButton);

    divSearch.appendChild(button$$);
    button$$.appendChild(imgButton);

    for (const pokemon of poke.results) {
        fetch(pokemon.url)
            .then((respons) => respons.json())
            .then((respons) => {
                pokemonInfo(respons);
            });
    }

    function pokemonInfo(infoPokemon) {
        const divCard = document.createElement("div");
        divCard.className = "card";
        document.body.appendChild(divCard);

        const imgPoke = document.createElement("img");
        imgPoke.className = "card-image";
        imgPoke.src = infoPokemon.sprites.front_default;
        document.body.appendChild(imgPoke);

        const h1Poke = document.createElement("h1");
        h1Poke.className = "card-title";
        h1Poke.textContent = infoPokemon.name;
        document.body.appendChild(h1Poke);

        const idNumber = document.createElement("id");
        idNumber.className = "id";
        idNumber.textContent = infoPokemon.id;
        document.body.appendChild(idNumber);

        /*infoPokemon.map(function(abilities){
        const spanAbility = document.createElement("span");
        spanAbility.className = "span";
        spanAbility.textContent = abilities.name;

       
        document.body.appendChild(spanAbility); })*/

        divPokemons.appendChild(divCard);
        divCard.appendChild(h1Poke);
        divCard.appendChild(imgPoke);
        divCard.appendChild(idNumber);
        divCard.appendChild(spanAbility);

        console.log(infoPokemon);
    }
}

// const pokedex$$ = document.querySelector("#pokedex");
// const ALL_POKEMONS_INFO = []; // Cuando una variable se declara en scope global para ser usada por otros, se hace en mayúsculas.

// function getAllPokemons() {
//     return fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
//         .then((response) => response.json())
//         .then((response) => {
//             return response.results;
//         })
//         .catch((error) =>
//             console.log("Error obteniendo todos los pokemons", error)
//         );
// }

// function getOnePokemon(url) {
//     return fetch(url)
//         .then((response) => response.json())
//         .then((response) => {
//             return response;
//         })
//         .catch((error) =>
//             console.log("Error obteniendo pokemon individual", error)
//         );
// }
// /**
//  * <li class="card">
//           <img class="card-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="">
//           <p class="card-title">Bulbasur</p>
//           <div class="card-subtitle">Tipo Fuego</div>
//         </li>} pokemons
//  */
// function renderPokemons(pokemons) {
//     pokemons.forEach(function (poke) {
//         const li$$ = document.createElement("li");
//         li$$.classList.add("card");

//         const img$$ = document.createElement("img");
//         img$$.src = poke.sprites.front_default;
//         img$$.alt = poke.name;

//         const p$$ = document.createElement("p");
//         p$$.classList.add("card-title");
//         p$$.textContent = poke.name;

//         const div$$ = document.createElement("div");
//         div$$.classList.add("card-subtitle");
//         div$$.textContent = poke.types[0].type.name;

//         li$$.appendChild(img$$);
//         li$$.appendChild(p$$);
//         li$$.appendChild(div$$);

//         pokedex$$.appendChild(li$$);
//     });
// }

// // Director de orquesta: irá llamando a otras funciones.
// async function arrancar() {
//     console.log("Ejecuntando peticiones pokedex...");

//     const allPokemons = await getAllPokemons(); // array de objetos con name y url por cada pokemon
//     // console.log('allPokemons:', allPokemons)

//     // Itero por el array de pokemons, llamo a getOnePokemon una vez
//     // por cada pokemon, pasándole la url de cada pokemon.
//     for (const pokemon of allPokemons) {
//         // Pido a la api la información de cada pokemon individual y la guardo en una variable
//         const pokemonIndividualInfo = await getOnePokemon(pokemon.url);
//         ALL_POKEMONS_INFO.push(pokemonIndividualInfo);
//     }

//     console.log("ALL_POKEMONS_INFO", ALL_POKEMONS_INFO);
//     renderPokemons(ALL_POKEMONS_INFO);
// }

// window.onload = arrancar;
