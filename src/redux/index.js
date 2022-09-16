import { configureStore } from '@reduxjs/toolkit'
import markDown from './markdown'

export const store = configureStore({
    reducer: {
      markDown
  },
})