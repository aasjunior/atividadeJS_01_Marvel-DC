function selectUniverso(){
    universo = document.querySelector("input[name=universo]:checked").value;
    document.getElementById("universo_heroi").innerHTML = "Digite um herói do universo " + universo;
    document.getElementById("box_universo").style.display = "none";
    document.getElementById("box_heroi").style.display = "block";
}

function selectHeroi(){
    heroi = document.getElementById("heroi").value;
    if(universo=="DC"){
        switch(heroi.toLowerCase()){
            case "batman":
                img_Heroi = "<img src='imgs/dc/batman.jpg'>";
                break;
            case "rorschach":
                img_Heroi = "<img src='imgs/dc/rorschach.jpg'>";
                break;
            case "mulher maravilha": case "mulher-maravilha":
                img_Heroi = "<img src='imgs/dc/mulher-maravilha.jpg'>";
                break;
            case "supergirl":
                img_Heroi = "<img src='imgs/dc/supergirl.jpg'>";
                break;
            case "superman":
                img_Heroi = "<img src='imgs/dc/superman.jpg'>";
                break;
            default:
                img_Heroi = "Herói inválido.";
                break;
        }
    }else if(universo=="Marvel"){
        switch(heroi.toLowerCase()){
            case "wolverine":
                img_Heroi ="<img src='imgs/marvel/wolverine.jpg'>";
                break;
            case "vampira":
                img_Heroi = "<img src='imgs/marvel/vampira.jpg'>";
                break;
            case "motoqueiro fantasma": case "motoqueiro-fantasma":
                img_Heroi = "<img src='imgs/marvel/motoqueiro-fantasma.jpg'>";
                break;
            case "homem de ferro":
                img_Heroi = "<img src='imgs/marvel/homem-de-ferro.jpg'>";
                break;
            case "homem aranha": case "homem-aranha":
                img_Heroi = "<img src='imgs/marvel/homem-aranha.jpg'>";
                break;
            default:
                img_Heroi = "Herói inválido.";
                break;
        }
    }else{
        img_Heroi = "Universo inválido.";
    }
    mostrarHeroi();
}

function mostrarHeroi(){
    if(img_Heroi=="Herói inválido." || img_Heroi=="Universo inválido."){
        msgInvalido();
    }else{
        document.getElementById("box_heroi").style.display = "none";
        document.getElementById("img_heroi").style.display = "flex";
        document.getElementById("fig_heroi").style.display = "block";
        document.getElementById("fig_heroi").innerHTML = img_Heroi;
        document.getElementById("img_heroi").innerHTML += "<button onclick='funcVoltar()' class='btn'>Voltar</button>";
    }
}

function msgInvalido(){
    document.getElementById("box_heroi").style.display = "none";
        document.getElementById("img_heroi").style.display = "flex";
        document.getElementById("fig_heroi").style.display = "none";
        document.getElementById("msg_invalido").style.display = "block";
        document.getElementById("msg_invalido").innerHTML = "<h1>:(</h1><h3>" + img_Heroi + "</h3>";
        document.getElementById("img_heroi").innerHTML += "<button onclick='funcVoltar()' class='btn'>Voltar</button>";
}

function funcVoltar(){
    window.location.reload();
}