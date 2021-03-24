import React, { Component } from 'react'
import DashboardProduct from '../../components/dashboard-products/dashboard-product.component'
import Dashboard from '../../components/dashboard/dashboard.component'
import './dashboard-page.styles.css'

class DashboardPage extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className='d-container'>
                <Dashboard/>
                <DashboardProduct className='dash-p'/>
            </div>
        )
    }
}

export default DashboardPage
