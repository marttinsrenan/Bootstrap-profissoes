//Criar uma variável para manipular o XML
xmlhttp = new XMLHttpRequest();
//Efetuar a leitura do arquivo XML
xmlhttp.open("GET","xml/db_conteudo.xml",false);
//Enviar o arquivo para leitura
xmlhttp.send();
//Informar que o arquivo é um XML
xmlDoc = xmlhttp.responseXML;
//Organiza os dados em um vetor
x = xmlDoc.getElementsByTagName("postagem");

function funcaoConteudo(){
    for(n=x.length-1;n>=0;n--){
            document.write("<div>" +
             
            "<div><a href='postagem.html?noticia="+ n +"'>"+ x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</a></div>" +
            "<div>"+ x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,250) + "...</div>" +
            "<div id='img'><img src='imgs/"+ x[n].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' width='250'></div>" +
            "</div>");
    }
}

function funcaoConteudo(){
    for(n = 0; n < x.length; n++){
        document.write(
        "<div class='card mb-3 reveal bg-dark' id='noticia'>"+
            "<div class='row no-gutters'>"+
                "<div class='col-md-3 justify-content-center align-items-center d-flex'>"+
                    "<img src='imgs/moto/"+ x[n].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' style='max-height: 300px;' class='card-img'>" + 
                "</div>" +
                "<div class='col-md-8'>" + 
                    "<div class='card-body'>"+
                        "<h4 class='card-title'><a href='postagem.html?noticia=" + n + "' class='text-white' style='text-decoration:none;'>" + x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</a></h5>"+
                        "<p class='card-text'>" + x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,245) +"...</p>" +
                        "<a href='postagem.html?noticia=" + n + "' class='btn btn-primary'>Saiba Mais</a>"+
                    "</div>" + 
                "</div>" +
            "</div>" +
        "</div>");
    }
}






function funcaoPostagem(){
    //Armazena a URL completa, ex:http://127.0.0.1/web-xml/postagem.html?noticia=0
    url = new URL(window.location.href);
    //Armazena somente o parâmetro da URL, ex: noticia=0
    parametro = url.searchParams;
    //Armazena somente o valor parâmetro da URL, ex: 0
    n = parametro.get("noticia");
   
        document.write("<div>" +

        "<div>"+ x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</div>" +
        "<div>"+ x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue + "</div>" +
        "<div><img src='imgs/"+ x[n].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' width='250'></div>" +
            "</div>");    
}