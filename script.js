fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
    .then(response => response.json())
    .then(allpokemon => {

        var pokemons = [];

        allpokemon.results.map((val)=>{

            fetch(val.url)
            .then(response => response.json())
            .then(pokemonSingle => {     
                pokemons.push({nome:val.name,imagem:pokemonSingle.sprites.front_default});

                if(pokemons.length == 99){
                    //finalizamos nossas requisições

                    var pokemonBoxes = document.querySelector('.pokemon-boxes');
                    pokemonBoxes.innerHTML = "";

                    //console.log(pokemons);
                    pokemons.map(function(val){
                    pokemonBoxes.innerHTML+=`
                    
                    <div class="pokemon-box">
                        <img src="`+val.imagem+`" />
                        <p>`+val.nome+`</p>
                    </div>

                    `;
                
                        /*

                        */
                    })
                }
            })
        })

        pokemons.map((val)=>{
            console.log(val.nome);
        })

    })