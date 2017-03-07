import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {loadCategories,selectCate} from '../../actions/categoryActions';
import {loadAllProductsWithRoute} from '../../actions/productActions';
import Cate from './Cate';
// import cate from './cate';

class CateList extends Component {
  constructor(props) {
    super(props);
     this.selectAll = this.selectAll.bind(this);
  }

  componentDidMount() {
    // console.log("feetching cates");
    this.props.loadCategories();
  }

  selectAll() {
    this.props.loadAllProductsWithRoute();
  }


  render() {
    // console.log(this.props.cates);

    const cates = this.props.cates.map((cate) => {
      return (
        <Cate
          key={cate.id}
          cate={cate}
          selectCate={this.props.selectCate} />
          
      )
    });

    return (
        <div className="sub-cate">
            <div className=" top-nav rsidebar span_1_of_left">
                <h3 className="cate">CATEGORIES</h3>
                <ul className="menu">
                <li>
                    {/*<CategoryList cates={this.props.cates} />*/}
                   {cates}                         
                </li>
                    
                </ul>
            </div>
             <a className="view-all all-product" onClick={this.selectAll} >VIEW ALL PRODUCTS<span> </span></a>
        </div>
    )
  }
}

CateList.propTypes = {
  cates: PropTypes.array.isRequired,
  loadCategories: PropTypes.func.isRequired,
  selectCate: PropTypes.func.isRequired
};


const mapStateToProps = (state) => ({
    cates: state.cates
});

const mapDispatchToProps = ({
  loadAllProductsWithRoute:loadAllProductsWithRoute,
  loadCategories: loadCategories,
  selectCate: selectCate
});

// const CateListContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CateList);


export default connect(mapStateToProps,mapDispatchToProps)(CateList);  