import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {userSignupRequest,loginToWebsite} from '../../actions/signupActions';
import{Link} from 'react-router';

class LoginPage extends React.Component{
    constructor(props){
        super(props);
           this.state={
            username:'',
            password:''
        }

        
        this.onChange=this.onChange.bind(this);
        this.loginToWebsite=this.loginToWebsite.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    loginToWebsite(e){
        e.preventDefault();
        this.props.loginToWebsite(this.state);
    }

    render(){
      if(this.props.error.value!=""){
          var alert= (<div className="alert alert-danger">
                    {this.props.error.value}
                    </div>);
      }
        return(
           <div className="account_grid">
                <div className=" login-right">
                    <h3>REGISTERED CUSTOMERS</h3>
                    <p>If you have an account with us, please log in.</p>
                    {alert}
                    <form method="post" onSubmit={this.loginToWebsite}>
                    <div>
                        <span>Email Address<label>*</label></span>
                        <input type="text" name="username" value={this.state.username} onChange={this.onChange} /> 
                    </div>
                    <div>
                        <span>Password<label>*</label></span>
                        <input type="password"  name="password" value={this.state.password} onChange={this.onChange}/> 
                    </div>
                    <a className="forgot" href="#">Forgot Your Password?</a>
                    <input type="submit" value="Login"/> 
                    </form>
                </div>	
                    <div className=" login-left">
                    <h3>NEW CUSTOMERS</h3>
                    <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                    <Link className="acount-btn" to="signup">Create an Account</Link>
                </div>
                <div className="clearfix"> </div>
			 </div>
        );
    }
}

LoginPage.propTypes={
       loginToWebsite: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps) {
	let error = {key: '',value:''};
	// const productId=ownProps.params.id;
	 if (state.errorObject.length > 0) {
		error = Object.assign({}, state.errorObject.find(error => error.key =="loginError"))
	}
     return {
        error:error,
        account:state.account
    };
}

export default connect(mapStateToProps,{loginToWebsite})(LoginPage);