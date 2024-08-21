# react-redux


- import { configureStore } from @reduxjs/toolkit
    import counterReducer from './counterSlice';
    
    const export store = configureStore({
        reducer: {
            counter: counterReducer
        }
    })


* Create Slice
    - import { createSlice } from '@reduxjs/toolkit'

    const initialState = {
        count: 0
    }
    const export counterSlice = ({
        name: 'counter',
        initialState,
        reducers: {
            increment: (stage) => state.count += 1 
        }
    })

    export const { increment } = counterSlice.actions;

    export default counterSlice.reducer


# usage
* Provider import from 'react-redux'

import { Provider } from 'react-redux'
import { store } from './path'

<Provider store={store}>
    {children}
</Provider>


* Use State and Action in React Components

import { useSelector, useDispatch } from 'react-redux'

const count = useSelector((state) => state.counter.count)
const Component = () => {

    const dispatch = useDispatch()
    return <div></div>
}