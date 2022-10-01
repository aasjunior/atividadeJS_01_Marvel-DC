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
    let x = xmlDoc.getElementsByTagName("heroi");
    n = x.length-1;
    do{ 
        if(heroi.toLowerCase()==x[n].getElementsByTagName("nome")[0].childNodes[0].nodeValue.toLowerCase()){
            if(x[n].getAttribute('universo')==universo.toLowerCase()){
                img_Heroi = x[n].getElementsByTagName("imagem")[0].childNodes[0].nodeValue;
            }else{
                img_Heroi = "Universo inválido.";
            }
            n=-1;
        }else{
            img_Heroi = "Herói inválido.";
            n--;
        }
        
    }while(n>=0);
    mostrarHeroi();
}

function mostrarHeroi(){
    if(img_Heroi=="Herói inválido." || img_Heroi == "Universo inválido."){
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