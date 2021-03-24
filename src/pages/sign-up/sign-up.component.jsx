import React from 'react';
import './sign-up.styles.css';
import WholeSellerSignUp from '../../components/wholeSeller-signUp/wholeSeller-signUp.component';

class SignUp extends React.Component {
    clickHandler() {
       console.log('select')
     
       
    }
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    render(){
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>sign up with yor email or password</span>
                <form onSubmit = {this.handleSubmit}>
                        <label className="lbn">Name</label>
                            <input type="text" name='displayName' placeholder='Name...' required onChange={this.handleChange}/>
                        <label className='lbn'>E-Mail</label>
                            <input type="email" name='email' placeholder='E-Mail...' required onChange={this.handleChange}/>
                        <label className='lbn'>Password</label>
                            <input type="password" name='pwd' placeholder='password...' required onChange={this.handleChange}/>
                        <label>Confirm Password</label>
                            <input type="password" name='confirmPassword' placeholder='password...' required onChange={this.handleChange}/>
                            <WholeSellerSignUp/>
                        <button className="btn1" onSubmit={this.handleSubmit}>SIGN IN</button>
                    </form>


                
             </div>
        )
        
    }
}
export default SignUp