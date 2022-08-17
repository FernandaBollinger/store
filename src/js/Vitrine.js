import { DataBase } from "./DataBase.js";
import { Carrinho } from "./Carrinho.js";

export class Vitrine{
    static cardsVitrine = document.querySelector(".cardVitrine__ul");

    static cardsCarrinho = document.querySelector(".carrinho__ul-card");
        
    static renderizarVitrine(list){
        list.forEach(produto => {
            Vitrine.cardsVitrine.append(Vitrine.CriandoVitrine(produto))

        });
        
        let tagH2 = document.createElement("h2");
        tagH2.classList.add("mensagemCarrinhoVazio")
        tagH2.innerText = `Carrinho vazio.`
        
        if(Carrinho.Compras.length === 0){
            Vitrine.cardsCarrinho.appendChild(tagH2)
        }
        
    }

    static CriandoVitrine(produto) {

        let {img,nome,descricao,preco, id} = produto

        let tagLi = document.createElement("li");
        let tagImg = document.createElement("img");
        let tagH2 = document.createElement("h2");
        let tagH4 = document.createElement("h4");
        let tagDiv = document.createElement("div");
        let tagSpan = document.createElement("span");
        let button = document.createElement("button");
        button.classList.add("cardVitrine__ul-btn");

        button.addEventListener("click", ( )=> { Carrinho.AdicionarNoCarrinho(id)})

        tagImg.alt = nome
        tagImg.src = img
        tagH2.innerText = nome
        tagH4.innerText = descricao
        tagSpan.innerText = `R$ ${preco.toFixed(2)}`.replace(".",",")
        button.innerText = `Adicionar ao carrinho`

        tagDiv.append(tagSpan, button);
        tagLi.append(tagImg, tagH2, tagH4, tagDiv);

        return tagLi
    }
}


/* <li>
    <img src="./img/adesivo_de_azulejo_azul_monte_belo.avif" alt="Azulejo Azul monte belo">
    <h2>Nome</h2>
    <h4>Descricao</h4>
    <div class="cardVitrine__div">
    <span>R$50,00</span>
    <button>Comprar</button>
    </div>
</li>  */