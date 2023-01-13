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

const containerItems = document.querySelector('#container-items');
const containerIndicators = document.querySelector('.indicators');

const createIndicators = (images, container) => {
    images.forEach ( image => {
        container.innerHTML += `<span data-number=${image.id}>${image.id}</span>`
    })
}

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item' data-number=${image.id}>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );
createIndicators(images, containerIndicators);

let items = document.querySelectorAll('.item');

const removeClassSelected = () => {
    const indicators = document.querySelectorAll('span');
    indicators.forEach( indicator => indicator.classList.remove ('selected'));
} 

const selectIndicator = (number) => {
    removeClassSelected();
    const indicator = document.querySelector(`span[data-number="${number}"]`)
    indicator.classList.add('selected')
} 

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
    selectIndicator (items[1].dataset.number)
}

document.querySelector('#next').addEventListener('click', next);

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
    selectIndicator (items[1].dataset.number)
}

document.getElementById('previous').addEventListener('click', previous);

const clickIndicators = ({target}) => {

    if ( target.tagName == 'SPAN') {
        const selectedIndicator = target.dataset.number;
        let visibleSlide = items[1].dataset.number
        
        if (selectedIndicator !== visibleSlide){    
            const autoNext = setInterval ( () => {
                document.querySelector('#next').click();
                visibleSlide = items[1].dataset.number;
                
                if (selectedIndicator == visibleSlide) 
                clearInterval(autoNext);
            }, 100);
        }
    }
}

document.getElementById('indicators').addEventListener('click', clickIndicators);