    c=localStorage.getItem("contagem");
    console.log(c);
    console.log(localStorage.getItem("lista"));
    lista=localStorage.getItem("lista").split(",");

    for (let numero=0; numero<lista.length; numero++){
        lista[numero]=parseInt(lista[numero]);
    }
    if (lista[0]!="NaN"){
        posicao1=parseInt(lista[0]);
    }
    if(lista[1]!="NaN"){
        posicao2=parseInt(lista[1]);
    }
    if(lista[2]!="NaN"){
        posicao3=parseInt(lista[2]);
    }
    if(lista[3]!="NaN"){
        posicao4=parseInt(lista[3]);
    }
    if(lista[4]!="NaN"){
        posicao5=parseInt(lista[4]);
    }
    if(lista[5]!="NaN"){
        posicao6=parseInt(lista[5]);
    }
    if(lista[6]!="NaN"){
        posicao7=parseInt(lista[6]);
    }
    if(lista[7]!="NaN"){
        posicao8=parseInt(lista[7]);
    }
    if(lista[8]!="NaN"){
        posicao9=parseInt(lista[8]);
    }
    if(lista[9]!="NaN"){
        posicao10=parseInt(lista[9]);
    }
    if(lista[10]!="NaN"){
        posicao11=parseInt(lista[10]);
    }
    if(lista[11]!="NaN"){
        posicaoRelacionados1=parseInt(lista[11]);
    }
    if(lista[12]!="NaN"){
        posicaoRelacionados2=parseInt(lista[12]);
    }
    if(lista[13]!="NaN"){
        posicaoRelacionados3=parseInt(lista[13]);
    }
    if(lista[14]!="NaN"){
        posicaoRelacionados4=parseInt(lista[14]);
    }
    let array=[];
    if (!isNaN(c)) {
        for (let i = 0; i<=c; i++) {
            array.push(0);
        }
    }
    console.log(lista);
