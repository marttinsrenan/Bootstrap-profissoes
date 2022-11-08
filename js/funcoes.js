//Criar uma variável para manipular o XML
xmlhttp = new XMLHttpRequest();
//Efetuar a leitura do arquivo XML
xmlhttp.open("GET","xml/conteudo.xml",false);
//Enviar o arquivo para leitura
xmlhttp.send();
//Informar que o arquivo é um XML
xmlDoc = xmlhttp.responseXML;
//Organiza os dados em um vetor
x = xmlDoc.getElementsByTagName("postagem");

function funcaoConteudo(){
    for(n=x.length-1;n>=0;n--){
            document.write("<tr>" +
            "<td>"+ x[n].getAttribute("codigo") +"</td>" +
            "<td><a href='postagem.html?noticia="+ n +"'>"+ x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</a></td>" +
            "<td>"+ x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,250) + "...</td>" +
            "<td><img src='imgs/"+ x[n].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' width='250'></td>" +
            "</tr>");
    }
}

function funcaoPostagem(){
    //Armazena a URL completa, ex:http://127.0.0.1/web-xml/postagem.html?noticia=0
    url = new URL(window.location.href);
    //Armazena somente o parâmetro da URL, ex: noticia=0
    parametro = url.searchParams;
    //Armazena somente o valor parâmetro da URL, ex: 0
    n = parametro.get("noticia");
   
        document.write("<tr>" +
        "<td>"+ x[n].getAttribute("codigo") +"</td>" +
        "<td>"+ x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</td>" +
        "<td>"+ x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue + "</td>" +
        "<td><img src='imgs/"+ x[n].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' width='250'></td>" +
            "</tr>");    
}