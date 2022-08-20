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
            document.write("<img src='../imgs/dc/batman.jpeg'>");
        }else if(heroi.toLowerCase()=="rorschach"){
            document.write("<img src='../imgs/dc/rorschach.jpeg'>");
        }else{
            document.write("Herói invalido.");
        }
    }else if(universo=="Marvel"){
        if(heroi.toLowerCase()=="wolverine"){
            document.write("<img src='../imgs/marvel/wolverine.jpg'>");
        }else if(heroi.toLowerCase()=="vampira"){
            document.write("<img src='../imgs/marvel/vampira.jpg'>");
        }else{
            document.write("Herói invalido.");
        }
    }else{
        document.write("Universo invalido.");
    }
}