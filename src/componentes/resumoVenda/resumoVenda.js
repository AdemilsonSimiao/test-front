import React from "react";

const ResumoVenda = () => {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200) {
            var cliente = JSON.parse(this.responseText); //pesquisa de informações dos dados do arquivo json

            //Elementos de items dos produtos
            var subtotal = cliente.subTotal;
            var frete = cliente.shippingTotal;
            var desconto = cliente.discount;
            var _total = cliente.total

            //Usando o DOM para enviar os dados
            document.getElementById("valor_caixa").innerHTML = "R$ " + subtotal;
            document.getElementById("frete").innerHTML = "R$ " + frete;
            document.getElementById("desconto").innerHTML = "- R$ " + desconto;
            document.getElementById("total").innerHTML = "R$ " + _total;
        }
    };

    xmlhttp.open("POST", "http://www.mocky.io/v2/5b15c4923100004a006f3c07", true);
    xmlhttp.send();

    return (
        <div className="container_caixa">
            <div className="produtos_caixa">
                <p className="caixa">PRODUTOS</p>
                <p className="caixa_valor" id="valor_caixa"></p>
            </div>
            <div className="frete_caixa">
                <p className="frete">FRETE</p>
                <p className="frete_preco" id="frete"></p>
            </div>
            <div className="desconto_caixa">
                <p className="desconto">DESCONTO</p>
                <p className="desconto_preco" id="desconto"></p>
            </div>
            <div className="total_caixa">
                <p className="total">TOTAL</p>
                <p className="total_preco" id="total"></p>
            </div>
        </div>
    )
}
export default ResumoVenda;
