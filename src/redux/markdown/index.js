import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const markdownSlice = createSlice({
  name: 'markdown',
  initialState,
  reducers: {
    setMd: (state, {payload}) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setMd } = markdownSlice.actions

export default markdownSlice.reducer