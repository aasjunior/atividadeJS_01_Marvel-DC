xmlHTTP = new XMLHttpRequest();//Instanciação do objeto
xmlHTTP.open("GET", "xml/db_conteudo.xml", false);
xmlHTTP.send();
xmlDoc = xmlHTTP.responseXML;//Informa que o tipo de arquivo é XML 

function selectUniverso(){
    universo = document.querySelector("input[name=universo]:checked").value;

    document.getElementById("universo_heroi").innerHTML = "Digite um herói do universo " + universo;
    document.getElementById("box_universo").style.display = "none";
    document.getElementById("box_heroi").style.display = "block";
}

function selectHeroi(){
    heroi = document.getElementById("heroi").value;
    let x = xmlDoc.getElementsByTagName(universo.toLowerCase());
    n = x.length-1;

    for(var i=n; i>=0; i--){
        if(heroi.toLowerCase()==x[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue.toLowerCase()){
            img_Heroi = x[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue;
        }else{
            img_Heroi = "Herói inválido.";
        }
    }
    mostrarHeroi();
}

function mostrarHeroi(){
    if(img_Heroi=="Herói inválido."){
        msgInvalido();
    }else{
        document.getElementById("box_heroi").style.display = "none";
        document.getElementById("img_heroi").style.display = "flex";
        document.getElementById("fig_heroi").style.display = "block";
        document.getElementById("fig_heroi").innerHTML = "<img src='imgs/" + universo.toLowerCase() + "/" + img_Heroi + "'>";
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
