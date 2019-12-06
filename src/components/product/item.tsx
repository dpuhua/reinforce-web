import React, { Component } from 'react'

interface IProps {
  product: {
    name: string
    id: string
  }
}

export default class ProductItem extends Component<IProps> {
  render() {
    return (
      <a href="/" className="panel-block">
        { this.props.product.name }
        ({this.props.product.id })
      </a>
    )
  }
}
