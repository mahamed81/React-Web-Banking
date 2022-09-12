import { createSlice } from '@reduxjs/toolkit'

const initialState ={
  tranferInput: ''
}


const transferSlice = createSlice({
  name: 'transfer',
  initialState,
  reducers: {
    setTransfer: (state, action)=>{
        console.log("action trans " + action.payload)
      return { ...state, 
        tranferInput: action.payload 
      
      }


    }
  }
})

export const transferReducer = transferSlice.reducer
export const {setTransfer}= transferSlice.actions;
export const selectTransfer = (state)=>{
  return state.transfer.tranferInput
}


