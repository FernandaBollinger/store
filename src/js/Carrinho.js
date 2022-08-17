import { DataBase } from "./DataBase.js";
import { Vitrine } from "./Vitrine.js";

export class Carrinho {
    static Compras = []


    static CriandoCarrinho(array) {

        let cards = document.querySelector(".carrinho__ul-card");
        cards.innerHTML=""

        if(Carrinho.Compras.length < 1){
            let mensagemCarrinhoVazio = document.createElement("h2"); 
            mensagemCarrinhoVazio.classList.add("mensagemCarrinhoVazio")

            mensagemCarrinhoVazio.innerText = `Carrinho vazio.`

            cards.append(mensagemCarrinhoVazio)
        }

        array.forEach((e) => {
            
            let {id, nome, img, preco, i} = e

            let list = document.createElement("li");
            list.classList.add("carrinho__ul-li")
            let divImg = document.createElement("div");
            let imagem = document.createElement("img");
            imagem.classList.add("carrinho__ul-img")
            let divNameSpan = document.createElement("div");
            divNameSpan.classList.add("carrinho__divNameSpan");
            let name = document.createElement("h2");
            let price = document.createElement("span");
            price.classList.add("carrinho__ul-price")
            let divButton = document.createElement("div");
            divButton.classList.add("carrinho__ul-divButton")
            let btnRemove = document.createElement("button")

            btnRemove.addEventListener("click", () => {Carrinho.RemoverProduto(i)})
            console.log(btnRemove)

            imagem.alt = `${nome}`
            imagem.src = `${img}`
            name.innerText = `${nome}`
            price.innerText = `R$${preco.toFixed(2)}`.replace(".",",")
            btnRemove.id = id
            btnRemove.innerText = `X`

        divButton.append(btnRemove);
        divNameSpan.append(name, price)
        divImg.append(imagem,divNameSpan);
        list.append(divImg, divButton);
        cards.appendChild(list)
        })
        
            return array
    }

    static AdicionarNoCarrinho(id){

        let adicionandoNaVitrineDoCarrinho = DataBase.Produtos.find(e => e.id === id);

        Carrinho.Compras.push(adicionandoNaVitrineDoCarrinho);    

        
            Carrinho.CriandoCarrinho(Carrinho.Compras)
            Carrinho.Total(Carrinho.Compras)
            Carrinho.InfoCarrinho()
        }

    static Total(array){
       let priceTotal = array.reduce((acc, elemAtual) => (Number(elemAtual.preco) + 
        acc), 0);

        return priceTotal
    }

    static InfoCarrinho(){
        let tagDiv = document.querySelector(".carrinho__div-infos");
       
        tagDiv.innerHTML = ""

        let somaDosProdutos = Carrinho.Total(Carrinho.Compras);
        
        let quantidade = document.createElement("h4");
        let numero = document.createElement("p");
        let total = document.createElement("h3");
        let precoTotal = document.createElement("span");
           
        quantidade.innerText=`Quantidade:`
        numero.innerText = Carrinho.Compras.length
        total.innerText = `Total: `
        precoTotal.innerText = `R$${somaDosProdutos.toFixed(2)}`.replace(".",",")

        quantidade.appendChild(numero)
        total.appendChild(precoTotal);
        tagDiv.append(quantidade, total)

        return tagDiv
    }

    static RemoverProduto(i){
        let cards = document.querySelector(".carrinho__ul-card");
        
        cards.innerHTML =""

        Carrinho.Compras.splice(i, 1)


        Carrinho.InfoCarrinho()
        Carrinho.CriandoCarrinho(Carrinho.Compras)
        
    }
}