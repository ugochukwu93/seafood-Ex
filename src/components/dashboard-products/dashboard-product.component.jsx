import React, { Component } from 'react'
import './dashboard-product.styles.css'

 class DashboardProduct extends Component {
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
                <div className='p-container'>
                    <div className='p-nav'>
                        <div>
                            <h4>My Products</h4>
                        </div>
                        <div>
                            <button>Upload product</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default DashboardProduct
