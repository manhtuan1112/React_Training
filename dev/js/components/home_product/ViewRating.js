import React, {Component} from 'react';
import {connect} from 'react-redux';  
import {updateProduct} from '../../actions/productActions';
class ViewRating extends Component {
  constructor(props) {
    super(props);
    // this.onRatingSelect = this.onRatingSelect.bind(this);
  }

  // onRatingSelect(num) {
  //   this.props.product.viewCount=num;
  //   this.props.updateProduct(this.props.product);
  // }
    
  render() {
    var blackStar = [];
    
    var rates=this.props.product.viewCount;
    for (var i=0; i<rates; i++) {
        blackStar.push(<span key={i}><input type="radio" className="rating-input" id="rating-input-1-5" name="rating-input-1"/>
        <label htmlFor="rating-input-1-5" className="rating-star1"> </label>
        </span>
        );
    }

    var greenStar=[];
    var rest=5-rates;
    for (var i=0; i<rest; i++) {
        greenStar.push(<span key={i}><input type="radio" className="rating-input" id="rating-input-1-5" name="rating-input-1"/>
        <label htmlFor="rating-input-1-5" className="rating-star" > </label>
        </span>
        );
    }

    return (
     <span className="rating">
        {blackStar}{greenStar}
        {/*<input type="radio" className="rating-input" id="rating-input-1-5" name="rating-input-1"/>
        <label htmlFor="rating-input-1-5" className="rating-star1"> </label>
        <input type="radio" className="rating-input" id="rating-input-1-4" name="rating-input-1"/>
        <label htmlFor="rating-input-1-4" className="rating-star1"> </label>
        <input type="radio" className="rating-input" id="rating-input-1-3" name="rating-input-1"/>
        <label htmlFor="rating-input-1-3" className="rating-star"> </label>
        <input type="radio" className="rating-input" id="rating-input-1-2" name="rating-input-1"/>
        <label htmlFor="rating-input-1-2" className="rating-star"> </label>
        <input type="radio" className="rating-input" id="rating-input-1-1" name="rating-input-1"/>
        <label htmlFor="rating-input-1-1" className="rating-star"> </label>*/}
    </span>
     
    )
  }
}

function mapStateToProps(state, ownProps) {
     return {
         products: state.products
    };
} 
const mapDispatchToProps = ({
  updateProduct:updateProduct
});
export default connect(mapStateToProps,mapDispatchToProps)(ViewRating);  