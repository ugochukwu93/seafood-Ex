import React, { Component } from 'react'
import './dashboard.styles.css'

 class Dashboard extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <div className="dashboard-nav">
                    <img src="https://www.businesslist.com.ng/img/ng/z/1543258233-37-stallion-motors-ltd.png" alt=""/>
                    <div>
                        <h2>STALLION</h2>
                    </div>
                    <div>
                        <ul>
                            <li><i class="fas fa-boxes"></i> My products</li>
                            <hr/>
                            <li><i class="fas fa-comments"></i> Feedback</li>
                            <hr/>
                            <li><i class="fas fa-cogs"></i> Settings</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
