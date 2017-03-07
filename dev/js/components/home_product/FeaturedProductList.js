import React, {PropTypes}  from 'react';
import {Link} from 'react-router';
import ViewRating from './ViewRating';
import {addToCart} from '../../actions/cartActions';
import {connect} from 'react-redux';


class FeaturedProductList extends React.Component {  
	   constructor(props){
        super(props);
		
		
		}

	onAddToCart(product,e){

		this.props.addToCart(product);
	}
	render(){
		return (
				<div className="product-left">
					{this.props.products.map(product => 
							<div className="col-md-4 chain-grid grid-top-chain" key={product.id}>
									<Link to={"/productdetail/"+product.id}><img className="img-responsive chain" style={{minHeight:350}} src={product.image} alt=" " /></Link>
									<span className="star"> </span>
									<div className="grid-chain-bottom">
										<h6><a href="single.html">{product.name}</a></h6>
										<div className="star-price">
											<div className="dolor-grid"> 
												<span className="actual">{product.price}$</span>
												{/*<span className="reducedfrom">400$</span>*/}
													<ViewRating product={product}/>
											</div>
											<a className="now-get get-cart" href="#" onClick={this.onAddToCart.bind(this,product)} >ADD TO CART</a> 
											<div className="clearfix"> </div>
										</div>
									</div>
								</div>			 
								
					)}
						<div className="clearfix"> </div>
					</div>
		);
	};
}



FeaturedProductList.propTypes = {  
  products: PropTypes.array.isRequired,

};

const mapStateToProps = (state) => ({
    carts: state.carts
});
export default connect(mapStateToProps,{addToCart})(FeaturedProductList);

