import gql from 'graphql-tag'

const mutation = gql`
  mutation makeOrder($productID: ID!, $quantity: Int) {
    makeOrder(productID: $productID, quantity: $quantity) {
      id
      name
      inStock
    }
  }
`

export default mutation
