import React from 'react';
import './sign-up.styles.css';
import WholeSellerSignUp from '../../components/wholeSeller-signUp/wholeSeller-signUp.component';

const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    displayNameError:'',
    emailError:'',
    passwordError:'',
    confirmPasswordError:''
}

class SignUp extends React.Component {
    
    constructor() {
        super();

        this.state = initialState
    }
    handleChange =(e)=>{
        const {name,value}= e.target
        this.setState({[name]:value})
    }

    

    validate = () => {
        let displayNameError=''
        let emailError=''
        let passwordError=''
        let confirmPasswordError=''
     
        if (this.state.confirmPassword !== this.passwordError){
            confirmPasswordError = "length should be more than 5"
        } 
        if (this.state.password.length > 5 ){
            passwordError = "length should be more than 5"
        } 
        if (!this.state.displayName) {
            displayNameError = "name cannot be blank"
        }
        if (!this.state.email.includes('@')) {
            emailError = "Invalid Email"
        }
        if (emailError || passwordError || confirmPasswordError || displayNameError) {
            this.setState({emailError, passwordError,confirmPasswordError,displayNameError});
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
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>sign up with yor email or password</span>
                <form onSubmit = {this.handleSubmit}>
                        <label className="lbn">Name</label>
                            <input type="text" name='displayName' placeholder='Name...'  onChange={this.handleChange}/>
                            <p style={{color:"red",  marginLeft:63 }}>{this.state.displayNameError}</p>
                        <label className='lbn'>E-Mail</label>
                            <input type="email" name='email' placeholder='E-Mail...'  onChange={this.handleChange}/>
                            <p style={{color:"red",  marginLeft:63 }}>{this.state.emailError}</p>
                        <label className='lbn'>Password</label>
                            <input type="password" name='pwd' placeholder='password...'  onChange={this.handleChange}/>
                            <p style={{color:"red", marginLeft:63 }}>{this.state.passwordError}</p>
                        <label>Confirm Password</label>
                            <input type="password" name='confirmPassword' placeholder='password...'  onChange={this.handleChange}/>
                            <p style={{color:"red", marginLeft:63 }}>{this.state.confirmPasswordError}</p>
                            <WholeSellerSignUp/>
                        <button className="btn1" onSubmit={this.handleSubmit}>SIGN IN</button>
                    </form>
             </div>
        )
        
    }
}
export default SignUp