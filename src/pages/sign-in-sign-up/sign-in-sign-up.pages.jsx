import React from 'react';
import SignUp from '../../components/sign-up/sign-up.component'
import './sign-in-sign-up.styles.css';
import LogIn from '../../components/LogIn/login.component'


const SignUpPage = () => (
    <div className="sign-up-page">
        <LogIn />
        <SignUp />
    </div>
)


export default SignUpPage;
