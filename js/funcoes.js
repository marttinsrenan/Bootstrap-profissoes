
//Criar uma váriavel para manipular o XML
xmlhttp = new XMLHttpRequest();

//Efetuar a leitura do arquivo XML
xmlhttp.open("GET", "xml/db_conteudo.xml",false);

//Enviar o arquivo para leitura
xmlhttp.send();

//Informar que o arquivo é um XML
xmlDoc = xmlhttp.responseXML;

//Organiza os dados em um valor
x = xmlDoc.getElementsByTagName("postagem");





function funcaoConteudo(){
    for(n = 0; n < x.length; n++){
        document.write(
        "<div class='card mb-3 reveal ' id='noticia'>"+
            "<div class='row no-gutters'>"+
                "<div class='col-md-3 justify-content-center align-items-center d-flex'>"+
                    "<img src='img/"+ x[n].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' style='max-height: 300px;' class='card-img'>" + 
                "</div>" +
                "<div class='col-md-8'>" + 
                    "<div class='card-body'>"+
                        "<h4 class='card-title'><a href='postagem.html?noticia=" + n + "' class='text-black' style='text-decoration:none;'>" + x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</a></h5>"+
                        "<p class='card-text'>" + x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,245) +"...</p>" +
                        "<a href='postagem.html?noticia=" + n + "' class='btn btn-primary'>+ Saiba Mais</a>"+
                    "</div>" + 
                "</div>" +
            "</div>" +
        "</div>");
    }
}








    function funcaoPostagem(){
        url = new URL(window.location.href);
        parametro = url.searchParams;
        n = parametro.get("noticia");
        document.write("<h1 class='fw-semibold mb-4 mt-5'>" + x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h1>"+
        "<hr class='my-4'>" + 
        "<div class='col-12'>" +
            "<div class='d-flex justify-content-center align-items-center'>" + 
                "<img src='img/"+ x[n].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' class='img-fluid mb-5 col-8'>"+
            "</div>" + 
            "<div class='corpo mb-5'>" + 
                "<p>" + x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue + "</p>" + 
            "</div>" +
        "</div>");
    }

