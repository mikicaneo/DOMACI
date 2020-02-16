let pCount =document.querySelector('.counter');
let brojac = 0;
let btnOrder = document.querySelector('.order')
btnOrder.addEventListener('click', (e) => {
    brojac++
    pCount.innerHTML = brojac
})
let pCount2 = document.querySelector('.counter-2')
let btnOrderNow = document.querySelector('.order-now')
let time = document.querySelector('.time')
let vreme = new Date()
btnOrderNow.addEventListener('click', (g) => {
    if(brojac > 0){
    time.innerHTML = `${vreme.getDate()}. ${vreme.getMonth() +1}. ${vreme.getFullYear()}. \ ${vreme.getHours()}: ${vreme.getMinutes()}`
    pCount2.innerHTML = `Porucili ste ${brojac} pica`
    brojac = 0
    pCount.innerHTML = brojac
    }else{
        pCount2.innerHTML = 'Izaberite kolicinu'
    }
})