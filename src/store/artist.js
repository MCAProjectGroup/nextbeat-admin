import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Request } from '../utils/Request';

const initialState = {
  artist_list: [],
}

export const getArtistData = createAsyncThunk(
    "artist/getArtistData",
    async (data={}, {rejectWithValue}) =>{
        try {
          const payload = {
            offset: data.offset || 0,
          } 
          const res = await Request("get", "main/artists?offset=" + payload.offset+"&limit="+(data.offset>=0? 5: 1000));
          
          return res.data
        } catch (error) {
          rejectWithValue(error.toString());
        }
    }
)

export const slice = createSlice({
  name: 'artist',
  initialState,
  reducers: {

  },
  extraReducers:{
    [getArtistData.fulfilled]:(state, {payload})=>{
        state.artist_list = payload.data
    }
  }
})

// Action creators are generated for each case reducer function
export const { } = slice.actions

export default slice.reducer