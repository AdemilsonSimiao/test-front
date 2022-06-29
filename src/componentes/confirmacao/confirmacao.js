import React from 'react';
import './confirmacao.css';
import Menu from '../menu/menu';
import success from '../../success.png';
import ResumoVenda from '../resumoVenda/resumoVenda';
import  Produto  from '../produto/produto';


const Confirmacao = () => {

    return (
        <div className="container">
            <div className="container_sacola">
                <Menu/>
                <div className="image_sucesso">
                    <img src={success} alt="confirmação"/>
                </div>
                <h1 className="produtos">PAGAMENTO</h1>
                <section className="rectangle-2">
                    <div className="resultado_cartao">
                        <p>numeroCartao</p>
                        <p>nomeCartao</p>
                        <p>validade</p>
                    </div>
                </section>
                <h1 className="produtos">PRODUTOS</h1>
                <Produto/>
                <ResumoVenda/>
            </div>
        </div>
    )
}

export default Confirmacao;
