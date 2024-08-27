import React from 'react'
import { useUpdateProductMutation } from '../app/service/dummyData'

const UpdateProduct = ({productId}) => {

  const [updateProduct, {data, isError, isLoading}] = useUpdateProductMutation();

  const handleUpdateProduct = async () => {
    const updatedProductData = {
      title: 'Title updated...'
    };


    await updateProduct({
      id: productId,
      updatedProductData: updatedProductData
    })
  }

  if(isError) return <h1>Error</h1>
  return (
    <div>
      <h1>{data?.title}</h1>
      <button onClick={handleUpdateProduct} disabled={isLoading}>Update Product</button>
    </div>
  )
}

export default UpdateProduct