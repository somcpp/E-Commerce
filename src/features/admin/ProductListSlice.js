// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchAllProducts,fetchBrands,fetchCategories,fetchProductById } from './ProductListAPI';
// import { fetchProductByFilters } from './ProductListAPI';

// const initialState = {
//   products: [],
//   brands: [],
//   categories: [],
//   status: 'idle',
//   totalItems:0,
//   selectedProduct:null
// };
// export const fetchAllProductByIdAsync = createAsyncThunk(
//   'product/fetchProductById',
//   async (id) => {
//     const response = await fetchProductById(id);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

// export const fetchAllProductsAsync = createAsyncThunk(
//   'product/fetchAllProducts',
//   async () => {
//     const response = await fetchAllProducts();
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );
// export const updateProductAsync = createAsyncThunk(
//   'product/update',
//   async (update) => {
//     const response = await updateProduct(update);
//     return response.data;
//   }
// );
// export const fetchBrandsAsync = createAsyncThunk(
//   'product/fetchBrands',
//     async () => {
//       const response = await fetchBrands();
//       return response.data;
//     }
// )
// export const fetchcategoriesAsync = createAsyncThunk(
//   'product/fetchCategories',
//     async () => {
//       const response = await fetchCategories();
//       console.log(response)
//       return response.data;
//     }
// )
// export const fetchProductsByFiltersAsync = createAsyncThunk(
//   'product/fetchProductsByFilters',
//   async ({filter,sort,pagination}) => {
//     console.log("slice: ",pagination)
//     const response = await fetchProductByFilters(filter,sort,pagination);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );



// export const productSlice = createSlice({
//   name: 'product',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAllProductsAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
//         state.status = 'idle';
//         state.products = action.payload;
//       })
//       .addCase(fetchProductsByFiltersAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
//         state.status = 'idle';
//         state.products = action.payload.products;
//         state.totalItems = action.payload.totalItems;
//       })
//       .addCase(fetchBrandsAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchBrandsAsync.fulfilled, (state, action) => {
//         state.status = 'idle';
//         state.brands = action.payload;
//       })
//       .addCase(fetchcategoriesAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchcategoriesAsync.fulfilled, (state, action) => {
//         state.status = 'idle';
//         state.categories = action.payload;
//       })
//       .addCase(fetchAllProductByIdAsync.pending, (state) => { 
//         state.status = 'loading';
//       })
//       .addCase(fetchAllProductByIdAsync.fulfilled, (state, action) => {
//         state.status = 'idle';
//         state.selectedProduct = action.payload;
//       })
//       .addCase(createProductAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(createProductAsync.fulfilled, (state,action) => {
//         state.status = 'idle';
//         state.products.push(action.payload);
//       }) 
//       .addCase()
//   },
// });

// export const { increment } = productSlice.actions;

// export const selectAllProducts = (state) => state.product.products;
// export const selectbrands = (state) => state.product.brands;
// export const selectcategories = (state) => state.product.categories;
// export const selectTotalItems = (state) => state.product.totalItems;
// export const selectProductById = (state) => state.product.selectedProduct;

// export default productSlice.reducer;
