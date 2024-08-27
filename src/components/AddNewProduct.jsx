import React from 'react'
import { useAddNewProductMutation } from '../app/service/dummyData'

const AddNewProduct = () => {

  const [addNewProduct, { data, isError, isLoading}] = useAddNewProductMutation();

  if(isError) {
    return <h1>Error</h1>
  }

  if(isLoading) {
    return <h1>Loading...</h1>
  }

  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: 1,
        title: "Amazing T-Shirt",
        description: "This is one of the best amazing t-shirt in the market"
      }
      await addNewProduct(newProductData)
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
      <button onClick={handleAddProduct} disabled={isLoading}>Add new Button</button>
    </div>
  )
}

export default AddNewProduct