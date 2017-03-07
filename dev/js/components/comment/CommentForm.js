import React, {Component} from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state={
            userId:'',
            productId:'',
            content:'',
            ratingStar:0,
            isEditing: false
        }
    
    this.props=this.props;
    this.onChange=this.onChange.bind(this);
    this.onRatingChange=this.onRatingChange.bind(this);

    this.postComment=this.postComment.bind(this);
    this.state.productId=this.props.productId;
    this.state.userId=this.props.userId;

     this.toggleEdit = this.toggleEdit.bind(this);
     this.cancelComment=this.cancelComment.bind(this);
  }


  toggleEdit() {
    this.setState({isEditing: true});
  }
  cancelComment(){
    this.setState({isEditing: false});
    this.setState({content:''});
    this.setState({ratingStar:0});
  }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onRatingChange(e){
      this.setState({
          ratingStar: e.currentTarget.value
        });
    }
    postComment(){
         this.props.createComment(this.state);
         this.setState({isEditing: false});
         this.setState({content:''});
    }

//   onCateSelect() {
//     this.props.selectCate(this.props.cate.id);
//   }

  render() {
     if (this.state.isEditing) {
      return (
      <div className="toogle">
        <h3 className="m_3">Comments And Rating</h3>
        <fieldset className="rating">
          <input onChange={this.onRatingChange}  type="radio" id="star5" name="rating" value="5" /><label className= "full" htmlFor="star5" title="Awesome - 5 stars"></label>
          {/*<input type="radio" id="star4half" name="rating" value="4 and a half" /><label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>*/}
          <input onChange={this.onRatingChange}  type="radio" id="star4" name="rating" value="4" /><label className= "full" htmlFor="star4" title="Pretty good - 4 stars"></label>
          {/*<input type="radio" id="star3half" name="rating" value="3 and a half" /><label className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>*/}
          <input onChange={this.onRatingChange}  type="radio" id="star3" name="rating" value="3" /><label className= "full" htmlFor="star3" title="Meh - 3 stars"></label>
          {/*<input type="radio" id="star2half" name="rating" value="2 and a half" /><label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>*/}
          <input onChange={this.onRatingChange}  type="radio" id="star2" name="rating" value="2" /><label className= "full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
          {/*<input type="radio" id="star1half" name="rating" value="1 and a half" /><label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>*/}
          <input onChange={this.onRatingChange}  type="radio" id="star1" name="rating" value="1" /><label className= "full" htmlFor="star1" title="Sucks big time - 1 star"></label>
          {/*<input type="radio" id="starhalf" name="rating" value="half" /><label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>*/}
        </fieldset>
        	<textarea style={{width:800}} name="content" value={this.state.content}  onChange={this.onChange}></textarea>
                         <button className="btn" onClick={this.postComment}>Post</button> &nbsp;&nbsp;&nbsp;
                         <button className="btn" onClick={this.cancelComment}>Cancel</button>
      </div>
      )
    }
    return (
           <div className="toogle">
				     	<h3 className="m_3">Comments And Rating</h3> <button onClick={this.toggleEdit} className="btn btn-warning">Click Here to Comment</button>
              <p></p>
            </div>	
    )
  }
}

export default CommentForm;