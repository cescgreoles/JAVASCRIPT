console.log('Cargado JS');

function carlota(event) {
    console.log('[Carlota] Hola');

    // if (event.target.innerText === ) {
        
    // } else {
        
    // }

    // investigar como hacer cambiar el boton cuando hay una decision
}

function sobrevuelaBoton() {
    console.log('El ratón ha entrado a una area restringida');
}

function saleRaton() {
    console.log('El raton sale del boton');
}

const formSelected = document.querySelector('form'); 
formSelected.addEventListener('click', function() {
    console.log('Hago click en el formulario');
});

// Para dejar de hacer el evento lo hariamos asi: 
formSelected.removeEventListener('click', carlota); 

const superBtn = document.getElementById('super-button'); 

function log1() {
    console.log('111111111111111111');
}

function log2() {
    console.log('2222222222222222222');
}

function log3() {
    console.log('333333333333');
}

superBtn.addEventListener('click', log1())
superBtn.addEventListener('click', log2())
superBtn.addEventListener('click', log3())