let price = 640;
let r = 32;
function pricePizza(price, r){
    let povrsina = 2*r*Math.PI;
    return price/povrsina;
}
console.log(pricePizza(640, 32));
