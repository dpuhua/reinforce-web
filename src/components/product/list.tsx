import React from 'react'
import { Query } from '@apollo/react-components'
import ProductItem from './item'
import ProductQuery from './queries'
import { QueryResult } from '@apollo/react-common'

interface Product {
  name: string
  id: string
}

const ProductList: React.FC = () => {
  return (
    <Query
    query={ProductQuery}
    >
        {
          ({ loading, data, error, refetch, networkStatus }: QueryResult) => {
            console.log(networkStatus);
            if (loading) {
              return <div>Loading</div>
            }
            
            const { getAllProducts } = data
            const refresh = () => {
              refetch()
            }
            return (
              <div>
                <button onClick={refresh}>点击</button>
                {
                  getAllProducts.map((product: Product) => <ProductItem product={product} key={product.id}></ProductItem>)
                }
              </div>
            )
          }
        }
    </Query>
  )
}

export default ProductList
