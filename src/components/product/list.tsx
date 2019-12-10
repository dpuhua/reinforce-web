import React from 'react'
import { Query } from '@apollo/react-components'
// import ProductItem from './item'
import ProductQuery from './queries'

interface TProps {
  allProducts: Array<any>
  data: {
    loading: boolean
  }
}

const ProductList: React.FC = props => {
  return (
    <Query
    query={ProductQuery}
    >
        {
          ({ loading, data, error }: any) => {
            if (loading) {
              return <div>Loading</div>
            }
            console.log(loading);
            console.log(data);
            console.log(error);
            
            const { getAllProducts } = data
            return (
              <div>{ JSON.stringify(getAllProducts) }</div>
            )
          }
        }
    </Query>
  )
}

export default ProductList
