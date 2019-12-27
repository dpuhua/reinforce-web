import gql from 'graphql-tag'

export const ProductListQuery = gql`
  query getProducts{
    getAllProducts{
      id
      name
      inStock
    }
    getProduct(id: 10001) {
      id
      name
      inStock
    }
  }
`
