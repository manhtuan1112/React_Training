import React, {PropTypes}  from 'react';
import {Link} from 'react-router';
const ProductList = ({products}) => {  
  return (
      <div className="grid-product">
            {products.map(product => 
            <div className="  product-grid" key={product.id}>
			<div className="content_box"><a href="single.html">
			   	</a><div className="left-grid-view grid-view-left"><a href="single.html">
			   	   	 <img src={product.image} className="img-responsive watch-right" alt=""/>
				   	   	<div className="mask">
	                        <div className="info">Quick View</div>
			            </div>
				   	  </a>
				</div>
				    <h4><Link to={"/productdetail/"+product.id}>{product.name}</Link></h4>
				     <p>{product.description}</p>
				     {product.price}$
			   	</div>
              </div>
            )}
      </div>
     
  );
};

ProductList.propTypes = {  
  products: PropTypes.array.isRequired
};

export default ProductList;  
