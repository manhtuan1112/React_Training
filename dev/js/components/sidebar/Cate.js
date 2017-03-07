import React, {Component} from 'react';

class Cate extends Component {
  constructor(props) {
    super(props);
    this.onCateSelect = this.onCateSelect.bind(this);
  }

  onCateSelect() {
    this.props.selectCate(this.props.cate.id);
  }

  render() {
    return (
        <ul className="kid-menu" style={{display: 'none'}}>
            <li key={this.props.cate.id}><a href="#" onClick={this.onCateSelect}> {this.props.cate.name}</a></li>               
      </ul>
     
    )
  }
}

export default Cate;