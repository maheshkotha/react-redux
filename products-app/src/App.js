import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Dashboard />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Route>
  ))
  return (
    <Provider store={store}>
      <div className='m-10 mt-4'>
        <RouterProvider router={router}/>
      </div>
    </Provider>
  );
}

export default App;
