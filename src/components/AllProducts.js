import React from 'react'
import { useGetAllProductsQuery } from '../app/service/dummyData'




const AllProducts = () => {

  const {data, isError, isLoading} = useGetAllProductsQuery();

  if(isError) {
    return <h1>OOOhNooo we got an error</h1>
  }

  if(isLoading) {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      {
        data?.products.map((p) => {
          return <div key={p.id}>
            <h1 key={p.id}> {p.title}</h1>
            <p>{p.description}</p>
          </div>
        })
      }
    </div>
  )
}

export default AllProducts