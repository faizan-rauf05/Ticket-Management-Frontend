import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading : null,
  error : null,
  user : null
}

const Authslice = createSlice({
  name : 'Authslice',
  initialState : initialState,
  reducers:{
    SetUser:(state, action)=>{
      state.user = action.payload;
    },
    Logout : (state,action)=>{
      state.error = null,
      state.loading = null,
      state.user = null
    }
  }
})

export const {SetUser, Logout} = Authslice.actions;

export default Authslice.reducer;