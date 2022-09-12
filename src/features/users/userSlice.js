import { createSlice } from '@reduxjs/toolkit'

const initialState ={
  currentUser: null
}


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action)=>{
        console.log("action " + action.payload)
      return { ...state, 
        currentUser: action.payload,
      }
    }
  }
})

export const userReducer = userSlice.reducer
export const {setCurrentUser, setBalance}= userSlice.actions;
export const selectCurrentUser = (state)=>{
  return state.user.currentUser
}
export const getBalance = (state)=>{
    const {balance}={
      ...state,
      balance: state.user.currentUser.movements
      .reduce((acc, mov) => acc + mov, 0)
    }
  return balance;
  

}

