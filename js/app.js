function idiomaEs(){
    var id = document.getElementById("idioma").value;
    
    if(id == 'en'){
        location.href="en/index.html";
    }

    if(id == 'fr'){
        location.href="fr/index.html";
    }
}

function idiomaEn(){
    var id = document.getElementById("idioma").value;
    
    if(id == 'es'){
        location.href="../index.html";
    }

    if(id == 'fr'){
        location.href="../fr/index.html";
    }
}

function idiomaFr(){
    var id = document.getElementById("idioma").value;
    
    if(id == 'es'){
        location.href="../index.html";
    }

    if(id == 'en'){
        location.href="../en/index.html";
    }
}