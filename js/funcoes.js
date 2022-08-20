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
            img_Heroi = "url('../imgs/dc/batman.jpeg')";
        }else if(heroi.toLowerCase()=="rorschach"){
            img_Heroi = "url('../imgs/dc/rorschach.jpeg')";
        }else{
            document.write("Herói invalido.");
        }
    }else if(universo=="Marvel"){
        if(heroi.toLowerCase()=="wolverine"){
            img_Heroi ="url('../imgs/marvel/wolverine.jpg')";
        }else if(heroi.toLowerCase()=="vampira"){
            img_Heroi = "url('../imgs/marvel/vampira.jpg')";
        }else{
            document.write("Herói invalido.");
        }
    }else{
        document.write("Universo invalido.");
    }

    document.getElementById("box_heroi").style.display = "none";
    document.getElementById("img_heroi").style.display = "block";
    document.getElementById("img_heroi").style.backgroundImage = img_Heroi;
}