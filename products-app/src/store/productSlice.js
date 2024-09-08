import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: false,
};


export const productSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    // fetchProducts(state, action) {
    //   state.data = action.payload
    // }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getProducts.pending, (state, action) => {
      state.loading = true
    })
    .addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = false
    })
    .addCase(getProducts.error, (state, action) => {
      state.error = true
    })
  }

});

export const { fetchProducts } = productSlice.actions;

// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {
//     const data = await fetch('https://fakestoreapi.com/products')
//     const result = await data.json()
//     dispatch(fetchProducts(result))
//   }
// }

export const getProducts = createAsyncThunk('products/get', async () => {
  const data = await fetch('https://fakestoreapi.com/products')
  const result = await data.json()
  return result
})

export default productSlice.reducer;
