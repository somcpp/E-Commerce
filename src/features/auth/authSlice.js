import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';

import { createUser,checkUser, updateUser } from './authAPI';
import { signOut } from './authAPI';
const initialState = {
  value:0,
  status: 'idle',
  loggedInUser: null,
  status:'idle',
  error:null
};
export const updateUserAsync = createAsyncThunk(
  'user/updateUser',
  async (update) =>{
    const response = await updateUser(update);
    console.log('slice: ',response)
    return response.data;
  }
)


export const createUserAsync = createAsyncThunk(
  'user/createUser',
  async (userData) =>{
    const response = await createUser(userData)
    return response.data;
  }
)
export const checkUserAsync  = createAsyncThunk(
  'user/checkUser',
  async (loginInfo,{rejectWithValue}) =>{
    try{
      const response = await checkUser(loginInfo)
      return response.data;
    }catch(error){
      console.log(error)
      return rejectWithValue(error);
    }
  }
)
export const signOutAsync = createAsyncThunk(
  'user/signOut',
  async (loginInfo) => {
    const response = await signOut(loginInfo);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUserAsync.fulfilled,(state,action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.payload;
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(signOutAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signOutAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = null;
      })
  },
});

// export const { increment } = userSlice.actions;


export const selectLoggedInUser = (state)=>state.auth.loggedInUser;
export const selectError = (state)=>state.auth.error;


export default userSlice.reducer;
