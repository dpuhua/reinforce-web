import React, { Component } from 'react'
import ProductItem from './item'

interface TProps {
  allProducts: Array<any>
  data: {
    loading: boolean
  }
}

export default class ProductList extends Component<TProps> {
  render() {
    if (this.props.data.loading) {
      return <div>Loading</div>
    }
    return (
      <div className="panel">
        <p className="panel-heading">
          Product List
        </p>
        {this.props.allProducts.map(product => 
          <ProductItem key={product.id} product={product}></ProductItem>  
         )}
      </div>
    )
  }
}