if(localStorage.getItem("favoritado1")=="false"){
    for (let m = 0; m < lista.length; m++) {
        if (lista[m] >= parseInt(localStorage.getItem("posicao1"))) {
            lista[m]--;
        }
    }
    localStorage.setItem("posicao1", "");
    localStorage.setItem("lista", lista);
    lista[0]="NaN";
    posicao1="";
}
if(localStorage.getItem("favoritado2")=="false"){
    for (let m = 0; m < lista.length; m++) {
        // Se o número atual for maior que o número na posição 1
        if (lista[m] >= parseInt(localStorage.getItem("posicao2"))) {
            // Diminui o número atual em 1
            lista[m]--;
        }
    }
    localStorage.setItem("posicao2", "");
    localStorage.setItem("lista", lista);
    lista[1]="NaN";
    posicao2="";
}
if(localStorage.getItem("favoritado3")=="false"){
    for (let m = 0; m < lista.length; m++) {
        // Se o número atual for maior que o número na posição 1
        if (lista[m] >= parseInt(localStorage.getItem("posicao3"))) {
            // Diminui o número atual em 1
            lista[m]--;
        }
    }
    localStorage.setItem("posicao3", "");
    localStorage.setItem("lista", lista);
    lista[2]="NaN";
    posicao3="";
}
if(localStorage.getItem("favoritado4")=="false"){
    for (let m = 0; m < lista.length; m++) {
        // Se o número atual for maior que o número na posição 1
        if (lista[m] >= parseInt(localStorage.getItem("posicao4"))) {
            // Diminui o número atual em 1
            lista[m]--;
        }
    }
    localStorage.setItem("posicao4", "");
    localStorage.setItem("lista", lista);
    lista[3]="NaN";
    posicao4="";
}
if(localStorage.getItem("favoritado5")=="false"){
    for (let m = 0; m < lista.length; m++) {
        // Se o número atual for maior que o número na posição 1
        if (lista[m] >= parseInt(localStorage.getItem("posicao5"))) {
            // Diminui o número atual em 1
            lista[m]--;
        }
    }
    localStorage.setItem("posicao5", "");
    localStorage.setItem("lista", lista);
    lista[4]="NaN";
    posicao5="";
}
if(localStorage.getItem("favoritado6")=="false"){
    for (let m = 0; m < lista.length; m++) {
        // Se o número atual for maior que o número na posição 1
        if (lista[m] >= parseInt(localStorage.getItem("posicao6"))) {
            // Diminui o número atual em 1
            lista[m]--;
        }
    }
    localStorage.setItem("posicao6", "");
    localStorage.setItem("lista", lista);
    lista[5]="NaN";
    posicao6="";
}
if(localStorage.getItem("favoritado7")=="false"){
    for (let m = 0; m < lista.length; m++) {
        // Se o número atual for maior que o número na posição 1
        if (lista[m] >= parseInt(localStorage.getItem("posicao7"))) {
            // Diminui o número atual em 1
            lista[m]--;
        }
    }
    localStorage.setItem("posicao7", "");
    localStorage.setItem("lista", lista);
    lista[6]="NaN";
    posicao7="";
}
if(localStorage.getItem("favoritado8")=="false"){
    for (let m = 0; m < lista.length; m++) {
        // Se o número atual for maior que o número na posição 1
        if (lista[m] >= parseInt(localStorage.getItem("posicao8"))) {
            // Diminui o número atual em 1
            lista[m]--;
        }
    }
    localStorage.setItem("posicao8", "");
    localStorage.setItem("lista", lista);
    lista[7]="NaN";
    posicao8="";
}
if(localStorage.getItem("favoritado9")=="false"){
    for (let m = 0; m < lista.length; m++) {
        // Se o número atual for maior que o número na posição 1
        if (lista[m] >= parseInt(localStorage.getItem("posicao9"))) {
            // Diminui o número atual em 1
            lista[m]--;
        }
    }
    localStorage.setItem("posicao9", "");
    localStorage.setItem("lista", lista);
    lista[8]="NaN";
    posicao9="";
}
if(localStorage.getItem("favoritado10")=="false"){
    for (let m = 0; m < lista.length; m++) {
        // Se o número atual for maior que o número na posição 1
        if (lista[m] >= parseInt(localStorage.getItem("posicao10"))) {
            // Diminui o número atual em 1
            lista[m]--;
        }
    }
    localStorage.setItem("posicao10", "");
    localStorage.setItem("lista", lista);
    lista[9]="NaN";
    posicao10="";
}
if(localStorage.getItem("favoritado11")=="false"){
    for (let m = 0; m < lista.length; m++) {
        // Se o número atual for maior que o número na posição 1
        if (lista[m] >= parseInt(localStorage.getItem("posicao11"))) {
            // Diminui o número atual em 1
            lista[m]--;
        }
    }
    localStorage.setItem("posicao11", "");
    localStorage.setItem("lista", lista);
    lista[10]="NaN";
    posicao11="";
}
if(localStorage.getItem("favoritadoRelacionados1")=="false"){
    for (let m = 0; m < lista.length; m++) {
        // Se o número atual for maior que o número na posição 1
        if (lista[m] >= parseInt(localStorage.getItem("posicaoRelacionados1"))) {
            // Diminui o número atual em 1
            lista[m]--;
        }
    }
    localStorage.setItem("posicaoRelacionados1", "");
    localStorage.setItem("lista", lista);
    lista[11]="NaN";
    posicaoRelacionados1="";
}
if(localStorage.getItem("favoritadoRelacionados2")=="false"){
    for (let m = 0; m < lista.length; m++) {
        // Se o número atual for maior que o número na posição 1
        if (lista[m] >= parseInt(localStorage.getItem("posicaoRelacionados2"))) {
            // Diminui o número atual em 1
            lista[m]--;
        }
    }
    localStorage.setItem("posicaoRelacionados2", "");
    localStorage.setItem("lista", lista);
    lista[12]="NaN";
    posicaoRelacionados2="";
}
if(localStorage.getItem("favoritadoRelacionados3")=="false"){
    for (let m = 0; m < lista.length; m++) {
        // Se o número atual for maior que o número na posição 1
        if (lista[m] >= parseInt(localStorage.getItem("posicaoRelacionados3"))) {
            // Diminui o número atual em 1
            lista[m]--;
        }
    }
    localStorage.setItem("posicaoRelacionados3", "");
    localStorage.setItem("lista", lista);
    lista[13]="NaN";
    posicaoRelacionados3="";
}
if(localStorage.getItem("favoritadoRelacionados4")=="false"){
    for (let m = 0; m < lista.length; m++) {
        // Se o número atual for maior que o número na posição 1
        if (lista[m] >= parseInt(localStorage.getItem("posicaoRelacionados4"))) {
            // Diminui o número atual em 1
            lista[m]--;
        }
    }
    localStorage.setItem("posicaoRelacionados4", "");
    localStorage.setItem("lista", lista);
    lista[14]="NaN";
    posicaoRelacionados4="";
}

