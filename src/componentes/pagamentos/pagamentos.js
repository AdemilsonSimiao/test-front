import React from 'react';
import './pagamentos.css';
import ResumoVenda from '../resumoVenda/resumoVenda';
import Menu from '../menu/menu';

const Pagamento = (numeroCartao, nomeCartao, validade) => {
    return (
        <div className="container">
        <div className="container_sacola">
           <Menu/>
            <h1 className="produtos">CARTÃO DE CREDITO</h1>
            <section className="rectangle-2" id="cartao">
                <div className="numero_cartao">
                    <label htmlFor="">Número do cartão:</label>
                    <input type="text" placeholder="____-____-____-____" value={numeroCartao}/>
                </div>
                <div className="nome_cartao">
                    <label htmlFor="">Nome do titular:</label>
                    <input type="text" placeholder="Como no cartão" value={nomeCartao}/>
                </div>
                <div className="validade_cartao">
                    <div>
                        <label htmlFor="">Validade (mês/ano):</label>
                        <input type="text" placeholder="__/__" value={validade}/>
                    </div>
                    <div>
                        <label htmlFor="">CVV:</label>
                        <input type="text" placeholder="___" />
                    </div>
                </div>
            </section>
           <ResumoVenda/>
            <button>FINALIZAR O PEDIDO</button>
        </div>
     </div>
    )
}

export default Pagamento;
