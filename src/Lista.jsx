import React from 'react';
import './Lista.css'
import {Item} from './Item';

function Frete(props){
  if (!props.show) {
    return "";
  }
  return (
    <span class="frete-gratis">
      Parabéns, sua compra tem frete grátis !
    </span>
  );
}

class Lista extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      itens: []
    };
  }
  async fetchData()  {
    const response = await fetch('../jsondata/acima-10-reais.json');
    //const response = await fetch('../jsondata/abaixo-10-reais.json');
    const data = await response.json();
    this.setState({itens: data.items, value: data.value});
  }
  componentDidMount() {
    this.fetchData();
  }
  render(){
    return (
      <div class="list-box">
        <h1>Meu Carrinho</h1>
        <hr class="solid"/>
        {this.state.itens.map((item) =>
        <Item key={item.id} data={item}/>
        )}
        <hr class="solid"/>
        <div class="col">
          <div class="row total-container">
            <div class="col">
              <h1>Total</h1>
            </div>
            <div class="col-right">
              <h1>R$ {(this.state.value/100).toLocaleString()}</h1>
            </div>
          </div>
          <div class="row">
            <Frete show={this.state.value/100>=10.0}/>
          </div>
        </div>
        <hr class="solid"/>
        <input class="botao-finalizar" type="button" value="Finalizar Compra"/>
      </div>
    );
  }
}

export {Lista};

//