import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'



const RootLayout = () => {

  const cart = useSelector((state) => state.cart)
  return (
    <div>
      <div className='sticky top-0'>
          <ul className='flex gap-16 justify-end bg-slate-800 text-white p-2 font-bold text-xl'>
            <li className='hover:cursor-pointer'>
              <Link to="/">Home</Link>
            </li>
            <li className='hover:cursor-pointer'>
              <Link to="/cart" className='mr-2'>Cart</Link>
              {cart.length}
            </li>
          </ul>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout