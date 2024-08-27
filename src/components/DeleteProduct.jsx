import React from 'react'
import { useDeleteProductMutation } from '../app/service/dummyData'

const DeleteProduct = ({productId}) => {

  const [deleteProduct, {data, isError, isLoading}] = useDeleteProductMutation();

  const handleDeleteProduct = async() => {
    try {

      await deleteProduct({id: productId})
    } catch(err) {
      console.error(err)
    }
  }

  if(isError) {
    return <h1>Error</h1>
  }

  if(isLoading) {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <h1>
        {data?.title ? `${data.title} successfully deleted`: ''}
      </h1>
      <button onClick={handleDeleteProduct} disabled={isLoading}>Delete Product</button>
    </div>
  )
}

export default DeleteProduct