import { DataBase } from "./DataBase.js";
import { Menu } from "./menu.js";
import {Vitrine} from "./Vitrine.js"
import {Busca} from "./buscarNome.js"
import {FiltrandoMenu} from "./filtroMenu.js"
import { Carrinho } from "./Carrinho.js";

Menu.createNav();
Vitrine.renderizarVitrine(DataBase.Produtos);

let btnBusca = document.querySelector(".campoDeBusca__button");
btnBusca.addEventListener("click", () => {

Busca.renderizarBusca(DataBase.Produtos);
})

FiltrandoMenu.filtrarMenu();
// Carrinho.CriandoCarrinho(DataBase.Produtos)
// Carrinho.AdicionarNoCarrinho()
// Carrinho.Total(Carrinho.Compras)
// Carrinho.InfoCarrinho()

