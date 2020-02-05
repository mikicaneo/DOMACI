var cena = 100;
var novac = 70;

if (novac < cena) {
    console.log('Nemate dovoljno novca');
    console.log('Trenutno stanje ' + novac);
}else {
    console.log('Uspesno ste kupili proizvod');
    console.log('Trenutno stanje je promenjeno ' + (novac - cena));
}