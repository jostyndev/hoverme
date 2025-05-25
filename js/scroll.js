window.addEventListener("scroll",function(){
    let navbar = this.document.querySelector("#navbar");
    navbar.classList.toggle("nav-abajo",window.scrollY>0);

    let redes = this.document.querySelector(".redes");
    redes.classList.toggle("redes-act",window.scrollY>250);

    let btn_subir = this.document.querySelector(".btn-subir");
    btn_subir.classList.toggle("btn-subir-act",window.scrollY>250);
})

document.getElementById('btnScrollToTop').addEventListener('click', function() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });