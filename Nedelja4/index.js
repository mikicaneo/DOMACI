
let pokemon1 = {
    ime: 'Golbat',
    vrsta: 'otrovni',
    img: 'golbat.jpg',
    sposobnosti: ['Overgrow', 'Chlorophyll'],
    karakteristike: {
        napad: 80,
        odbrana: 70,
        brzina: 90
    }
    
}

let pokemon2 = {
    ime: 'Dugtrio',
    vrsta: 'zemljani',
    img: 'dugtrio.jpg',
    sposobnosti: ['Sand Veil', 'Arena Trap'],
    karakteristike: {
        napad: 100,
        odbrana: 50,
        brzina: 120
    }
}

let pokemon3 = {
    ime: 'Persian',
    vrsta: 'Classy Cat Pokémon',
    img: 'persian.jpg',
    sposobnosti: ['Limber', 'Technician'],
    karakteristike:{
        napad: 70,
        odbrana: 60,
        brzina: 115,
    }
}

let pokemon4 = {
    ime: 'Machamp',
    vrsta: 'Superpower Pokémon',
    img: 'machamp.jpg',
    sposobnosti: ['Guts', 'No Guard'],
    karakteristike: {
        napad: 130,
        odbrana: 80,
        brzina: 55
    }
}



let prikaziSvePokemone = document.querySelector('#prikaz');
let prikaziNajjaceg = document.querySelector('#pobednik');
let app = document.querySelector('#app');
let wrap = document.querySelector('.wrapper');


prikaziSvePokemone.addEventListener('click', pokemon)
prikaziNajjaceg.addEventListener('click', najjaci)

function pokemon(){
    let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4];
    for(el of pokemoni){
        let pokemon = document.createElement('div')
        let img = document.createElement('img')
        img.src = el.img
        app.appendChild(pokemon)
        pokemon.appendChild(img)
        pokemon.innerHTML += ` ime: ${el.ime} <br>vrsta: ${el.vrsta} <br>sposobnosti:<br> ${el.sposobnosti} <br>karakteristike: ${el.karakteristike.napad}, ${el.karakteristike.odbrana}, ${el.karakteristike.brzina}  `
        
    }
   
}


let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4];

function najjaci(){
    let najjaci = pokemoni[0];

    pokemoni.forEach(el => {
        if(el.karakteristike.napad > najjaci.karakteristike.napad){
            najjaci = el;
            return najjaci
        }
    })

    let POKEMON = document.createElement('div')
    let IMG = document.createElement('img')
    IMG.src = najjaci.img
        app.appendChild(POKEMON)
        POKEMON.appendChild(IMG)

        POKEMON.innerHTML += `ime: ${najjaci.ime} <br>vrsta: ${najjaci.vrsta} <br>sposobnosti:<br> ${najjaci.sposobnosti} <br>karakteristike: ${najjaci.karakteristike.napad}, ${najjaci.karakteristike.odbrana}, ${najjaci.karakteristike.brzina}`
}