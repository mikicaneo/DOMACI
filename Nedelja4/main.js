//zadatak1

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

var pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4];


//zadatak2

let nizSposobnosti = [];
    
function sveSposobnosti(spos){
    spos.forEach(e => {
        nizSposobnosti.push(...e.sposobnosti);
        return nizSposobnosti;
    });
    console.log(nizSposobnosti);
}

sveSposobnosti(pokemoni);


//zadatak3

pokemoni.sort((a,b) => {
    return a.karakteristike.brzina - b.karakteristike.brzina;
})

console.log(pokemoni);


//zadatak4


function najjaci(pokemoni){
    let najjaci = pokemoni[0];

    pokemoni.forEach(el => {
        if(el.karakteristike.napad > najjaci.karakteristike.napad){
            najjaci = el;
        }
    });
    return najjaci;
}

console.log(najjaci(pokemoni));


