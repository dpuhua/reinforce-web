import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import ProductList from './list'

const ProductListQuery = gql`
  query {
    appProducts{
      id
      name
    }
  }
`
const ProductListWithData = graphql(ProductListQuery)(ProductList)
