export class Menu{ 

    static createNav(){
        const menuNavegacao = document.querySelector(".menuNavegacao__div")
 
        const tagA1 = document.createElement("a"); 
        const tagA2 = document.createElement("a"); 
        const tagA3 = document.createElement("a");
        const tagA4 = document.createElement("a");
        const tagA5 = document.createElement("a");
        
        tagA1.innerText = "Todos"
        tagA1.href = "#"
        tagA2.innerText = "Adesivos"
        tagA2.href = "#"
        tagA3.innerText = "Cortinas"
        tagA3.href = "#"
        tagA4.innerText = "Tapetes"
        tagA4.href = "#"
        tagA5.innerText = "Velas"
        tagA5.href = "#"
        
        
        menuNavegacao.append(tagA1, tagA2, tagA3, tagA4, tagA5)

        return menuNavegacao
    }
}