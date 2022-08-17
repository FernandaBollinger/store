
import { Vitrine } from "./Vitrine.js";
import { DataBase } from "./DataBase.js";

export class FiltrandoMenu {

    static cards = document.querySelector(".cardVitrine__ul");

    static filtrarMenu(){

        let linksMenu = document.querySelector(".menuNavegacao__div")
        

        linksMenu.addEventListener("click", (event) => {
            
            FiltrandoMenu.cards.innerHTML = ''

           if(event.target.innerText === "Todos" ||event.target.innerText === "Adesivos" || event.target.innerText === "Cortinas" || event.target.innerText === "Tapetes" || event.target.innerText === "Velas"){
            if(event.target.innerText === "Todos"){
                Vitrine.renderizarVitrine(DataBase.Produtos)
            }else{
                let result = DataBase.Produtos.filter(obj => 
                 obj.categoria === event.target.innerText
            
            )
                Vitrine.renderizarVitrine(result)
            }
            }

        })
            return linksMenu
    }
}