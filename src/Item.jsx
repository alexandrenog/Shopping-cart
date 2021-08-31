import React from 'react';
import './Item.css'

function capitalizeFirstLetter(string) 
{
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.props=props
  }
  render(){
    return (
      <div class="row item-container">
        <div class="col item-image-container">
          <img class="miniatura" src={this.props.data.imageUrl}/>
        </div>
        <div class="col item-info-container">
          <div class="row">
            <h1 class="item-name">{capitalizeFirstLetter(this.props.data.name)}</h1>
          </div>
          <div class="row">
            <span class="item-price">R$ {(this.props.data.price/100).toLocaleString()}
            </span>
          </div>
          <div class="row">
            <span class="item-sellprice">R$ {(this.props.data.sellingPrice/100).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export {Item};
