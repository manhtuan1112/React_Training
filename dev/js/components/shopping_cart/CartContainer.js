import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import{Link,browserHistory} from 'react-router';
import Cart from './Cart';
import {updateCart,removeCart,clearCart,makePayment} from '../../actions/cartActions';
class CartContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            order:{customerName: '',
            customerEmail:'',
            customerMobile:'',
            customerAddress:'',
            customerMessage:'',
            customerId:''
            },
            orderDetails:[]
        }
        
        this.onClear=this.onClear.bind(this);
        this.onContinue=this.onContinue.bind(this);
        this.onCheckOut=this.onCheckOut.bind(this);
        // this.onChange=this.onChange.bind(this);
        this.onCheckAccountInfo=this.onCheckAccountInfo.bind(this);
        this.onMakePayment=this.onMakePayment.bind(this);
    }
   
    onContinue(){
        browserHistory.push(`/`)
    }
    onClear(){
        this.props.clearCart();
    }
    onCheckOut(){
        document.getElementById("divCheckout").style.display = "block";
    }
    //  onChange(e){
    //     this.setState({order:{[e.target.name]: e.target.value}});
    // }

    onCheckAccountInfo(e){
        if(e.currentTarget.checked){
            if(this.props.account.id!=undefined && this.props.account.id!=""){
            document.getElementById("txtName").value=this.props.account.fullName;
            document.getElementById("txtAddress").value=this.props.account.address;
            document.getElementById("txtEmail").value=this.props.account.email;
            document.getElementById("txtPhone").value=this.props.account.phoneNumber; 
            document.getElementById("txtCustomerId").value=this.props.account.id;                      
            }
            else{
                alert("You have to login");
                browserHistory.push(`/login`);
            }
        }
        else{
            document.getElementById("txtName").value='';
            document.getElementById("txtAddress").value='';
            document.getElementById("txtEmail").value='';
            document.getElementById("txtPhone").value=''; 
            document.getElementById("txtCustomerId").value='';                      
        }

    }
    onMakePayment(){
        var order={customerName:  document.getElementById("txtName").value,
        customerEmail: document.getElementById("txtEmail").value,
        customerMobile:document.getElementById("txtPhone").value,
        customerAddress:document.getElementById("txtAddress").value,
        customerMessage:document.getElementById("txtMessage").value,
        customerId:document.getElementById("txtCustomerId").value,
         };
         this.state.order=order;
    
        var carts=this.props.carts;
        var orderDetails=[];
        for(var i=0;i<carts.length;i++){
            orderDetails.push({orderId:0,productId:carts[i].productId,price:carts[i].product.price,quantity:carts[i].quantity});
        }
        
        this.state.orderDetails=orderDetails;
        this.props.makePayment(this.state);
    }

    componentDidMount(){
        
    }
    render(){
        if(this.props.carts.length==0)
        {
            return(
            <div className="single_top">
                <div className="single_grid">
                    <div id="cartContent">
                        <h3>There is no product in cart! Please continue shopping</h3>
                    </div>
                </div>
            </div>
                    );
        }
        else{
             const carts = this.props.carts.map((cart,i) => {
                return (
                    <Cart
                    key={cart.productId}
                    cart={cart}
                    number={i+1}
                    updateCart={this.props.updateCart}
                    removeCart={this.props.removeCart}
                   />
                    
                )
            });
            var totalAmount=0;
            this.props.carts.map((cart,i) => {
                return totalAmount += cart.product.price*cart.quantity
            });

            return(
            <div className="single_top">
                <div className="single_grid">
                    <div id="cartContent">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td>No</td>
                                    <td>Product Name</td>
                                    <td>Image</td>
                                    <td>Price</td>
                                    <td>Quantity</td>
                                    <td>Total</td>
                                    <td>#</td>
                                </tr>
                            </thead>
                            <tbody id="cartBody">                          
                                {carts}
                            </tbody>
                        </table>
                        <button className="btn btn-success" id="btnContinue" onClick={this.onContinue}>Continue Shopping</button>&nbsp;&nbsp;&nbsp;
                        <button className="btn btn-danger" id="btnDeleteAll" onClick={this.onClear}>Clear Carts</button>&nbsp;&nbsp;&nbsp;
                        <button className="btn" id="btnCheckout" onClick={this.onCheckOut}>Check out</button>
                        <div className="pull-right">
                            <strong>Total Amount: <span id="lblTotalOrder" style={{color:'red'}}>{totalAmount}</span></strong>
                        </div>
                    </div>
                        <div id="divCheckout" style={{display:'none'}}>
                                <div className="reservation_top">
                                    <div className="contact_right">
                                        <h3>Make payment</h3>
                                        <input type="checkbox" onClick={this.onCheckAccountInfo} /> Using logined account information
                                        <div className="contact-form">
                                            <form method="post" id="frmPayment" noValidate="novalidate">
                                                <input type="text" className="textbox" id="txtName" name="customerName" placeholder="Full name"  />
                                                <input type="text" className="textbox" id="txtAddress" name="customerAddress" placeholder="Address" />
                                                <input type="text" className="textbox" id="txtEmail" name="customerEmail" placeholder="Email" />
                                                <input type="text" className="textbox" id="txtPhone" name="customerMobile" placeholder="Phone" />
                                                <textarea id="txtMessage" placeholder="Message" name="customerMessage" ></textarea>
                                                <input type="hidden" id="txtCustomerId" name="customerId"  />
                                                <input type="button" id="btnCreateOrder" className="btn btn-primary" value="Make payment" onClick={this.onMakePayment}/>
                                                <div className="clearfix"> </div>
                                            </form>
                                            {/*<form method="post" id="frmPayment" noValidate="novalidate">
                                                <input type="text" className="textbox" id="txtName" name="customerName" placeholder="Full name" value={this.state.order.customerName} ref={input => this.fullName = input} />
                                                <input type="text" className="textbox" id="txtAddress" name="customerAddress" placeholder="Address" value={this.state.order.customerAddress} />
                                                <input type="text" className="textbox" id="txtEmail" name="customerEmail" placeholder="Email" value={this.state.order.customerEmail} />
                                                <input type="text" className="textbox" id="txtPhone" name="customerMobile" placeholder="Phone" value={this.state.order.customerMobile} />
                                                <textarea id="txtMessage" placeholder="Message" name="customerMessage" value={this.state.order.customerMessage} ></textarea>
                                                <input type="button" id="btnCreateOrder" className="btn btn-primary" value="Make payment" onClick={this.onMakePayment}/>
                                                <div className="clearfix"> </div>
                                            </form>*/}
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
     return {
        carts:state.carts,
        account:state.account
    };
} 

const mapDispatchToProps = ({
  updateCart: updateCart,
  removeCart:removeCart,
  clearCart:clearCart,
  makePayment:makePayment
});
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);  