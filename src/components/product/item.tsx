import React, { Component } from 'react'

interface IProps {
  product: {
    name: string
    id: string
    inStock: number
  }
}

export default class ProductItem extends Component<IProps> {
  render() {
    return (
      <div>
        <a href="/" className="panel-block">
          { this.props.product.name }
          (数量{this.props.product.inStock})
          (id{this.props.product.id})
        </a>
      </div>
    )
  }
}
