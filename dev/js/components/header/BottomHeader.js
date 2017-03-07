import React, {Component,PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {logOut} from '../../actions/signupActions';
class BottomHeader extends React.Component {
    constructor(props){
        super(props);
        this.state={
            account:{}
        }
        this.logOut=this.logOut.bind(this);
    }

    logOut(){
         this.props.logOut(this.state);
    }
    render(){
        var accountInfo;
        if(this.props.account.userName && this.props.account.accessToken){
            accountInfo=(<ul className="login">
                        <li>Welcome <a href="#">{this.props.account.userName}</a></li> |
                        <li><a href="#" onClick={this.logOut}>Logout</a></li>
                    </ul>);
        }
        else{
            accountInfo=( <ul className="login">
                        <li><Link to="/login"><span> </span>Login</Link></li> |
                        <li><Link to="/signup">Register</Link></li>
                    </ul>);
        }
        return (
            <div className="bottom-header">
                <div className="container">
                <div className="header-bottom-left">
                    <div className="logo">
                        <Link to="/"><img src="../../assets/images/logo.png" alt="" /></Link>
                    </div>
                    <div className="search">
                        <form method="get" action="/tim-kiem.html">
                            <input type="text" id="txtKeyword" name="keyword" placeholder="Keyword"/>
                            <input type="submit" value="Search" id="btnSearch"/>
                        </form>
                    </div>
                    <div className="clearfix"> </div>
                </div>
                <div className="header-bottom-right">
                   {accountInfo}

                    <div className="cart"><Link to="/shoppingcart"><span></span>Carts</Link></div>
                    <div className="clearfix"> </div>
                </div>
                <div className="clearfix"> </div>
            </div>
        </div>
        );
    }
}
const mapStateToProps = (state) => ({
    account: state.account
});
export default connect(mapStateToProps,{logOut})(BottomHeader);
