import gql from 'graphql-tag'

const ProductListQuery = gql`
  query {
    getAllProducts{
      id
      name
    }
  }
`

export default ProductListQuery
