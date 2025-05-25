function copyToClipBoard(id_elemento){

    // document.querySelector(`.ms-copy-active-${id_elemento}`).classList.add('active');
    document.querySelector(`#i-${id_elemento}`).classList.remove('fa-regular','fa-clipboard');
    document.querySelector(`#i-${id_elemento}`).classList.add('fa-solid','fa-clipboard-check');
    setTimeout(() => {
        // document.querySelector(`.ms-copy-active-${id_elemento}`).classList.remove('active');
        document.querySelector(`#i-${id_elemento}`).classList.add('fa-regular','fa-clipboard');
        document.querySelector(`#i-${id_elemento}`).classList.remove('fa-solid','fa-clipboard-check');
    }, 3000);

    let btn = document.getElementById(`b-${id_elemento}`);
    const valor = btn.attributes['data-tooltip'].value;
    btn.setAttribute('data-tooltip', 'copied');
    btn.setAttribute('disabled', '');

    setTimeout(() => {
        btn.setAttribute('data-tooltip', valor);
        btn.removeAttribute('disabled', '');
    }, 3000);

    const inputOculto = document.createElement('input');

    inputOculto.setAttribute('value', document.getElementById(id_elemento).innerText);

    document.body.appendChild(inputOculto);

    inputOculto.select();

    document.execCommand('copy');

    document.body.removeChild(inputOculto);
}

function btnClipBoardOpciones(id_boton, efecto){
    document.querySelector(`#${id_boton}`).addEventListener('click', () => {
        document.querySelector(`#${id_boton}`).classList.add("click-btn");
        document.querySelector(`#${efecto}`).classList.add("blur-active");
    })

    document.querySelector(`#blur-${efecto}`).addEventListener('click', () => {
        document.querySelector(`#${id_boton}`).classList.remove("click-btn");
        document.querySelector(`#${efecto}`).classList.remove("blur-active");
    })
}


document.querySelector('#menu-responsive').addEventListener('click', () => {
    const nav_enlaces = document.querySelector('.nav-enlaces').classList;
    document.querySelector('.nav-enlaces').classList.toggle("menu-responsive-activo");
    console.log(nav_enlaces)

    if(nav_enlaces.value == 'nav-enlaces'){
        document.querySelector('#barraNav').classList.remove('fa-bars-staggered');
        document.querySelector('#barraNav').classList.add('fa-bars');
    }
    else{
        document.querySelector('#barraNav').classList.remove('fa-bars');
        document.querySelector('#barraNav').classList.add('fa-bars-staggered');
    }

    window.onscroll = () =>{
        document.querySelector('.nav-enlaces').classList.remove("menu-responsive-activo");
        document.querySelector('#barraNav').classList.remove('fa-bars-staggered');
        document.querySelector('#barraNav').classList.add('fa-bars');
    }
})