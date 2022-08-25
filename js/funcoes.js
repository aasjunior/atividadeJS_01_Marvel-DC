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
        }else if(heroi.toLowerCase()=="rorschach"){
            img_Heroi = "<img src='imgs/dc/rorschach.jpg'>";
        }else if(heroi.toLowerCase()=="mulher maravilha"){
            img_Heroi = "<img src='imgs/dc/mulher-maravilha.jpg'>";
        }else if(heroi.toLowerCase()=="supergirl"){
            img_Heroi = "<img src='imgs/dc/supergirl.jpg'>";
        }else if(heroi.toLowerCase()=="superman"){
            img_Heroi = "<img src='imgs/dc/superman.jpg'>";
        }else{
            msgInvalido();
        }
    }else if(universo=="Marvel"){
        if(heroi.toLowerCase()=="wolverine"){
            img_Heroi ="<img src='imgs/marvel/wolverine.jpg'>";
        }else if(heroi.toLowerCase()=="vampira"){
            img_Heroi = "<img src='imgs/marvel/vampira.jpg'>";
        }else if(heroi.toLowerCase()=="motoqueiro fantasma"){
            img_Heroi = "<img src='imgs/marvel/motoqueiro-fantasma.jpg'>";
        }else if(heroi.toLowerCase()=="homem de ferro"){
            img_Heroi = "<img src='imgs/marvel/homem-de-ferro.jpg'>";
        }else if(heroi.toLowerCase()=="homem aranha"){
            img_Heroi = "<img src='imgs/marvel/homem-aranha.jpg'>";
        }else{
            msgInvalido();
        }
    }else{
        document.getElementById("img_heroi").innerHTML = "<hgroup><h1>:(</h1><h3>Universo Inválido.</h3></hgroup>";
    }

    document.getElementById("box_heroi").style.display = "none";
    document.getElementById("img_heroi").style.display = "flex";
    document.getElementById("fig_heroi").innerHTML = img_Heroi;
}

function msgInvalido(){
    document.getElementById("img_heroi").innerHTML = "<hgroup><h1>:(</h1><h3>Herói Inválido.</h3></hgroup>";
}

function funcVoltar(){
    window.location.reload();
}