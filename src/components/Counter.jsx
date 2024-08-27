import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from './../features/counter/counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.value);

  // Change the data by sending actions to the store
  const dispatch = useDispatch();

  return <div>
    <h1>Counter</h1>
    <div>{count}</div>

    <button onClick={() => dispatch(increment())}>+</button>
    <button onClick={() => dispatch(decrement())}>-</button>

  </div>
}

export default Counter;


