//Сачувати у променљиве цену и пречник пице
//Израчунати која је цена пице по цм² (пазити на то да се површина рачуна са полупречником)
//Исписати тај резултат у конзолу

let price = 620;
let R = 42;
let p = (R / 2) * (R / 2) * Math.PI; // Math.pow((R/2),2)


let pizzapricecm2 = price/p;

console.log(`Cena pice po cm2 je ${pizzapricecm2}`)