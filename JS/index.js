if (typeof localStorage.getItem("lista") == undefined || localStorage.getItem("lista")==null) {
    lista=["NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN" ];
    localStorage.setItem("lista", lista);
}
    lista=localStorage.getItem("lista").split(',');
    console.log(localStorage.getItem("lista").split(","));
    primeiro=document.getElementById("produto1");
    localStorage.setItem("clone1", primeiro.innerHTML);
    var c;
    for (let numero=0; numero<lista.length; numero++){
        lista[numero]=parseInt(lista[numero]);
    }
    localStorage.setItem("posicoesString", JSON.stringify([]));
    localStorage.setItem("itens", JSON.stringify([]));
    if(localStorage.getItem("contagem")==null){
        c=-1;
    }
    else{
        c=parseInt(localStorage.getItem("contagem"));
    };

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
    var clicado=false;
    var clicado2=false;
    var clicado3=false;
    var clicado4=false;
    var clicado5=false;
    var clicado6=false;
    var clicado7=false;
    var clicado8=false;
    var clicado9=false;
    var clicado10=false;
    var clicado11=false;
    
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
        clicado= !clicado;
        var img = document.getElementById("favoritar1");
        img.src = clicado ? "../imagens/heart2.png" : "../imagens/heart.png";
        localStorage.setItem('favoritado1', clicado);
        var paiDaImagem = document.getElementById('favoritar1').parentNode;
        localStorage.setItem('clone1', paiDaImagem.outerHTML);
        if (clicado==true){
            c=c+1;
            localStorage.setItem('posicao1', c);
            lista[0]=c;
            localStorage.setItem("lista", lista);
        } else{
            c=c-1;
            console.log(parseInt(localStorage.getItem("posicao1")));
            for (let m = 0; m < lista.length; m++) {
                // Se o número atual for maior que o número na posição 1
                if (lista[m] >= parseInt(localStorage.getItem("posicao1"))) {
                    // Diminui o número atual em 1
                    lista[m]--;
                }
            }
            lista[0]="NaN";
            localStorage.setItem("lista", lista);
            localStorage.setItem("posicao1", "NaN");
        }
        console.log(lista);
        localStorage.setItem("contagem", c);
        console.log(c);
    }

    document.addEventListener('DOMContentLoaded', function() {
        c = parseInt(localStorage.getItem("contagem"));
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
        console.log()
        clicado2= !clicado2;
        var img = document.getElementById("favoritar2");
        img.src = clicado2 ? "../imagens/heart2.png" : "../imagens/heart.png";
        localStorage.setItem('favoritado2', clicado2);
        var paiDaImagem2 = document.getElementById('favoritar2').parentNode;
        localStorage.setItem('clone2', paiDaImagem2.outerHTML);
        if (clicado2==true){
            c=c+1;
            localStorage.setItem('posicao2', c);
            lista[1]=c;
            console.log(lista);
            localStorage.setItem("lista", lista);
        } else{
            c=c-1;
            for (let m = 0; m < lista.length; m++) {
                // Se o número atual for maior que o número na posição 1
                if (lista[m] >= parseInt(localStorage.getItem("posicao2"))) {
                    // Diminui o número atual em 1
                    lista[m]--;
                }
            }
            lista[1]="NaN";
            localStorage.setItem("lista", lista);
            localStorage.setItem("posicao2", "NaN");
        }
        console.log(lista);
        console.log(c);
        localStorage.setItem("contagem", c);
    }

    document.addEventListener('DOMContentLoaded', function() {
        c = parseInt(localStorage.getItem("contagem"));
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
        if (clicado3==true){
            c=c+1;
            localStorage.setItem('posicao3', c);
            lista[2]=c;
            localStorage.setItem("lista", lista);
        } else{
            c=c-1;
            console.log(lista);
            for (let m = 0; m < lista.length; m++) {
                // Se o número atual for maior que o número na posição 1
                if (lista[m] >= parseInt(localStorage.getItem("posicao3"))) {
                    // Diminui o número atual em 1
                    lista[m]--;
                }
            }
            lista[2]="NaN";
            localStorage.setItem("lista", lista);
            localStorage.setItem("posicao3", "NaN");
        }
        console.log(lista);
        console.log(c);
        localStorage.setItem("contagem", c);
    }

    document.addEventListener('DOMContentLoaded', function() {
        c = parseInt(localStorage.getItem("contagem"));
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
        if (clicado4==true){
            c=c+1;
            localStorage.setItem("posicao4", c);
            lista[3]=c;
            localStorage.setItem("lista", lista);
        } else{
            c=c-1;
            for (let m = 0; m < lista.length; m++) {
                // Se o número atual for maior que o número na posição 1
                if (lista[m] >= parseInt(localStorage.getItem("posicao4"))) {
                    // Diminui o número atual em 1
                    lista[m]--;
                }
            }
            lista[3]="NaN";
            localStorage.setItem("lista", lista);
            localStorage.setItem("posicao4", "NaN");
        }
        localStorage.setItem("contagem", c);
        console.log(c);
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
        if (clicado5==true){
            c=c+1;
            localStorage.setItem('posicao5', c);
            lista[4]=c;
            localStorage.setItem("lista", lista);
        } else{
            c=c-1;
            for (let m = 0; m < lista.length; m++) {
                // Se o número atual for maior que o número na posição 1
                if (lista[m] >= parseInt(localStorage.getItem("posicao5"))) {
                    // Diminui o número atual em 1
                    lista[m]--;
                }
            }
            lista[4]="NaN";
            localStorage.setItem("lista", lista);
            localStorage.setItem("posicao5", "NaN");
        }
        localStorage.setItem("contagem", c);
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
        if (clicado6==true){
            c=c+1;
            localStorage.setItem('posicao6', c);
            lista[5]=c;
            localStorage.setItem("lista", lista);
        } else{
            c=c-1;
            for (let m = 0; m < lista.length; m++) {
                // Se o número atual for maior que o número na posição 1
                if (lista[m] >= parseInt(localStorage.getItem("posicao6"))) {
                    // Diminui o número atual em 1
                    lista[m]--;
                }
            }
            lista[5]="NaN";
            localStorage.setItem("lista", lista);
            localStorage.setItem("posicao6", "NaN");
        }
        localStorage.setItem("contagem", c);
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
        if (clicado7==true){
            c=c+1;
            localStorage.setItem('posicao7', c);
            lista[6]=c;
            localStorage.setItem("lista", lista);
        } else{
            c=c-1;
            for (let m = 0; m < lista.length; m++) {
                // Se o número atual for maior que o número na posição 1
                if (lista[m] >= parseInt(localStorage.getItem("posicao7"))) {
                    // Diminui o número atual em 1
                    lista[m]--;
                }
            }
            lista[6]="NaN"
            localStorage.setItem("lista", lista);
            localStorage.setItem("posicao7", "NaN");
        }
        console.log(lista);
        localStorage.setItem("contagem", c);
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
    var clicado8 = localStorage.getItem('favoritado8') === 'true';
    function favoritar8() {
        clicado8 = !clicado8;
        var img = document.getElementById("favoritar8");
        img.src = clicado8 ? "../imagens/heart2.png" : "../imagens/heart.png";
        localStorage.setItem('favoritado8', clicado8);
        var paiDaImagem8 = document.getElementById('favoritar8').parentNode;
        localStorage.setItem('clone8', paiDaImagem8.outerHTML);
        if (clicado8==true){
            c=c+1;
            localStorage.setItem('posicao8', c);
            lista[7]=c;
            localStorage.setItem("lista", lista);
        } else{
            c=c-1;
            for (let m = 0; m < lista.length; m++) {
                // Se o número atual for maior que o número na posição 1
                if (lista[m] >= parseInt(localStorage.getItem("posicao8"))) {
                    // Diminui o número atual em 1
                    lista[m]--;
                }
            }
            lista[7]="NaN";
            localStorage.setItem("lista", lista);
            localStorage.setItem("posicao8", "NaN");
        }
        console.log(lista);
        localStorage.setItem("contagem", c);
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
        if (clicado9==true){
            c=c+1;
            localStorage.setItem('posicao9', c);
            lista[8]=c;
            localStorage.setItem("lista", lista);
        } else{
            c=c-1;
            for (let m = 0; m < lista.length; m++) {
                // Se o número atual for maior que o número na posição 1
                if (lista[m] >= parseInt(localStorage.getItem("posicao9"))) {
                    // Diminui o número atual em 1
                    lista[m]--;
                }
            }
            lista[8]="NaN";
            localStorage.setItem("lista", lista);
            localStorage.setItem("posicao9", "NaN");
        }
        console.log(lista);
        localStorage.setItem("contagem", c);
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
        if (clicado10==true){
            c=c+1;
            localStorage.setItem('posicao10', c);
            lista[9]=c;
            localStorage.setItem("lista", lista);
        } else{
            c=c-1;
            for (let m = 0; m < lista.length; m++) {
                // Se o número atual for maior que o número na posição 1
                if (lista[m] >= parseInt(localStorage.getItem("posicao10"))) {
                    // Diminui o número atual em 1
                    lista[m]--;
                }
            }
            lista[9]="NaN";
            localStorage.setItem("lista", lista);
            localStorage.setItem("posicao10", "NaN");
        }
        localStorage.setItem("contagem", c);
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
        if (clicado11==true){
            c=c+1;
            localStorage.setItem('posicao11', c);
            lista[10]=c;
            localStorage.setItem("lista", lista);
        } else{
            c=c-1;
            for (let m = 0; m < lista.length; m++) {
                // Se o número atual for maior que o número na posição 1
                if (lista[m] >= parseInt(localStorage.getItem("posicao11"))) {
                    // Diminui o número atual em 1
                    lista[m]--;
                }
            }
            lista[10]="NaN";
            localStorage.setItem("lista", lista);
            localStorage.setItem("posicao11", "NaN");
        }
        localStorage.setItem("contagem", c);
    }

    document.addEventListener('DOMContentLoaded', function() {
        var img = document.getElementById("favoritar11");
        if (localStorage.getItem('favoritado11') === 'true') {
            img.src = "../imagens/heart2.png";
        } else {
            img.src = "../imagens/heart.png";
        }
    });
    localStorage.setItem("contagem", c);

    function verMenu(){
        var categorias = document.getElementById("categorias");
        if (categorias.style.display === "none") {
            categorias.style.display = "block";
        } else {
            categorias.style.display = "none";
        }
    }
    document.addEventListener('DOMContentLoaded', function () {
        const slides = document.querySelector('.carousel-slide');
        const images = document.querySelectorAll('.carousel-image');
        const dotsContainer = document.querySelector('.carousel-navigation');

        let index = 0;

        function updateSlide() {
            slides.style.transform = `translateX(${-index * 100}%)`;
            updateActiveDot();
        }

        function updateActiveDot() {
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        }

        function goToSlide(idx) {
            index = idx;
            updateSlide();
        }
        function nextSlide() {
            index = (index + 1) % images.length; 
            updateSlide();
        }
        setInterval(nextSlide, 10000); 

        function createDots() {
            images.forEach((_, idx) => {
                const dot = document.createElement('div');
                dot.classList.add('carousel-dot');
                if (idx === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(idx));
                dotsContainer.appendChild(dot);
            });
        }

        createDots();

        const dots = document.querySelectorAll('.carousel-dot');

        updateSlide();

        document.querySelector('.prev').addEventListener('click', function () {
            index = (index - 1 + images.length) % images.length;
            updateSlide();
        });

        document.querySelector('.next').addEventListener('click', function () {
            index = (index + 1) % images.length;
            updateSlide();
        });
    });