
let selektElement = document.querySelector('#selekt');
let opisElement = document.querySelector('#opis');
let cenaElement = document.querySelector('#cena');
let dugme = document.querySelector('#btn');

let prihodi = 0;
let rashodi = 0;
let budzet = 0;
let procenat = 0;
let sveProcenat = 0;


dugme.addEventListener('click', (e) => {
    e.preventDefault();
    if(opisElement.value.trim() == ''){
        alert('Morate uneti opis');
        opisElement.value ='';
        return
    }
    if(cenaElement.value.trim() == '' || cenaElement.value <= 0){
        alert('Morate uneti pozitivan unos');
        cenaElement.value = '';
        return
    }
    
    

    let selekt = selektElement.value;
    let  opis = opisElement.value
    let cena = parseInt(cenaElement.value);
    
    if(selekt == 'prihod'){
        dodajPrihod(opis, cena);
    }
    else {
        dodajRashod(opis, cena, budzet);
    }

    opisElement.value = '';
    cenaElement.value = '';

})


let prikaz = document.querySelector('#omot');
let rezultatPrihoda = document.querySelector('#rezultati-prihoda');

const dodajPrihod = (OPIS, CENA) => {
    prihodi += CENA;
    budzet += CENA;
    sveProcenat = rashodi / budzet * 100;
    let listItem = document.createElement('div');
    listItem.id = "listItem";
    poslednjaSansa(listItem);
    listItem.innerHTML = `<p>${OPIS}</p><p></p><p>+${Math.floor(CENA)}</p>`;
    rezultatPrihoda.appendChild(listItem);
    prikaz.innerHTML = rhtml(budzet, prihodi, rashodi, Math.floor(sveProcenat));
    let deleteBtn = document.createElement('p');
    deleteBtn.innerHTML = `X`
    deleteBtn.addEventListener('click',()=> {
        budzet -=CENA;
        prihodi -= CENA;
        sveProcenat = rashodi / budzet * 100;
        prikaz.innerHTML = rhtml(budzet, prihodi, rashodi, Math.floor(sveProcenat));
        
        listItem.remove();
    })
    listItem.appendChild(deleteBtn);
    procenat = 0;
    sveProcenat = 0;
}


let rezultatRashoda = document.querySelector('#rezultati-rashoda');

const dodajRashod = (OPIS, CENA, BUDZET) => {
    rashodi += CENA;
    procenat = CENA / BUDZET * 100;
    BUDZET -= CENA;
    sveProcenat = rashodi / BUDZET * 100;

    let listItem = document.createElement('div');
    listItem.id = "listItem";
    poslednjaSansa(listItem)
    listItem.innerHTML = `<p>${OPIS}</p><p> - ${CENA}</p> <span> ${Math.floor(procenat)}%</span>`;
    rezultatRashoda.appendChild(listItem);
    prikaz.innerHTML = rhtml(BUDZET, prihodi, rashodi, Math.floor(sveProcenat));
    let deleteBtn = document.createElement('p');
    deleteBtn.innerHTML = `X`
    deleteBtn.addEventListener('click', () =>{
        BUDZET += CENA;
        rashodi -= CENA;
        procenat = CENA / BUDZET * 100;
        sveProcenat = rashodi / BUDZET * 100;

        prikaz.innerHTML = rhtml(BUDZET, prihodi, rashodi, Math.floor(sveProcenat));
        listItem.remove();
    });
    listItem.appendChild(deleteBtn);
    procenat = 0;
    sveProcenat = 0;
}

const rhtml = (budz, prihod, rashod, procenat) => {
    return `<h1>Dostupan Budzet u Februaru 2020:</h1>
    <div id="stanje">${budz}</div>
    <div id="stanje-prikaz">
    <div id="prikaz-prihoda">
        <p>Prihodi</p>
        <p id="prihodi">${prihod}</p>
    </div>
    </div> 
    <div id="prikaz-rashoda">
        <p>Rashodi</p>
        <p id="rashodi">-${rashod} <span>${procenat}%</span></p>
    </div>`
}


function poslednjaSansa(){
    
}