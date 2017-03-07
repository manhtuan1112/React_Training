import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';  
import * as productActions from '../../actions/productActions';
import {getAllCommentsByProduct,createComment} from '../../actions/commentActions';
import Comment from '../comment/Comment';
import CommentForm from '../comment/CommentForm';
import {addToCart} from '../../actions/cartActions';
class ProductDetail extends React.Component{
	 constructor(props){
        super(props);
		this.props=this.props;
        this.onAddToCart=this.onAddToCart.bind(this);
    }
onAddToCart(e){
		this.props.addToCart(this.props.product);
	}
componentWillMount() {
    // console.log("feetching cates");
    this.props.getAllCommentsByProduct(this.props.params.id);
  }

  



    render(){
        const comments = this.props.comments.map((comment) => {
      return (
            <Comment
            key={comment.id}
            comment={comment}
             />
            
            )
        });

        return (
            <div className="single_top">
                <div className="single_grid">

                    <div className="grid images_3_of_2">
						<ul id="etalage">
							<li>
								<a href="optionallink.html">
									<img className="etalage_thumb_image img-responsive" src={this.props.product.image} />
								</a>
							</li>
						</ul>
						 <div className="clearfix"> </div>		
				    </div> 

                     <div className="desc1 span_3_of_2">
                        <h4>{this.props.product.name}</h4>
                        <div className="cart-b">
                            <div className="left-n ">${this.props.product.price}</div>
                            <a className="now-get get-cart-in" href="#" onClick={this.onAddToCart}>ADD TO CART</a> 
                            <div className="clearfix"></div>
                        </div>
                        <h6>{this.props.product.quantity} items in stock</h6>
                        <p>{this.props.product.description}</p>
                        <div className="share">
                                    <h5>Share Product :</h5>
                                    <ul className="share_nav">
                                        <li><a href="#"><img src="../../assets/images/facebook.png" title="facebook"/></a></li>
                                        <li><a href="#"><img src="../../assets/images/twitter.png" title="Twiiter"/></a></li>
                                        <li><a href="#"><img src="../../assets/images/rss.png" title="Rss"/></a></li>
                                        <li><a href="#"><img src="../../assets/images/gpluse.png" title="Google+"/></a></li>
                                    </ul>
                                </div>
                        </div>
                        <div className="clearfix"> </div>
                </div>
                <div className="toogle">
                    <h3 className="m_3">Product Details</h3>
                    <p className="m_text" dangerouslySetInnerHTML={{__html: this.props.product.content}}></p>
                    </div>	
                <CommentForm productId={this.props.params.id} userId={this.props.account.id}  createComment={this.props.createComment} />
                
                <div className="toogle">
                    {comments}
                    {/*<div>
                      <h4>Tuan DUong</h4>
                      <span className="m_text">OK con dee</span>
                    </div>*/}
                </div>
	        </div>
        );
    }
}


ProductDetail.propTypes = {
	product:PropTypes.object.isRequired,
    comments:PropTypes.array.isRequired,
    getAllCommentsByProduct:PropTypes.func.isRequired,
    createComment: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
	let product = {name: '',price:'',description:'',id:''};
	const productId=ownProps.params.id;
	 if (state.cates.length > 0) {
		product = Object.assign({}, state.products.find(product => product.id ==productId))
	}
     return {
         product:product,
		 products:state.products,
         comments:state.comments,
         account:state.account
    };
} 

const mapDispatchToProps = ({
  getAllCommentsByProduct:getAllCommentsByProduct,
  createComment:createComment,
  addToCart:addToCart
});

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail);  