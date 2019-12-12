import gql from 'graphql-tag'

const ProductListQuery = gql`
  query {
    getAllProducts{
      id
      name
    }
    getProduct(id: 10001) {
      id
      name
    }
  }
`

export default ProductListQuery
