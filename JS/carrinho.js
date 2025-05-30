let array=[];
c=parseInt(localStorage.getItem("contagem"));
lista=localStorage.getItem("lista").split(',');
if(localStorage.getItem("favoritado1")=="false"){
    localStorage.setItem("posicao1", "");
}
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
    var img = document.getElementById("favoritar1");
    if (localStorage.getItem('favoritado1') === 'true') {
        img.src = "../imagens/heart2.png";
    } else {
        img.src = "../imagens/heart.png";
    }
});
container=document.getElementById("container");
const explicacao=document.getElementById("explicacao");
const explicacao2=document.getElementById("explicacao2");
if(localStorage.getItem("adicionado")=="true"){
    container.innerHTML=localStorage.getItem("clone1");
    produto=document.getElementById("primeiro");
    quantidade=document.getElementById("quantidade");
    quantidade.innerHTML='<p style="font-weight: bold">Quantidade: </p> <select name="escolherUnidades" id="escolherUnidades"><option value="0">0(Remover)</option><option value="1" selected>1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>';
}
if (container.innerHTML.trim() === "") {
    explicacao.style.display = "none";
    explicacao2.style.display = "block";
} else {
    explicacao.style.display = "block";
    explicacao2.style.display = "none";
}
console.log(typeof container.innerHTML);
var escolherUnidades = document.getElementById("escolherUnidades");
var valorAPagar = document.getElementById("valorAPagar");
var valorSelecionado = parseFloat(escolherUnidades.options[escolherUnidades.selectedIndex].value);
var valor = 890.1 * valorSelecionado;
var valorString = String(valor).replace(/\./g, ",")+"0";
valorAPagar.innerHTML = `<p id="valorTotal">O valor total das compras: R$ ${valorString}.</p>`;
valorAPagar.innerHTML=valorAPagar.innerHTML+'<input type="button" value="Comprar" id="comprar">';
escolherUnidades.addEventListener("change", function() {
    if (this.value == "0") {
        localStorage.setItem("adicionado", false);
        console.log(localStorage.getItem("adicionado"));
    };
    if(this.value!="0"){
        localStorage.setItem("adicionado", true);
        console.log(localStorage.getItem("adicionado"));
    }
    var valorAPagar = document.getElementById("valorAPagar");
    var valorSelecionado = parseFloat(escolherUnidades.options[escolherUnidades.selectedIndex].value);
    var valor = 890.1 * valorSelecionado;
    var valorString = String(valor).replace(/\./g, ",")+"0";
    valorAPagar.innerHTML = `<p id="valorTotal">O valor total das compras: R$ ${valorString}.</p>`;
    valorAPagar.innerHTML=valorAPagar.innerHTML+'<input type="button" value="Comprar" id="comprar">';
});