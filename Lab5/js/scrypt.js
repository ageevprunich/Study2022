
let par;
let fruitImg;
const out = document.getElementById("output");
window.onscroll = () => {
    navbar.classList.remove('active');
}
let header = document.querySelector('header');
window.addEventListener('scroll', ()  => {
    header.classList.toggle('shadow',window.scrollY > 0);
});


function buttonClick(){
    fetch('http://localhost:3000/fruits').then(
        (response)=>{
            return response.text();
        }
    ).then((text)=>{
        let fruitsArray = JSON.parse(text);
        fruitsArray.forEach(element => {
            par = document.createElement('p');
            par.innerText=`id of fruit: ${element.id}. ${element.fruit} has shape of ${element.shape}`;
            fruitImg = document.createElement('img');
            fruitImg.src = `${element.image}`;
            out.appendChild(par);
            out.appendChild(fruitImg);
            console.log(par);
        });
    })
}


