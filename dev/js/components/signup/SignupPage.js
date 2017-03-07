import React from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import {connect} from 'react-redux';
import {userSignupRequest} from '../../actions/signupActions';

class SignupPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fullname:'',
            username:'',
            email:'',
            password:'',
            passwordConfirmation:'',
            timezone:''
        }

        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        this.props.userSignupRequest(this.state);
        console.log(this.state);
    }

    render(){
        const options=map(timezones,(val,key)=>
            <option key={val} value={val}>{key}</option>
        );
        return(
           <div className="register">
                <form method="post" onSubmit={this.onSubmit}> 
				 <div className="register-top-grid">
					<h3>REGISTER INFORMATION</h3>
					<div className="mation">
						<span>Full Name<label>*</label></span>
						<input type="text" name="fullname" value={this.state.fullname} onChange={this.onChange} />
					
					 
						 <span>Email Address<label>*</label></span>
						 <input type="email" name="email" value={this.state.email} onChange={this.onChange}/>

                         <span>Username<label>*</label></span>
						<input type="text" name="username" value={this.state.username} onChange={this.onChange} />

                         <span>Password<label>*</label></span>
                        <input type="password" name="password" value={this.state.password} onChange={this.onChange}/>

                        <span>Confirm Password<label>*</label></span>
                        <input type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.onChange}/>

                        <span>Timezone<label>*</label></span>
                        <select name="timezone" value={this.state.timezone} onChange={this.onChange}>
                            <option value="" disabled>Choose your timezone</option>
                            {options}
                        </select>
                        
					</div>
					    <div className="clearfix"> </div>
                        <div className="register-but">
                        <input type="submit" value="submit"/>
                        </div>
					 </div>
				</form>
           </div>
        );
    }
}

SignupPage.propTypes={
    userSignupRequest:React.PropTypes.func.isRequired
}

export default connect(null,{userSignupRequest})(SignupPage);