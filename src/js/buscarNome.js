import { Vitrine } from "./Vitrine.js";

export class Busca{

    static cardsBusca = document.querySelector(".cardVitrine__ul");

    static renderizarBusca(lista){

        this.cardsBusca.innerHTML = ""
       
             const cards = this.buscarProdutos(lista)
            
            cards.forEach((e) =>{  
                this.cardsBusca.append(Vitrine.CriandoVitrine(e))
            })
           
        }

    static buscarProdutos(produtos){
        let input = document.querySelector(".campoDeBusca__input");
  
            let pesquisarProduto = input.value.toLowerCase().trim()
            let resultado =[]

            produtos.filter((elemento)=> {
             let {nome,categoria} = elemento
            
             if(nome.toLowerCase().includes(pesquisarProduto) || categoria.toLowerCase().includes(pesquisarProduto)){
                resultado.push(elemento)
             }

            })

            return resultado
            
        }
}
