import React, { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice'

const Counter = () => {

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0)

  return (
    <div>
        <p>{count}</p>

        <div>
            <button onClick={()=> dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>

        <div>
            <input type="number" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />

            <button onClick={() => dispatch(incrementByAmount(incrementAmount - 0))}>Add Amount</button>
        </div>

        <div>
            <button onClick={() => {
                dispatch(reset())
                setIncrementAmount(0)
                }}>Reset</button>
        </div>
    </div>
  )
}

export default Counter