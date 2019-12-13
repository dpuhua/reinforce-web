import React from 'react'
import { Query, Mutation } from '@apollo/react-components'
import ProductItem from './item'
import ProductQuery from './queries'
import ProductMutation from './mutation'
import { QueryResult } from '@apollo/react-common'

interface Product {
  name: string
  id: string
  inStock: number
}

const cont = (context: any) => {
  console.log(context);
  console.log(1111111111111);
  debugger
  
}

const ProductList: React.FC = () => {
  return (
    <div>
      <Query
      query={ProductQuery}
      context={cont}
      >
          {
            ({ loading, data, error, refetch, networkStatus, startPolling, stopPolling, fetchMore, updateQuery }: QueryResult) => {
              console.log(networkStatus);
              if (loading) {
                return <div>Loading</div>
              }
              
              const { getAllProducts } = data

              const refresh = () => {
                refetch()
              }
              const sp = () => {
                startPolling(1000)
              }
              return (
                <div>
                  <button onClick={refresh}>refresh</button>
                  <button onClick={sp}>startPolling</button>
                  <button onClick={stopPolling}>stopPolling</button>
                  {
                    getAllProducts.map((product: Product) => <ProductItem product={product} key={product.id}></ProductItem>)
                  }
                </div>
              )
            }
          }
      </Query>
      <Mutation mutation={ProductMutation}>
          {
            (makeOrder: any, { data }: any) => {
              console.log(data)
              const makeOrderFun = () => {
                makeOrder({variables: {quantity: 2, productID: '10001'}})
              }
              return (
                <div>
                  <button onClick={makeOrderFun}>下单</button>
                  {
                    data && <ProductItem product={data.makeOrder}></ProductItem>
                  }
                </div>
              )
            }
          }
      </Mutation>
    </div>

  )
}

export default ProductList
