import { configureStore } from '@reduxjs/toolkit'
import artist from "./artist";
import category from './category';
export const store = configureStore({
  reducer: {
    artist,
    category
  },
})