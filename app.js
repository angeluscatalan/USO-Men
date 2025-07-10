let openShopping = document.querySelector('.cart');
let closeShopping = document.querySelector('.closeCart');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.totalvalue');
let quantity = document.querySelector('.quantity');
let header = document.querySelector('.header');
let navbar = document.querySelector('.wholenavbar');
let transition = document.querySelector('.transition');
let footer = document.querySelector('.footer');
let cartcontainer = document.querySelector('.cart-container');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
    cartcontainer.style.filter = (body.style.filter === 'opacity(0)') ? 'none' : 'opacity(0)';
    header.style.filter = (body.style.filter === 'blur(3px)') ? 'none' : 'blur(3px)';
    navbar.style.filter = (body.style.filter === 'blur(3px)') ? 'none' : 'blur(3px)';
    transition.style.filter = (body.style.filter === 'blur(3px)') ? 'none' : 'blur(3px)';
    footer.style.filter = (body.style.filter === 'blur(3px)') ? 'none' : 'blur(3px)';
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
    cartcontainer.style.filter = (body.style.filter === 'opacity(0.9)') ? 'none' : 'opacity(0.9)';
    header.style.filter = (body.style.filter === 'blur(0px)') ? 'none' : 'blur(0px)';
    navbar.style.filter = (body.style.filter === 'blur(0px)') ? 'none' : 'blur(0px)';
    transition.style.filter = (body.style.filter === 'blur(0px)') ? 'none' : 'blur(0px)';
    footer.style.filter = (body.style.filter === 'blur(0px)') ? 'none' : 'blur(0px)';
})


function toggleBlur() {
    var body = document.body;
    var content = document.querySelector('.body');

    // Toggle blur effect on the entire page
    body.style.filter = (body.style.filter === 'blur(5px)') ? 'none' : 'blur(5px)';
}
