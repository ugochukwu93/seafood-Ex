import React from 'react';
import './sign-in.styles.css';
import { Link } from 'react-router-dom'

const initialState = {
    email: "",
    pwd: "",
    emailError: "",
    pwdError: ""
}

class Signin extends React.Component {
    state= initialState
        
    handleChange =(e)=>{
        const {name,value}= e.target
        this.setState({[name]:value})
    }
    validate = () => {
       let emailError = "";
       let pwdError ="";
    
       if (this.state.pwd.length < 5){
           pwdError = "length should be more than 5"
       } 
       if (!this.state.email.includes('@')) {
           emailError = "Invalid Email"
       }
       if (emailError || pwdError) {
           this.setState({emailError, pwdError});
           return false
       }
       return true
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.setState(initialState)
        }
    }
    render(){
        return(
            <div>
                <div className='signin'>
                   
                        <h2>I am already registered </h2>
                        <h5>   Authorization </h5>                    
                    <form onSubmit = {this.handleSubmit}>
                        <label>E-Mail</label>
                            <input type="text" name='email' placeholder='E-Mail...' onChange={this.handleChange}/>
                            <p style={{color:"red", marginLeft: 450 }}>{this.state.emailError}</p>
                        <label>Password</label>
                            <input type="password" name='pwd' placeholder='password...'  onChange={this.handleChange}/>
                            <p style={{color:"red", marginLeft: 450 }}>{this.state.pwdError}</p>
                        <button className="btn2" onSubmit={this.handleSubmit}>SIGN IN</button>
                        <h5>Don't have an Account <Link className='signUp-link' to='/signup'>SIGN UP</Link></h5>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signin