import React, {Component} from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
  }

//   onCateSelect() {
//     this.props.selectCate(this.props.cate.id);
//   }

  render() {
    var d=new Date(this.props.comment.addedDate);
    var day=d.getDate();
    var month=d.getMonth()+1;
    var hour=d.getUTCHours();
    var minute=d.getUTCMinutes();
    minute=minute<10?"0"+minute:minute;


    var convertedDate=(day<10?"0"+day:day)+"/"+(month<10?"0"+month:month) +"/"+d.getFullYear()+"  "+d.getUTCHours()+":"+minute;
    return (
       <div>
            <h4>{this.props.comment.applicationUser.fullName}</h4>
            <span>{convertedDate}</span>
            <p className="m_text">{this.props.comment.content}</p>
        </div>
     
    )
  }
}

export default Comment;