console.log(posicao1);
    console.log(array);
    if (typeof posicao1 == 'number'){
        if(posicao1>=0){
            clone1=localStorage.getItem("clone1");
            array[posicao1]=clone1;
        }
    }
    if (typeof posicao2 == 'number'){
        if(posicao2>=0){
            clone2=localStorage.getItem("clone2");
            array[posicao2]=clone2;
        }
    }
    if (typeof posicao3 == 'number'){
        if(posicao3>=0){
            clone3=localStorage.getItem("clone3");
            array[posicao3]=clone3;
        }
    }
    if (typeof posicao4 == 'number'){
        if(posicao4>=0){
            clone4=localStorage.getItem("clone4");
            array[posicao4]=clone4;
        }
    }
    if (typeof posicao5 == 'number'){
        if(posicao5>=0){
            clone5=localStorage.getItem("clone5");
            array[posicao5]=clone5;
        }
    }
    if (typeof posicao6 == 'number'){
        if(posicao6>=0){
            clone6=localStorage.getItem("clone6");
            array[posicao6]=clone6;
        }
    }
    if (typeof posicao7 == 'number'){
        if(posicao7>=0){
            clone7=localStorage.getItem("clone7");
            array[posicao7]=clone7;
        }
    }
    if (typeof posicao8 == 'number'){
        if(posicao8>=0){
            clone8=localStorage.getItem("clone8");
            array[posicao8]=clone8;
        }
    }
    if (typeof posicao9 == 'number'){
        if(posicao9>=0){
            clone9=localStorage.getItem("clone9");
            array[posicao9]=clone9;
        }
    }
    if (typeof posicao10 == 'number'){
        if(posicao10>=0){
            clone10=localStorage.getItem("clone10");
            array[posicao10]=clone10;
        }
    }
    if (typeof posicao11 == 'number'){
        if(posicao11>=0){
            clone11=localStorage.getItem("clone11");
            array[posicao11]=clone11;
        }
    }
    if (typeof posicaoRelacionados1 == 'number'){
        if(posicaoRelacionados1>=0){
            cloneRelacionados1=localStorage.getItem("cloneRelacionados1");
            array[posicaoRelacionados1]=cloneRelacionados1;
        }
    }
    if (typeof posicaoRelacionados2 == 'number'){
        if(posicaoRelacionados2>=0){
            cloneRelacionados2=localStorage.getItem("cloneRelacionados2");
            array[posicaoRelacionados2]=cloneRelacionados2;
        }
    }
    if (typeof posicaoRelacionados3 == 'number'){
        if(posicaoRelacionados3>=0){
            cloneRelacionados3=localStorage.getItem("cloneRelacionados3");
            array[posicaoRelacionados3]=cloneRelacionados3;
        }
    }
    if (typeof posicaoRelacionados4 == 'number'){
        if(posicaoRelacionados2>=0){
            cloneRelacionados4=localStorage.getItem("cloneRelacionados4");
            array[posicaoRelacionados4]=cloneRelacionados4;
        }
    }
    console.log(array);
    arrayReverso=array.slice().reverse();
    function verMais(){
        var primeiraLinha = document.querySelectorAll(".primeiraLinha");
        var segundaLinha = document.querySelectorAll(".segundaLinha");
        
        primeiraLinha.forEach(function(item) {
            item.style.display = "none"; 
        });

        segundaLinha.forEach(function(item) {
            item.style.display = "inline-block"; 
        });

        var nav = document.querySelector("nav");
        nav.scrollIntoView({ behavior: 'smooth' });
    }
    function voltar(){
        var primeiraLinha = document.querySelectorAll(".primeiraLinha");
        var segundaLinha = document.querySelectorAll(".segundaLinha");
        
        primeiraLinha.forEach(function(item) {
            item.style.display = "inline-block"; 
        });

        segundaLinha.forEach(function(item) {
            item.style.display = "none"; 
        });

        var nav = document.querySelector("nav");
        nav.scrollIntoView({ behavior: 'smooth' });
    }
    function verMenu(){
        var categorias = document.getElementById("categorias");
        if (categorias.style.display === "none") {
            categorias.style.display = "block";
        } else {
            categorias.style.display = "none";
        }
    }
    arrayReverso = arrayReverso.filter(element => element !== 0);
    var container = document.getElementById('container');
    container.innerHTML="";
    for(let v=0; v<arrayReverso.length; v++){
        container.innerHTML=container.innerHTML+arrayReverso[v];
    }
    console.log(arrayReverso=="");
    if (arrayReverso==""){
        console.log("a");
        aviso=document.getElementById("explicacao");
        aviso.style.display="none";
        aviso2=document.getElementById("explicacao2");
        aviso2.style.display="block";
    }

    function mudarImagem() {
        document.getElementById("favoritar1").src = "../imagens/heart2.png";
    }

    function resetarImagem() {
        if (!clicado){
            document.getElementById("favoritar1").src = "../imagens/heart.png";
        }
    }
    var clicado = localStorage.getItem('favoritado1') === 'true';

    function favoritar() {
        clicado = !clicado;
        var img = document.getElementById("favoritar1");
        img.src = clicado ? "../imagens/heart2.png" : "../imagens/heart.png";
        localStorage.setItem('favoritado1', clicado);
        var paiDaImagem = document.getElementById('favoritar1').parentNode;
        localStorage.setItem('clone1', paiDaImagem.outerHTML);
        if (localStorage.getItem('favoritado1'==='true')) {
            src = "../imagens/heart2.png";
            c=c+1;
            localStorage.setItem("contagem", c);
        } else {
            src = "../imagens/heart.png";
            c=c-1;
            localStorage.setItem("contagem", c);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var img = document.getElementById("favoritar1");
        if (localStorage.getItem('favoritado1') === 'true') {
            img.src = "../imagens/heart2.png";
        } else {
            img.src = "../imagens/heart.png";
        }
    });

    function mudarImagem2() {
        document.getElementById("favoritar2").src = "../imagens/heart2.png";
    }

    function resetarImagem2() {
        if (!clicado2){
            document.getElementById("favoritar2").src = "../imagens/heart.png";
        }
    }
    var clicado2 = localStorage.getItem('favoritado2') === 'true';
    function favoritar2() {
        clicado2 = !clicado2;
        var img = document.getElementById("favoritar2");
        img.src = clicado2 ? "../imagens/heart2.png" : "../imagens/heart.png";
        localStorage.setItem('favoritado2', clicado2);
        var paiDaImagem2 = document.getElementById('favoritar2').parentNode;
        localStorage.setItem('clone2', paiDaImagem2.outerHTML);
        if (localStorage.getItem('favoritado2'==='true')) {
            src = "../imagens/heart2.png";
            c=c+1;
            localStorage.setItem("contagem", c);
        } else {
            src = "../imagens/heart.png";
            c=c-1;
            localStorage.setItem("contagem", c);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var img = document.getElementById("favoritar2");
        if (localStorage.getItem('favoritado2') === 'true') {
            img.src = "../imagens/heart2.png";

        } else {
            img.src = "../imagens/heart.png";
        }
    });
    function mudarImagem3() {
        document.getElementById("favoritar3").src = "../imagens/heart2.png";
    }

    function resetarImagem3() {
        if (!clicado3){
            document.getElementById("favoritar3").src = "../imagens/heart.png";
        }
    }
    var clicado3 = localStorage.getItem('favoritado3') === 'true';

    function favoritar3() {
        clicado3 = !clicado3;
        var img = document.getElementById("favoritar3");
        img.src = clicado3 ? "../imagens/heart2.png" : "../imagens/heart.png";
        localStorage.setItem('favoritado3', clicado3);
        var paiDaImagem3 = document.getElementById('favoritar3').parentNode;
        localStorage.setItem('clone3', paiDaImagem3.outerHTML);
        if (localStorage.getItem('favoritado3'==='true')) {
            src = "../imagens/heart2.png";
            c=c+1;
            localStorage.setItem("contagem", c);
        } else {
            src = "../imagens/heart.png";
            c=c-1;
            localStorage.setItem("contagem", c);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var img = document.getElementById("favoritar3");
        if (localStorage.getItem('favoritado3') === 'true') {
            img.src = "../imagens/heart2.png";
        } else {
            img.src = "../imagens/heart.png";
        }
    });
    function mudarImagem4() {
        document.getElementById("favoritar4").src = "../imagens/heart2.png";
    }

    function resetarImagem4() {
        if (!clicado4){
            document.getElementById("favoritar4").src = "../imagens/heart.png";
        }
    }
    var clicado4 = localStorage.getItem('favoritado4') === 'true';

    function favoritar4() {
        clicado4 = !clicado4;
        var img = document.getElementById("favoritar4");
        img.src = clicado4 ? "../imagens/heart2.png" : "../imagens/heart.png";
        localStorage.setItem('favoritado4', clicado4);
        var paiDaImagem4 = document.getElementById('favoritar4').parentNode;
        localStorage.setItem('clone4', paiDaImagem4.outerHTML);
        if (localStorage.getItem('favoritado4'==='true')) {
            src = "../imagens/heart2.png";
            c=c+1;
            localStorage.setItem("contagem", c);
        } else {
            src = "../imagens/heart.png";
            c=c-1;
            localStorage.setItem("contagem", c);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var img = document.getElementById("favoritar4");
        if (localStorage.getItem('favoritado4') === 'true') {
            img.src = "../imagens/heart2.png";

        } else {
            img.src = "../imagens/heart.png";
        }
    });
    function mudarImagem5() {
        document.getElementById("favoritar5").src = "../imagens/heart2.png";
    }

    function resetarImagem5() {
        if (!clicado5){
            document.getElementById("favoritar5").src = "../imagens/heart.png";
        }
    }
    var clicado5 = localStorage.getItem('favoritado5') === 'true';
    function favoritar5() {
        clicado5 = !clicado5;
        var img = document.getElementById("favoritar5");
        img.src = clicado5 ? "../imagens/heart2.png" : "../imagens/heart.png";
        localStorage.setItem('favoritado5', clicado5);
        var paiDaImagem5 = document.getElementById('favoritar5').parentNode;
        localStorage.setItem('clone5', paiDaImagem5.outerHTML);
        if (localStorage.getItem('favoritado5'==='true')) {
            src = "../imagens/heart2.png";
            c=c+1;
            localStorage.setItem("contagem", c);
        } else {
            src = "../imagens/heart.png";
            c=c-1;
            localStorage.setItem("contagem", c);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var img = document.getElementById("favoritar5");
        if (localStorage.getItem('favoritado5') === 'true') {
            img.src = "../imagens/heart2.png";
        } else {
            img.src = "../imagens/heart.png";
        }
    });
    function mudarImagem6() {
        document.getElementById("favoritar6").src = "../imagens/heart2.png";
    }

    function resetarImagem6() {
        if (!clicado6){
            document.getElementById("favoritar6").src = "../imagens/heart.png";
        }
    }
    var clicado6 = localStorage.getItem('favoritado6') === 'true';

    function favoritar6() {
        clicado6 = !clicado6;
        var img = document.getElementById("favoritar6");
        img.src = clicado6 ? "../imagens/heart2.png" : "../imagens/heart.png";
        localStorage.setItem('favoritado6', clicado6);
        var paiDaImagem6 = document.getElementById('favoritar6').parentNode;
        localStorage.setItem('clone6', paiDaImagem6.outerHTML);
        if (localStorage.getItem('favoritado6'==='true')) {
            src = "../imagens/heart2.png";
            c=c+1;
            localStorage.setItem("contagem", c);
        } else {
            src = "../imagens/heart.png";
            c=c-1;
            localStorage.setItem("contagem", c);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var img = document.getElementById("favoritar6");
        if (localStorage.getItem('favoritado6') === 'true') {
            img.src = "../imagens/heart2.png";
        } else {
            img.src = "../imagens/heart.png";
        }
    });
    function mudarImagem7() {
        document.getElementById("favoritar7").src = "../imagens/heart2.png";
    }

    function resetarImagem7() {
        if (!clicado7){
            document.getElementById("favoritar7").src = "../imagens/heart.png";
        }
    }
    var clicado7 = localStorage.getItem('favoritado7') === 'true';

    function favoritar7() {
        clicado7 = !clicado7;
        var img = document.getElementById("favoritar7");
        img.src = clicado7 ? "../imagens/heart2.png" : "../imagens/heart.png";
        localStorage.setItem('favoritado7', clicado7);
        var paiDaImagem7 = document.getElementById('favoritar7').parentNode;
        localStorage.setItem('clone7', paiDaImagem7.outerHTML);
        if (localStorage.getItem('favoritado7'==='true')) {
            src = "../imagens/heart2.png";
            c=c+1;
            localStorage.setItem("contagem", c);
        } else {
            src = "../imagens/heart.png";
            c=c-1;
            localStorage.setItem("contagem", c);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var img = document.getElementById("favoritar7");
        if (localStorage.getItem('favoritado7') === 'true') {
            img.src = "../imagens/heart2.png";
        } else {
            img.src = "../imagens/heart.png";
        }
    });
    function mudarImagem8() {
        document.getElementById("favoritar8").src = "../imagens/heart2.png";
    }

    function resetarImagem8() {
        if (!clicado8){
            document.getElementById("favoritar8").src = "../imagens/heart.png";
        }
    }
    var clicado8= localStorage.getItem('favoritado8') === 'true';
    function favoritar8() {
        clicado8 = !clicado8;
        var img = document.getElementById("favoritar8");
        img.src = clicado8 ? "../imagens/heart2.png" : "../imagens/heart.png";
        localStorage.setItem('favoritado8', clicado8);
        var paiDaImagem8 = document.getElementById('favoritar8').parentNode;
        localStorage.setItem('clone8', paiDaImagem8.outerHTML);
        if (localStorage.getItem('favoritado8'==='true')) {
            src = "../imagens/heart2.png";
            c=c+1;
            localStorage.setItem("contagem", c);
        } else {
            src = "../imagens/heart.png";
            c=c-1;
            localStorage.setItem("contagem", c);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var img = document.getElementById("favoritar8");
        if (localStorage.getItem('favoritado8') === 'true') {
            img.src = "../imagens/heart2.png";
        } else {
            img.src = "../imagens/heart.png";
        }
    });
    function mudarImagem9() {
        document.getElementById("favoritar9").src = "../imagens/heart2.png";
    }

    function resetarImagem9() {
        if (!clicado9){
            document.getElementById("favoritar9").src = "../imagens/heart.png";
        }
    }
    var clicado9 = localStorage.getItem('favoritado9') === 'true';

    function favoritar9() {
        clicado9 = !clicado9;
        var img = document.getElementById("favoritar9");
        img.src = clicado9 ? "../imagens/heart2.png" : "../imagens/heart.png";
        localStorage.setItem('favoritado9', clicado9);
        var paiDaImagem9 = document.getElementById('favoritar9').parentNode;
        localStorage.setItem('clone9', paiDaImagem9.outerHTML);
        if (localStorage.getItem('favoritado9'==='true')) {
            src = "../imagens/heart2.png";
            c=c+1;
            localStorage.setItem("contagem", c);
        } else {
            src = "../imagens/heart.png";
            c=c-1;
            localStorage.setItem("contagem", c);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var img = document.getElementById("favoritar9");
        if (localStorage.getItem('favoritado9') === 'true') {
            img.src = "../imagens/heart2.png";
        } else {
            img.src = "../imagens/heart.png";
        }
    });
    function mudarImagem10() {
        document.getElementById("favoritar10").src = "../imagens/heart2.png";
    }

    function resetarImagem10() {
        if (!clicado10){
            document.getElementById("favoritar10").src = "../imagens/heart.png";
        }
    }
    var clicado10 = localStorage.getItem('favoritado10') === 'true';

    function favoritar10() {
        clicado10 = !clicado10;
        var img = document.getElementById("favoritar10");
        img.src = clicado10 ? "../imagens/heart2.png" : "../imagens/heart.png";
        localStorage.setItem('favoritado10', clicado10);
        var paiDaImagem10 = document.getElementById('favoritar10').parentNode;
        localStorage.setItem('clone10', paiDaImagem10.outerHTML);
        if (localStorage.getItem('favoritado10'==='true')) {
            src = "../imagens/heart2.png";
            c=c+1;
            localStorage.setItem("contagem", c);
        } else {
            src = "../imagens/heart.png";
            c=c-1;
            localStorage.setItem("contagem", c);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var img = document.getElementById("favoritar10");
        if (localStorage.getItem('favoritado10') === 'true') {
            img.src = "../imagens/heart2.png";
        } else {
            img.src = "../imagens/heart.png";
        }
    });
    function mudarImagem11() {
        document.getElementById("favoritar11").src = "../imagens/heart2.png";
    }

    function resetarImagem11() {
        if (!clicado11){
            document.getElementById("favoritar11").src = "../imagens/heart.png";
        }
    }
    var clicado11 = localStorage.getItem('favoritado11') === 'true';

    function favoritar11() {
        clicado11 = !clicado11;
        var img = document.getElementById("favoritar11");
        img.src = clicado11 ? "../imagens/heart2.png" : "../imagens/heart.png";
        localStorage.setItem('favoritado11', clicado11);
        var paiDaImagem11 = document.getElementById('favoritar11').parentNode;
        localStorage.setItem('clone11', paiDaImagem11.outerHTML);
        if (localStorage.getItem('favoritado11'==='true')) {
            src = "../imagens/heart2.png";
            c=c+1;
            localStorage.setItem("contagem", c);
        } else {
            src = "../imagens/heart.png";
            c=c-1;
            localStorage.setItem("contagem", c);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var img = document.getElementById("favoritar11");
        if (localStorage.getItem('favoritado11') === 'true') {
            img.src = "../imagens/heart2.png";
        } else {
            img.src = "../imagens/heart.png";
        }
    });

    function mudarImagemRelacionados() {
        document.getElementById("favoritarRelacionados1").src = "../imagens/heart2.png";
    }

    function resetarImagemRelacionados() {
        if (!clicadoRelacionados){
            document.getElementById("favoritarRelacionados1").src = "../imagens/heart.png";
        }
    }
    var clicadoRelacionados = localStorage.getItem('favoritadoRelacionados1') === 'true';
    function favoritarRelacionados() {
        clicadoRelacionados = !clicadoRelacionados;
        var img = document.getElementById("favoritarRelacionados1");
        img.src = clicadoRelacionados ? "../imagens/heart2.png" : "../imagens/heart.png";
        localStorage.setItem('favoritadoRelacionados1', clicadoRelacionados);
        var paiDaImagemRelacionados1 = document.getElementById('favoritarRelacionados1').parentNode;
        localStorage.setItem('cloneRelacionados1', paiDaImagemRelacionados1.outerHTML);
        if (localStorage.getItem('favoritadoRelacionados1'==='true')) {
            src = "../imagens/heart2.png";
            c=c+1;
            localStorage.setItem("contagem", c);
        } else {
            src = "../imagens/heart.png";
            c=c-1;
            localStorage.setItem("contagem", c);
        }
    }
    

    document.addEventListener('DOMContentLoaded', function() {
        var img = document.getElementById("favoritarRelacionados1");
        if (localStorage.getItem('favoritadoRelacionados1') === 'true') {
            img.src = "../imagens/heart2.png";
        } else {
            img.src = "../imagens/heart.png";
        }
    });
    function mudarImagemRelacionados2() {
        document.getElementById("favoritarRelacionados2").src = "../imagens/heart2.png";
    }

    function resetarImagemRelacionados2() {
        if (!clicadoRelacionados2){
            document.getElementById("favoritarRelacionados2").src = "../imagens/heart.png";
        }
    }
    var clicadoRelacionados2 = localStorage.getItem('favoritadoRelacionados2') === 'true';
    function favoritarRelacionados2() {
        clicadoRelacionados2 = !clicadoRelacionados2;
        var img = document.getElementById("favoritarRelacionados2");
        img.src = clicadoRelacionados2 ? "../imagens/heart2.png" : "../imagens/heart.png";
        localStorage.setItem('favoritadoRelacionados2', clicadoRelacionados2);
        var paiDaImagemRelacionados2 = document.getElementById('favoritarRelacionados2').parentNode;
        localStorage.setItem('cloneRelacionados2', paiDaImagemRelacionados2.outerHTML);
        if (localStorage.getItem('favoritadoRelacionados2'==='true')) {
            src = "../imagens/heart2.png";
            c=c+1;
            localStorage.setItem("contagem", c);
        } else {
            src = "../imagens/heart.png";
            c=c-1;
            localStorage.setItem("contagem", c);
        }
    }
    

    document.addEventListener('DOMContentLoaded', function() {
        var img = document.getElementById("favoritarRelacionados2");
        if (localStorage.getItem('favoritadoRelacionados2') === 'true') {
            img.src = "../imagens/heart2.png";
        } else {
            img.src = "../imagens/heart.png";
        }
    });
    function mudarImagemRelacionados3() {
        document.getElementById("favoritarRelacionados3").src = "../imagens/heart2.png";
    }

    function resetarImagemRelacionados3() {
        if (!clicadoRelacionados3){
            document.getElementById("favoritarRelacionados3").src = "../imagens/heart.png";
        }
    }
    var clicadoRelacionados3 = localStorage.getItem('favoritadoRelacionados3') === 'true';
    function favoritarRelacionados3() {
        clicadoRelacionados3 = !clicadoRelacionados3;
        var img = document.getElementById("favoritarRelacionados3");
        img.src = clicadoRelacionados3 ? "../imagens/heart2.png" : "../imagens/heart.png";
        localStorage.setItem('favoritadoRelacionados3', clicadoRelacionados3);
        var paiDaImagemRelacionados3 = document.getElementById('favoritarRelacionados3').parentNode;
        localStorage.setItem('cloneRelacionados3', paiDaImagemRelacionados3.outerHTML);
        if (localStorage.getItem('favoritadoRelacionados3'==='true')) {
            src = "heart2.png";
            c=c+1;
            localStorage.setItem("contagem", c);
        } else {
            src = "heart.png";
            c=c-1;
            localStorage.setItem("contagem", c);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var img = document.getElementById("favoritarRelacionados3");
        if (localStorage.getItem('favoritadoRelacionados3') === 'true') {
            img.src = "../imagens/heart2.png";
        } else {
            img.src = "../imagens/heart.png";
        }
    });
    function mudarImagemRelacionados4() {
        document.getElementById("favoritarRelacionados4").src = "../imagens/heart2.png";
    }

    function resetarImagemRelacionados4() {
        if (!clicadoRelacionados4){
            document.getElementById("favoritarRelacionados4").src = "../imagens/heart.png";
        }
    }
    var clicadoRelacionados4 = localStorage.getItem('favoritadoRelacionados4') === 'true';
    function favoritarRelacionados4() {
        clicadoRelacionados4 = !clicadoRelacionados4;
        var img = document.getElementById("favoritarRelacionados4");
        img.src = clicadoRelacionados4 ? "../imagens/heart2.png" : "../imagens/heart.png";
        localStorage.setItem('favoritadoRelacionados4', clicadoRelacionados4);
        var paiDaImagemRelacionados4 = document.getElementById('favoritarRelacionados4').parentNode;
        localStorage.setItem('cloneRelacionados4', paiDaImagemRelacionados4.outerHTML);
        if (localStorage.getItem('favoritadoRelacionados4'==='true')) {
            src = "../imagens/heart2.png";
            c=c+1;
            localStorage.setItem("contagem", c);
        } else {
            src = "../imagens/heart.png";
            c=c-1;
            localStorage.setItem("contagem", c);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var img = document.getElementById("favoritarRelacionados4");
        if (localStorage.getItem('favoritadoRelacionados4') === 'true') {
            img.src = "../imagens/heart2.png";
        } else {
            img.src = "../imagens/heart.png";
        }
    });