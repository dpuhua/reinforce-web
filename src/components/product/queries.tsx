import gql from 'graphql-tag'

const ProductListQuery = gql`
  query {
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

export default ProductListQuery
