import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    toast_open: false,
    toast_type:"success",
    toast_message:"Success"
}


export const slice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setTostingData : (state, {payload})=>{
        state.toast_message = payload.message;
        state.toast_open = true;
        state.toast_type = payload.type || "success";
    },
    closeTostingData : (state)=>{
        
        state.toast_open = false
        
    }
  },
  
})

// Action creators are generated for each case reducer function
export const {setTostingData, closeTostingData } = slice.actions

export default slice.reducer