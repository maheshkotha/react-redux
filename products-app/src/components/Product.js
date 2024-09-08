import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';

const Product = () => {


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
    }, [])

    const products = useSelector(state => state.products)

  const cards = products?.data?.map(product => {
    return (
      <div id={product.id}
        className="border gap-0 w-[280px] flex flex-col items-center  shadow-indigo-600 rounded overflow-hidden shadow-lg bg-white p-10 text-center" 
        >
        <img className="w-48 h-48" src={product.image} alt="Card image" />
        <div className="px-6 py-4 overflow-hidden mb-4">
          <div className="font-bold text-xl mb-2 overflow-clip h-[150px] text-ellipsis">{product.title}</div>
          <p>Price{product.price}</p>
        </div>
        <button onClick={() => {
          dispatch(add(product))
        }} className='border p-2 pr-4 pl-4 hover:shadow-2xl bg-cyan-600 text-white font-bold'>Add To Cart</button>
      </div>

    );
  })
  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>Product Dashboard</h1>
      <div className='flex flex-wrap gap-16 justify-center mt-8'>
        {cards}
      </div>
    </div>
  )
}

export default Product