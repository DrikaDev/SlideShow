// use strict força o Javascript a usar regras mais restritas pro seu código. 
// Funciona bem se você sabe o que está fazendo. 
// É uma boa prática sempre que você não tem que manter código ruim.
// Basta adicionar 'use strict' no topo do seu código, antes de qualquer outra coisa 
// ou chama-los dentro de funções. 
// Se você inserir dentro no topo do seu código se aplicará para todo seu código.
'use strict';

//variável = array com os objetos
const images = [
    {'id': '1', 
    'url': './img/chrono.jpg'},
    {'id': '2', 
    'url': './img/inuyasha.jpg'},
    {'id': '3', 
    'url': './img/ippo.png'},
    {'id': '4', 
    'url': './img/tenchi.jpg'},
    {'id': '5', 
    'url': './img/tenjhotenge.jpg'},
    {'id': '6', 
    'url': './img/yuyuhakusho.jpg'},
]

const containerItems = document.querySelector('#container-items')

const loadImages = (images, container) => {
    images.forEach (image => {
        container.innerHTML += `
            <div class= 'item'> 
                <img src= '${image.url}'
            </div>
        `
    });
}

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#next').addEventListener('click', next);

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

document.getElementById('previous').addEventListener('click', previous);

const bolinhas = document.querySelectorAll('.bolinha');
let bolinha;

function acharBolinha(){
    if (bolinha != undefined){
        bolinha.classList.remove('bolinha-marcada');
    }

    images = document.querySelectorAll('.imagem');
    bolinhas.forEach(element => {
        if(images[1].src.indexOf(element.id) > -1){
            bolinha = element;
            return bolinha;
        }
    })
}

function marcarBolinha(){
    acharBolinha();
    bolinha.classList.add('bolinha-marcada');
}

marcarBolinha();