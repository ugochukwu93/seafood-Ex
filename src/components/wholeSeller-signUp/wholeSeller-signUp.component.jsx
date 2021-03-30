
import './wholeSeller-signUp.styles.css';

import React from 'react'

class WholeSellerSignUp extends React.Component {

    constructor() {
        super()
    
        this.state = {
             show: false
        }
    }
    operation(){
        this.setState({
            show:! this.state.show
        })
    }
    
    render() {
        return (
            <div>
                <div className='check'>
                <input className='check-input' type="checkbox" onClick = {()=>this.operation()}/>
                <label >I am a Merchant</label>
                </div>
                {
                    this.state.show?
                    <div>
                        <input type="text" placeholder="Your business Name"/>
                    </div>
                :null
                }
                
            </div>
        )
    }
}

export default WholeSellerSignUp
