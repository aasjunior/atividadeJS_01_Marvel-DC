function selectUniverso(){
    universo = document.querySelector("input[name=universo]:checked").value;
    document.getElementById("universoHeroi").innerHTML = "Digite um herói do universo " + universo;
    document.getElementById("box_universo").style.display = "none";
    document.getElementById("box_heroi").style.display = "block";
}

function selectHeroi(){
    heroi = document.getElementById("heroi").value;
    if(universo=="DC"){
        if(heroi.toLowerCase()=="batman"){
            img_Heroi = "<img src='imgs/dc/batman.jpg'>";
            mostrarHeroi();
        }else if(heroi.toLowerCase()=="rorschach"){
            img_Heroi = "<img src='imgs/dc/rorschach.jpg'>";
            mostrarHeroi();
        }else if(heroi.toLowerCase()=="mulher maravilha"){
            img_Heroi = "<img src='imgs/dc/mulher-maravilha.jpg'>";
            mostrarHeroi();
        }else if(heroi.toLowerCase()=="supergirl"){
            img_Heroi = "<img src='imgs/dc/supergirl.jpg'>";
            mostrarHeroi();
        }else if(heroi.toLowerCase()=="superman"){
            img_Heroi = "<img src='imgs/dc/superman.jpg'>";
            mostrarHeroi();
        }else{
            msg_invalido = "Herói inválido.";
            msgInvalido();
        }
    }else if(universo=="Marvel"){
        if(heroi.toLowerCase()=="wolverine"){
            img_Heroi ="<img src='imgs/marvel/wolverine.jpg'>";
            mostrarHeroi();
        }else if(heroi.toLowerCase()=="vampira"){
            img_Heroi = "<img src='imgs/marvel/vampira.jpg'>";
            mostrarHeroi();
        }else if(heroi.toLowerCase()=="motoqueiro fantasma"){
            img_Heroi = "<img src='imgs/marvel/motoqueiro-fantasma.jpg'>";
            mostrarHeroi();
        }else if(heroi.toLowerCase()=="homem de ferro"){
            img_Heroi = "<img src='imgs/marvel/homem-de-ferro.jpg'>";
            mostrarHeroi();
        }else if(heroi.toLowerCase()=="homem aranha"){
            img_Heroi = "<img src='imgs/marvel/homem-aranha.jpg'>";
            mostrarHeroi();
        }else{
            msg_invalido = "Herói inválido.";
            msgInvalido();
        }
    }else{
        msg_invalido = "Universo inválido.";
            msgInvalido();
    }

    
}

function mostrarHeroi(){
    document.getElementById("box_heroi").style.display = "none";
    document.getElementById("img_heroi").style.display = "flex";
    document.getElementById("fig_heroi").style.display = "block";
    document.getElementById("fig_heroi").innerHTML = img_Heroi;
}

function msgInvalido(){
    document.getElementById("box_heroi").style.display = "none";
    document.getElementById("img_heroi").style.display = "flex";
    document.getElementById("msg_invalido").style.display = "block";
    document.getElementById("msg_invalido").innerHTML = "<h1>:(</h1><h3>" + msg_invalido + "</h3>";
}

function funcVoltar(){
    window.location.reload();
}
