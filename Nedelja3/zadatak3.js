//Написати функцију која исписује све елементе низа који су дељиви са 5

let niz=[1,2,3,4,5,10,15,23,1,5]

function deljivi(niz){
    for(element of niz){
        if(element % 5 ==0){
            console.log(element);
            
        }
    }
}
console.log(deljivi(niz));


//Написати функцију која враћа колико пице вам је довољно за доживотно снабдевање
//Уноси се колико пице поједете на месечном нивоу, и колико година имате (Рачуна се да је довољно достављати до стоте године)

function pizzaForLife(numberOfPizza, years){
    let pizzaForWholeLife = (100 - years) * (numberOfPizza * 12)
    return pizzaForWholeLife;
}
console.log(pizzaForLife(10,26));
