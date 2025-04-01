function alterarTitulo(){
    let titulo = document.getElementsByClassName("mw-page-title-main");

    for (let i = 0; i < titulo.length; i++) {
            titulo[i].innerHTML = "Alterando o título";
    }
    
    }

    alterarTitulo();