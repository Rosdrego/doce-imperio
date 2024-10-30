document.addEventListener('DOMContentLoaded', onInit);
let cadastroprodutos = [];

function onInit() {
    atualizarlista()
}

function produto(name, preco, quantidade, peso, img_url ){
    this.name = name;
    this.preco = preco;
    this.quantidade = quantidade;
    this.peso = peso;
    this.img_url = img_url;
}
function criarproduto(name, preco, quantidade, peso, img_url){
    return produto = new Produto(name. preco, quantidade, peso, img_url);

}

function cadastro(){
    let name = document.getElementById('name').value;
    let preco = document.getElementById('preco').value;
    let quantidade = document.getElementById('quantidade').value;
    let peso = document.getElementById('peso').value;
    let img_url = document.getElementById('img_url').value;

    if(!name || !preco || !quantidade || !peso || !img_url){
        alert ("Por favor, corrigir corretamente")
        return;
    }


   let produto = criarproduto(name, preco, quantidade, peso, img_url);
   

}
