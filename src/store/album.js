import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Request } from '../utils/Request';

const initialState = {
  album_list: [],
  song_list: {}
}

export const getAlbumData = createAsyncThunk(
    "album/getAlbumData",
    async (data={}, {rejectWithValue}) =>{
        try {
          const payload = {
            offset: data.offset || 0,
          } 
          const res = await Request("get", "main/albums?offset=" + payload.offset+"&limit="+(data.offset>=0? 5: 1000));
          
          return res.data
        } catch (error) {
          rejectWithValue(error.toString());
        }
    }
)

export const getAlbumSongData = createAsyncThunk(
  "album/getAlbumSongData",
  async (data="", {rejectWithValue}) =>{
      try {
        const payload = {
          offset: data.offset || 0,
        } 
        const res = await Request("get", `main/albums/${data}?offset=${payload.offset}&limit=${(data.offset>=0? 5: 1000)}`);
        
        return res.data
      } catch (error) {
        rejectWithValue(error.toString());
      }
  }
)
export const slice = createSlice({
  name: 'album',
  initialState,
  reducers: {

  },
  extraReducers:{
    [getAlbumData.fulfilled]:(state, {payload})=>{
        state.album_list = payload.data
    },
   [ getAlbumSongData.fulfilled]:(state, {payload})=>{
      // console.log();
      state.song_list = payload.data
    }
  }
})

// Action creators are generated for each case reducer function
export const { } = slice.actions

export default slice.reducer