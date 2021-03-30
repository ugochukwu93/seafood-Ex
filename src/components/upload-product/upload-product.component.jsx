import React, { Component } from 'react'

class UploadProduct extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Upload Product</h1>
                    <input type="text" placeholder="Product Name"/>
                    <label>Product Name</label>
                    <input type="text" placeholder="Manufacturer"/>
                    <label>Manufacturer</label>
                    <input type="text" placeholder="Product Country"/>
                    <label>Product Country</label>
                    <input type="text" placeholder="Product Name"/>
                    <label>Product Name</label>
                </div>
            </div>
        )
    }
}
export default UploadProduct
