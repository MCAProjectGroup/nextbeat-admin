import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Request } from '../utils/Request';

const initialState = {
    category_list: [],
}

export const getCategoryData = createAsyncThunk(
    "category/getCategoryData",
    async (data={}, {rejectWithValue}) =>{
        try {
          const payload = {
            offset: data.offset || 0,
          } 
          const res = await Request("get", "main/genres?offset=" + payload.offset+"&limit="+(data.offset>=0? 5: 1000) );
          
          return res.data
        } catch (error) {
          rejectWithValue(error.toString());
        }
    }
)

export const slice = createSlice({
  name: 'category',
  initialState,
  reducers: {

  },
  extraReducers:{
    [getCategoryData.fulfilled]:(state, {payload})=>{
        state.category_list = payload.data
    }
  }
})

// Action creators are generated for each case reducer function
export const { } = slice.actions

export default slice.reducer