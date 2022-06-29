import { React } from "react";
import './carrinho.css';
import Pagamento from '../pagamentos/pagamentos';
import Confirmacao from '../confirmacao/confirmacao';
import Menu from '../menu/menu';
import ResumoVenda from '../resumoVenda/resumoVenda';
import { Produto } from '../produto/produto';

const Carrinho = () => {

    return (
        <div className="Carrinho">
            <div className="container">
                <div className="container_sacola">
                    <Menu/>
                    <h1 className="produtos">PRODUTOS</h1>
                    <Produto/>
                    <ResumoVenda/>
                    <button>SEGUIR PARA O PAGAMENTO</button>
                </div>
            </div>
            <Pagamento/>
            <Confirmacao/>
        </div>
    );
  }
  export default Carrinho;
