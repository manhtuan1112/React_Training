import React, {PropTypes} from 'react';
import {connect} from 'react-redux';  
import * as productActions from '../../actions/productActions';
import FeaturedProductList from './FeaturedProductList';

class FeaturedProductContainer extends React.Component{
    render(){
        return (
                <FeaturedProductList products={this.props.products}/>
        );
    }
}

FeaturedProductContainer.propTypes = {
    products: PropTypes.array.isRequired
};
function mapStateToProps(state, ownProps) {
     return {
         products: state.products
    };
} 
export default connect(mapStateToProps)(FeaturedProductContainer);  