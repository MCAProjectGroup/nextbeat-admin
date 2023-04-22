import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Request } from '../utils/Request';

const initialState = {
  song_list: [],
}

export const getSongData = createAsyncThunk(
    "song/getSongData",
    async (_, {rejectWithValue}) =>{
        try {
          const res = await Request("get", "main/songs");
          
          return res.data
        } catch (error) {
          rejectWithValue(error.toString());
        }
    }
)

export const slice = createSlice({
  name: 'song',
  initialState,
  reducers: {

  },
  extraReducers:{
    [getSongData.fulfilled]:(state, {payload})=>{
        state.song_list = payload.data
    }
  }
})

// Action creators are generated for each case reducer function
export const { } = slice.actions

export default slice.reducer