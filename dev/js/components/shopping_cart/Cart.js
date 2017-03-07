import React, {Component} from 'react';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state={
      quantity:this.props.cart.quantity
    };
    
    this.onChange=this.onChange.bind(this);
    this.onRemove=this.onRemove.bind(this);
  }

 onChange(e){
      this.setState({[e.target.name]: e.target.value});
      this.props.updateCart(this.props.cart.productId,e.target.value);
  }
  onRemove(e){
      this.props.removeCart(this.props.cart.productId);
  }
  render() {
    
    return (
     <tr>
        <td>{this.props.number}</td>
        <td>{this.props.cart.product.name}</td>
        <td><img src={this.props.cart.product.image} height="50" /></td>
        <td>{this.props.cart.product.price}</td>
        <td><input type="number" name="quantity"  value={this.state.quantity} className="input txtQuantity" onChange={this.onChange}  /></td>
        <td id="amount_1">{this.props.cart.product.price*this.state.quantity}</td>
        <td><button className="btn btn-danger btnDeleteItem" onClick={this.onRemove}><i className="fa fa-close"></i></button></td>
    </tr>
     
    )
  }
}

export default Cart;