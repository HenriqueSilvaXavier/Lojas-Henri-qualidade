var c;
if (typeof localStorage.getItem("lista") == undefined || localStorage.getItem("lista")==null) {
    lista=["NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN" ];
    localStorage.setItem("lista", lista);
}
if(localStorage.getItem("contagem")==null){
    c=-1;
}
else{
    c=parseInt(localStorage.getItem("contagem"));
};
console.log(localStorage.getItem("lista"));
lista=localStorage.getItem("lista").split(',');
var clicadoRelacionados=false;
var clicadoRelacionados2=false;
var clicadoRelacionados3=false;
var clicadoRelacionados4=false;
var clicadoRelacionados5=false;
var clicadoRelacionados6=false;

function verMais(){
    var primeiraLinha = document.querySelectorAll(".primeiraLinha");
    var segundaLinha = document.querySelectorAll(".segundaLinha");
    
    primeiraLinha.forEach(function(item) {
        item.style.display = "none"; // Oculta categorias da primeira linha
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
    var paiDaImagemRelacionados1= document.getElementById('favoritarRelacionados1').parentNode;
    localStorage.setItem('cloneRelacionados1', paiDaImagemRelacionados1.outerHTML);
    if (clicadoRelacionados==true){
        c=c+1;
        localStorage.setItem('posicaoRelacionados1', c);
        lista[11]=c;
        localStorage.setItem("lista", lista);
    } else{
        c=c-1;
        localStorage.setItem("posicaoRelacionados1", "");
        for (let m = 0; m < lista.length; m++) {
            // Se o número atual for maior que o número na posição 1
            if (lista[m] > posicaoRelacionados1) {
                // Diminui o número atual em 1
                lista[m]--;
            }
        }
        console.log(lista);
        lista[11]="NaN";
        localStorage.setItem("lista", lista);
    }
    localStorage.setItem("contagem", c);
}

document.addEventListener('DOMContentLoaded', function() {
    var img= document.getElementById("favoritarRelacionados1");
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
    var paiDaImagemRelacionados2= document.getElementById('favoritarRelacionados2').parentNode;
    localStorage.setItem('cloneRelacionados2', paiDaImagemRelacionados2.outerHTML);
    if (clicadoRelacionados2==true){
        c=c+1;
        localStorage.setItem('posicaoRelacionados2', c);
        lista[12]=c;
        localStorage.setItem("lista", lista);
    } else{
        c=c-1;
        localStorage.setItem("posicaoRelacionados2", "");
        for (let m = 0; m < lista.length; m++) {
            // Se o número atual for maior que o número na posição 1
            if (lista[m] > posicaoRelacionados2) {
                // Diminui o número atual em 1
                lista[m]--;
            }
        }
        console.log(lista);
        lista[12]="NaN";
        localStorage.setItem("lista", lista);
    }
    localStorage.setItem("contagem", c)
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
    var paiDaImagemRelacionados3= document.getElementById('favoritarRelacionados3').parentNode;
    localStorage.setItem('cloneRelacionados3', paiDaImagemRelacionados3.outerHTML);
    if (clicadoRelacionados3==true){
        c=c+1;
        localStorage.setItem('posicaoRelacionados3', c);
        lista[13]=c;
        localStorage.setItem("lista", lista);
    } else{
        c=c-1;
        localStorage.setItem("posicaoRelacionados3", "")
        for (let m = 0; m < lista.length; m++) {
            // Se o número atual for maior que o número na posição 1
            if (lista[m] > posicaoRelacionados3) {
                // Diminui o número atual em 1
                lista[m]--;
            }
        }
        console.log(lista);
        lista[13]="NaN";
        localStorage.setItem("lista", lista);
    }
    localStorage.setItem("contagem", c)
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
    var paiDaImagemRelacionados4= document.getElementById('favoritarRelacionados4').parentNode;
    localStorage.setItem('cloneRelacionados4', paiDaImagemRelacionados4.outerHTML);
    if (clicadoRelacionados4==true){
        c=c+1;
        localStorage.setItem('posicaoRelacionados4', c);
        lista[14]=c;
        localStorage.setItem("lista", lista);
    } else{
        c=c-1;
        localStorage.setItem("posicaoRelacionados4", "");
        for (let m = 0; m < lista.length; m++) {
            // Se o número atual for maior que o número na posição 1
            if (lista[m] > posicaoRelacionados4) {
                // Diminui o número atual em 1
                lista[m]--;
            }
        }
        lista[14]="NaN";
        localStorage.setItem("lista", lista);
    }
    localStorage.setItem("contagem", c)
}

document.addEventListener('DOMContentLoaded', function() {
    var img = document.getElementById("favoritarRelacionados4");
    if (localStorage.getItem('favoritadoRelacionados4') === 'true') {
        img.src = "../imagens/heart2.png";
    } else {
        img.src = "../imagens/heart.png";
    }
});
function mudarImagem5() {
    document.getElementById("favoritar5").src = "heart2.png";
}

function resetarImagem5() {
    if (!clicado){
        document.getElementById("favoritar5").src = "heart.png";
    }
}
function favoritar5(){
    if (!clicado){
        clicado=true;
    }
    else{
        clicado=false;
    }
    document.getElementById("favoritar5").src = clicado ? "heart2.png" : "heart.png";
}
function mudarImagem6() {
    document.getElementById("favoritar6").src = "heart2.png";
}

function resetarImagem6() {
    if (!clicado){
        document.getElementById("favoritar6").src = "heart.png";
    }
}
function favoritar6(){
    if (!clicado){
        clicado=true;
    }
    else{
        clicado=false;
    }
    document.getElementById("favoritar6").src = clicado ? "heart2.png" : "heart.png";
}
function mudarImagem7() {
    document.getElementById("favoritar7").src = "heart2.png";
}

function resetarImagem7() {
    if (!clicado){
        document.getElementById("favoritar7").src = "heart.png";
    }
}
function favoritar7(){
    if (!clicado){
        clicado=true;
    }
    else{
        clicado=false;
    }
    document.getElementById("favoritar7").src = clicado ? "heart2.png" : "heart.png";
}
function mudarImagem8() {
    document.getElementById("favoritar8").src = "heart2.png";
}

function resetarImagem8() {
    if (!clicado){
        document.getElementById("favoritar8").src = "heart.png";
    }
}
function favoritar8(){
    if (!clicado){
        clicado=true;
    }
    else{
        clicado=false;
    }
    document.getElementById("favoritar8").src = clicado ? "heart2.png" : "heart.png";
}
function mudarImagem9() {
    document.getElementById("favoritar9").src = "heart2.png";
}

function resetarImagem9() {
    if (!clicado){
        document.getElementById("favoritar9").src = "heart.png";
    }
}
function favoritar9(){
    if (!clicado){
        clicado=true;
    }
    else{
        clicado=false;
    }
    document.getElementById("favoritar9").src = clicado ? "heart2.png" : "heart.png";
}
function mudarImagem10() {
    document.getElementById("favoritar10").src = "heart2.png";
}

function resetarImagem10() {
    if (!clicado){
        document.getElementById("favoritar10").src = "heart.png";
    }
}
function favoritar10(){
    if (!clicado){
        clicado=true;
    }
    else{
        clicado=false;
    }
    document.getElementById("favoritar10").src = clicado ? "heart2.png" : "heart.png";
}
function mudarImagem11() {
    document.getElementById("favoritar11").src = "heart2.png";
}

function resetarImagem11() {
    if (!clicado){
        document.getElementById("favoritar11").src = "heart.png";
    }
}
function favoritar11(){
    if (!clicado){
        clicado=true;
    }
    else{
        clicado=false;
    }
    document.getElementById("favoritar11").src = clicado ? "heart2.png" : "heart.png";
}

localStorage.setItem("contagem", c);

function verMenu(){
    var categorias = document.getElementById("categorias");
    if (categorias.style.display === "none") {
        categorias.style.display = "block";
    } else {
        categorias.style.display = "none";
    }
}
function trocarImagem(element) {
    var imagens = document.querySelectorAll('.foto');
    imagens.forEach(function(img) {
        img.classList.remove('selecionado');
    });
    element.classList.add('selecionado');

    var src = element.getAttribute('src');
    document.getElementById('computador1').setAttribute('src', src);
}
document.addEventListener('DOMContentLoaded', function() {
        var favoritarBotao = document.getElementById("favoritarBotao");
        var desfavoritarBotao = document.getElementById("desfavoritarBotao");
        var coracao2 = document.getElementById("coracao2");
        var coracao3 = document.getElementById("coracao3");
        var clicado = localStorage.getItem('favoritado1') === 'true';

        if (clicado) {
            favoritarBotao.style.display = "none";
            coracao2.style.display = "none";
            coracao3.style.display = "inline-block";
            desfavoritarBotao.style.display = "inline-block";
        } else {
            favoritarBotao.style.display = "inline-block";
            coracao2.style.display = "inline-block";
            coracao3.style.display = "none";
            desfavoritarBotao.style.display = "none";
        }
    });

    function favoritarFuncao() {
        var favoritarBotao = document.getElementById("favoritarBotao");
        var desfavoritarBotao = document.getElementById("desfavoritarBotao");
        var coracao2 = document.getElementById("coracao2");
        var coracao3 = document.getElementById("coracao3");
        var clicado = localStorage.getItem('favoritado1') === 'true';

        clicado = !clicado;
        localStorage.setItem('favoritado1', clicado);

        if (clicado) {
            favoritarBotao.style.display = "none";
            desfavoritarBotao.style.display = "inline-block";
            coracao2.style.display = "none";
            coracao3.style.display = "inline-block";
            c=c+1;
            localStorage.setItem("posicao1", c);
            localStorage.setItem("contagem", c);
            primeiro=localStorage.getItem("clone1");
        } else {
            favoritarBotao.style.display = "inline-block";
            desfavoritarBotao.style.display = "none";
            coracao2.style.display = "inline-block";
            coracao3.style.display = "none";
            c=c-1;
            localStorage.setItem("posicao1", ""); 
            localStorage.setItem("contagem", c);
        }
    }
primeiro=localStorage.getItem("clone1");
const overlay = document.getElementById('overlay');
const avaliar = document.getElementById('avaliar');
const escurecimento=document.getElementById('escurecimento');
avaliar.addEventListener('click', function() {
    overlay.style.display="block";
    escurecimento.style.display= "block";
    document.body.style.overflowY = 'hidden';
});

const stars = document.querySelectorAll('.star-rating label');
function nota(elemento) {
    let r=false;
    const numero = parseInt(elemento.id.match(/\d+/)[0]); // Extrai o número do ID
    for (let i = 1; i <= stars.length; i++) {
        const marcada = document.getElementById(`starLabel${i}`);
        const marcadaNumero = parseInt(marcada.id.match(/\d+/)[0]); // Extrai o número do ID
        if (numero >= marcadaNumero) {
            console.log(marcada);
            marcada.style.color = "#ffcc00";
        }
        if(numero<marcadaNumero){
            marcada.style.color="#ccc";
        }
    }
}
const enviar = document.getElementById('enviar');
const x=document.getElementById("simboloX");

enviar.addEventListener('click', function() {
    starLabel1=document.getElementById("starLabel1");
    var estiloComputado = window.getComputedStyle(starLabel1);
    var cor = estiloComputado.getPropertyValue('color');
    if(cor=="rgb(204, 204, 204)"){
        alert("Dê alguma nota clicando nas estrelas.");
        return;
    }
    else{
        for (let n=1; n<=5; n++){
            stars[n-1].style.color="#ccc";
        }
        document.getElementById("comentario").value = "";
        overlay.style.display="none";
        escurecimento.style.display="none";
        document.body.style.overflowY = 'auto';
        alert("Mensagem enviada com sucesso.")
    }
});
x.addEventListener('click', function() {
    for (let n=1; n<=5; n++){
        stars[n-1].style.color="#ccc";
    }
    document.getElementById("comentario").value = "";
    overlay.style.display="none";
    escurecimento.style.display="none";
    document.body.style.overflowY = 'auto';
});

const overlay2 = document.getElementById('overlay2');
const comprar = document.getElementById('comprar');
comprar.addEventListener('click', function() {
    localStorage.setItem("adicionado", true);
    overlay2.style.display="block";
    escurecimento.style.display= "block";
    document.body.style.overflowY = 'hidden';
});
const finalizar2=document.getElementById("finalizar2");
const proximo2=document.getElementById("proximo2");
const formas = document.querySelectorAll('#formasDePagamento label');
function escolherForma(forma){
    if(forma.id=="pix"){
        finalizar2.style.display="block";
        proximo2.style.display="none";
    }
    if(forma.id!="pix"){
        finalizar2.style.display="none";
        proximo2.style.display="block";
    }
    var elementosSelecionados = document.querySelectorAll('.formaSelecionada');
    elementosSelecionados.forEach(function(elemento) {
        elemento.classList.remove('formaSelecionada');
    })
    var precos = document.querySelectorAll('.precos');
    for (let s=0; s<precos.length; s++){
        precos[s].style.display="none";
    }
    simbolo=document.getElementById(forma.id);
    simbolo.classList.add('formaSelecionada');
    var capitalize=(forma.id).charAt(0).toUpperCase() + (forma.id).slice(1);
    var precosId="precos"+capitalize;
    (document.getElementById(precosId)).style.display="block";

}
const x2=document.getElementById("simboloX2");
x2.addEventListener('click', function() {
    if(document.getElementsByClassName("formaSelecionada").length > 0){
        preco=document.getElementsByClassName("formaSelecionada").item(0).id;
        var capitalize=preco.charAt(0).toUpperCase() + (preco).slice(1);
        var namePrecosId="precos"+capitalize;
        document.getElementById(namePrecosId).style.display="none";
    }

    var elementosSelecionados = document.querySelectorAll('.formaSelecionada');
    elementosSelecionados.forEach(function(elemento) {
        elemento.classList.remove('formaSelecionada');
    });
    document.getElementById("cpf").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("cidade").value="";
    document.getElementById("estado").value="";
    document.getElementById("pontoDeReferencia").value="";
    document.getElementById("padrao").checked = false;
    document.getElementById("expresso").checked = false;
    document.getElementById("emCasa").checked = false;
    document.getElementById("retiradaRapida").checked = false;
    document.getElementById("entrega").style.display= "none";
    document.getElementById("unidadeContainer").style.display= "none";
    document.getElementById("senha").value="";
    finalizar2.style.display="none";
    proximo2.style.display="block";
    overlay2.style.display="none";
    escurecimento.style.display="none";
    document.body.style.overflowY = 'auto';
});
const retiradaRapida=document.getElementById("retiradaRapida");
const emCasa=document.getElementById("emCasa");
const entrega=document.getElementById("entrega");
retiradaRapida.addEventListener('click', function() {
    if(retiradaRapida.checked){
        let entrega=document.getElementById("entrega");
        entrega.style.display="none";
        let unidadeContainer=document.getElementById("unidadeContainer");
        unidadeContainer.style.display="block";
    }
});
emCasa.addEventListener('click', function() {
    if(emCasa.checked){
        let entrega=document.getElementById("entrega");
        entrega.style.display="block";
        let unidadeContainer=document.getElementById("unidadeContainer");
        unidadeContainer.style.display="none";
    }
});
const proximo1=document.getElementById("proximo1");
const overlay3=document.getElementById("overlay3");
const anterior1=document.getElementById("anterior1");
cpfRegEx=/^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
proximo1.addEventListener('click', function() {
    if(cpf.value=="" || endereco.value=="" || !emCasa.checked && !retiradaRapida.checked || cidade=="" || estado=="" || pontoDeReferencia=="" || entrega.style.display=="block" && !padrao.checked && !expresso.checked){
        alert("Preencha os todos os campos.");
    }
    else{
        if(!cpfRegEx.test(cpf.value)){
            alert("Digite um CPF válido.");
        }
        else{
            overlay2.style.display="none";
            overlay3.style.display="block";
        }
    }
});
anterior1.addEventListener('click', function() {
    overlay2.style.display="block";
    overlay3.style.display="none";
});
const x3=document.getElementById("simboloX3");
x3.addEventListener('click', function() {
    if(document.getElementsByClassName("formaSelecionada").length > 0){
        preco=document.getElementsByClassName("formaSelecionada").item(0).id;
        var capitalize=preco.charAt(0).toUpperCase() + (preco).slice(1);
        var namePrecosId="precos"+capitalize;
        document.getElementById(namePrecosId).style.display="none";
    }

    var elementosSelecionados = document.querySelectorAll('.formaSelecionada');
    elementosSelecionados.forEach(function(elemento) {
        elemento.classList.remove('formaSelecionada');
    });
    document.getElementById("cpf").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("cidade").value="";
    document.getElementById("estado").value="";
    document.getElementById("pontoDeReferencia").value="";
    document.getElementById("padrao").checked = false;
    document.getElementById("expresso").checked = false;
    document.getElementById("emCasa").checked = false;
    document.getElementById("retiradaRapida").checked = false;
    document.getElementById("entrega").style.display= "none";
    document.getElementById("unidadeContainer").style.display= "none";
    document.getElementById("senha").value="";
    finalizar2.style.display="none";
    proximo2.style.display="block";
    overlay3.style.display="none";
    escurecimento.style.display="none";
    document.body.style.overflowY = 'auto';
});
const x4=document.getElementById("simboloX4");
x4.addEventListener('click', function() {
    if(document.getElementsByClassName("formaSelecionada").length > 0){
        preco=document.getElementsByClassName("formaSelecionada").item(0).id;
        var capitalize=preco.charAt(0).toUpperCase() + (preco).slice(1);
        var namePrecosId="precos"+capitalize;
        document.getElementById(namePrecosId).style.display="none";
    }

    var elementosSelecionados = document.querySelectorAll('.formaSelecionada');
    elementosSelecionados.forEach(function(elemento) {
        elemento.classList.remove('formaSelecionada');
    });
    document.getElementById("cpf").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("cidade").value="";
    document.getElementById("estado").value="";
    document.getElementById("pontoDeReferencia").value="";
    document.getElementById("padrao").checked = false;
    document.getElementById("expresso").checked = false;
    document.getElementById("emCasa").checked = false;
    document.getElementById("retiradaRapida").checked = false;
    document.getElementById("entrega").style.display= "none";
    document.getElementById("unidadeContainer").style.display= "none";
    document.getElementById("senha").value="";
    finalizar2.style.display="none";
    proximo2.style.display="block";
    overlay4.style.display="none";
    escurecimento.style.display="none";
    document.body.style.overflowY = 'auto';
});
const overlay4=document.getElementById("overlay4");
const anterior2=document.getElementById("anterior2");
function proximaAba(){
    if(document.getElementsByClassName("formaSelecionada").length == 0){
        alert("Selecione alguma forma de pagamento.");
    }
    else{
        overlay3.style.display="none";
        overlay4.style.display="block";
    }
};
copy=document.getElementById("copy");
chave=document.getElementById("chave");
copy.addEventListener('click', function() {
    navigator.clipboard.writeText(chave.textContent);
    alert('Chave copiada para a área de transferência!');
});
function voltar2(){
    overlay3.style.display="block";
    overlay4.style.display="none";
}
function finalizar(){
    if(document.getElementsByClassName("formaSelecionada").length > 0){
        preco=document.getElementsByClassName("formaSelecionada").item(0).id;
        var capitalize=preco.charAt(0).toUpperCase() + (preco).slice(1);
        var namePrecosId="precos"+capitalize;
        document.getElementById(namePrecosId).style.display="none";
    }

    var elementosSelecionados = document.querySelectorAll('.formaSelecionada');
    elementosSelecionados.forEach(function(elemento) {
        elemento.classList.remove('formaSelecionada');
    });
    cpf=document.getElementById("cpf");
    endereco=document.getElementById("endereco");
    elementoSelecionado=document.querySelector(".formaSelecionada");
    if(document.getElementById("senha").value.length<4 && overlay4.style.display=="block"){
        alert("A sua senha contém no mínimo 4 caracteres.");
    }
    else{
        document.getElementById("cpf").value = "";
        document.getElementById("endereco").value = "";
        document.getElementById("cidade").value="";
        document.getElementById("estado").value="";
        document.getElementById("pontoDeReferencia").value="";
        document.getElementById("padrao").checked = false;
        document.getElementById("expresso").checked = false;
        document.getElementById("emCasa").checked = false;
        document.getElementById("retiradaRapida").checked = false;
        document.getElementById("entrega").style.display= "none";
        document.getElementById("unidadeContainer").style.display= "none";
        document.getElementById("senha").value="";
        finalizar2.style.display="none";
        proximo2.style.display="block";
        overlay3.style.display="none";
        overlay4.style.display="none";
        escurecimento.style.display="none";
        document.body.style.overflowY = 'auto';
        alert("Compra feita com sucesso.");
    }
};
const retirada=document.getElementById("retirada");
overlay5=document.getElementById("overlay5");
retirada.addEventListener('click', function() {
    overlay5.style.display="block";
    escurecimento.style.display= "block";
    document.body.style.overflowY = 'hidden';
});
const seuCep = document.getElementById("cep");
const pontos = document.getElementById("pontos");
const lupa = document.getElementById("lupa-branca");
const pontosConteudo = document.getElementById("pontosConteudo");

lupa.addEventListener("click", async () => {
    function calcularDistancia(lat1, lon1, lat2, lon2) {
        const R = 6371; // Raio da Terra em km
        const dLat = (lat2 - lat1) * Math.PI / 180;  // Diferença de latitude em radianos
        const dLon = (lon2 - lon1) * Math.PI / 180;  // Diferença de longitude em radianos
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distancia = R * c; // Distância em km
        return distancia;
    }

    async function obterCoordenadasCEP(cep) {
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&postalcode=${cep}`);
            const data = await response.json();
            if (data.length > 0) {
                const { lat, lon } = data[0];
                return { latitude: parseFloat(lat), longitude: parseFloat(lon) };
            } else {
                throw new Error('CEP não encontrado.');
            }
        } catch (error) {
            console.error('Erro ao obter coordenadas do CEP:', error);
            return null;
        }
    }

    const cepsFornecidos = ['50050-330', '51240-062', '53030-260'];
    const cepUsuario = seuCep.value;

    async function calcularDistancias() {
        const coordenadasUsuario = await obterCoordenadasCEP(cepUsuario);
        if (coordenadasUsuario) {
            const distancias = await Promise.all(cepsFornecidos.map(async (cep) => {
                const coordenadasCEP = await obterCoordenadasCEP(cep);
                if (coordenadasCEP) {
                    return calcularDistancia(coordenadasUsuario.latitude, coordenadasUsuario.longitude, coordenadasCEP.latitude, coordenadasCEP.longitude);
                } else {
                    console.log(`Não foi possível obter as coordenadas para o CEP ${cep}.`);
                    return Infinity; // Colocar uma distância infinita para indicar falha na obtenção das coordenadas
                }
            }));

            const sortedDistancias = [...distancias].sort((a, b) => a - b);
            const unidades = [
                { cep: '50050-330', endereco: 'R. Tabira, 252 - Boa Vista, Recife - PE' },
                { cep: '51240-062', endereco: 'R. Francisco Beltrão, 46 - COHAB, Recife - PE' },
                { cep: '53030-260', endereco: 'Av. Carlos de Lima Cavalcante, 515 - Bultrins, Olinda - PE' }
            ];

            pontos.innerHTML = "<h3>Pontos de retirada: </h3>";
            sortedDistancias.forEach((distancia, index) => {
                const unidade = unidades.find(unit => unit.cep === cepsFornecidos[distancias.indexOf(sortedDistancias[index])]);
                if (unidade) {
                    pontos.innerHTML += `<div class="pontosClasse" id="ponto${index + 1}">
                                            <p>${unidade.endereco}</p>
                                            <div id="inline${index + 2}">
                                                <p>CEP: ${unidade.cep}</p>
                                                <p id="afastar${index + 1}" class="afastar">À ${distancia.toFixed(2)} km</p>
                                            </div>
                                        </div>`;
                }
            });
        } else {
            console.log('Não foi possível obter as coordenadas para o CEP digitado.');
        }
    }

    calcularDistancias();
    pontos.style.display = "block";
});


x5=document.getElementById("simboloX5");
x5.addEventListener('click', function() {
    const pontos=document.getElementById("pontos");
    pontos.style.display="none";
    document.getElementById("cep").value="";
    overlay5.style.display="none";
    escurecimento.style.display= "none";
    document.body.style.overflowY = 'auto';
});
