import React, {PropTypes} from 'react';
import {connect} from 'react-redux';  
import * as productActions from '../../actions/productActions';
import ProductList from './ProductList';
class ProductByCate extends React.Component{
	 constructor(props){
        super(props);
		console.log(props);
		this.props=this.props;
		
    }

	//   componentDidMount() {
    // 	return $.getJSON('http://localhost:5000/api/product/getallbycategory/'+this.props.params.id)
    //   .then((data) => {	
	// 	 console.log(data);
    //   });
	// }

  

    render(){
        return (
            <div className="women-product">
		<div className="w_content">
			<div className="women">
				<a href="#"><h4>Enthecwear - <span>4449 itemms</span> </h4></a>
				<ul className="w_nav">
					<li>Sort : </li>
			     	<li><a className="active" href="#">popular</a></li> |
			     	<li><a href="#">new </a></li> |
			     	<li><a href="#">discount</a></li> |
			     	<li><a href="#">price: Low High </a></li> 
			     <div className="clearfix"> </div>	
			     </ul>
			     <div className="clearfix"> </div>	
			</div>
		</div>
		<h1>{this.props.category.name}</h1>
		<ProductList products={this.props.products}/>
		
	</div>
        );
    }
}


ProductByCate.propTypes = {
	category:PropTypes.object.isRequired,
    products: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
	let category = {name: '',products: []};
	const cateId=ownProps.params.id;
	 if (state.cates.length > 0) {
		category = Object.assign({}, state.cates.find(category => category.id ==cateId))
	}
     return {
         category:category,
		 products:state.products
    };
} 

// const mapDispatchToProps = (dispatch,ownProps)=>{
// 	const cateId=ownProps.params.id;
//     return {
//         loadProductsByCategory:(cateId)=>{
//             dispatch(loadProductsByCategory(cateId));
//         }
        
//     };
// };

export default connect(mapStateToProps)(ProductByCate);  