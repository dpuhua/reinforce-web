import gql from 'graphql-tag'

export const ProductMutation = gql`
  mutation makeOrder($productID: ID!, $quantity: Int) {
    makeOrder(productID: $productID, quantity: $quantity) {
      id
      name
      inStock
    }
  }
`
