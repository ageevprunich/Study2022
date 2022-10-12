let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');

}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}
let header = document.querySelector('header');
window.addEventListener('scroll', ()  => {
    header.classList.toggle('shadow',window.scrollY > 0);
});


var plusBtn = document.getElementsByClassName('cart_qty_plus');
for(i=0; i<plusBtn.length; i++) {
    var button = plusBtn[i];
    button.addEventListener('click',function(event){
        var buttonClicked = event.target;
        var boxContent = buttonClicked.closest('.content');
        var count = boxContent.querySelector('.amount');
        count.innerText = ++count.innerText;
    })
}
var minusBtn = document.getElementsByClassName('cart_qty_minus');
for(i=0; i<minusBtn.length; i++) {
    var button = minusBtn[i];
    button.addEventListener('click',function(event){
        var buttonClicked = event.target;
        var boxContent = buttonClicked.closest('.content');
        var count = boxContent.querySelector('.amount');
        if(parseInt(count.innerText) >= 1){
            count.innerText = --count.innerText;
        }
        
    })
}

var addCartBtn = document.getElementsByClassName('add-to-cart');
for(i=0; i<addCartBtn.length; i++) {
    var button = addCartBtn[i];
    button.addEventListener('click',addToCart)
}

 function addToCart(event){
    var button = event.target;
    var box = button.closest('.box');
    var title = box.getElementsByClassName('title')[0].innerText;
    var time = box.getElementsByClassName('time')[0].innerText;
    var imgSrc = box.getElementsByClassName('image')[0].src;
    var amount = box.getElementsByClassName('amount')[0].innerText;
    addItemToCart(title,time,imgSrc,amount);
 }

 function addItemToCart(title,time,imgSrc,amount){
    var cartRow = document.createElement('div.box');
    cartRow.classList.add('cart-row');
    var servicesContainer = document.getElementsByClassName('cart')[0];
    servicesContainer.append(cartRow);
    var cartRowContent = `
    <img class="image" src="${imgSrc}" alt="">
        <h3 class="title">${title}</h3>  
        <div class="content">
            <span class="time">${time}</span>
            <button class="cart_qty_plus" id="id_cart_btnplus" type="button" ><i
                class="fa-solid fa-plus"></i></button>
            <p class="amount" id="amount">${amount}</p>
            <button class="cart_qty_minus" id="id_cart_btnmin" type="button"><i
                class="fa-solid fa-minus"></i></button>
        </div>`
    cartRow.innerHTML = cartRowContent;
 }
