import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Request } from '../utils/Request';

const initialState = {
  song_list: [],
}

export const getSongData = createAsyncThunk(
    "song/getSongData",
    async (data={}, {rejectWithValue}) =>{
        try {
          const payload = {
            offset: data.offset || 0,
          } 
          const res = await Request("get", "main/songs?offset=" + payload.offset+"&limit="+(data.offset>=0? 5: 1000));
          
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