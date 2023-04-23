import { configureStore } from '@reduxjs/toolkit'
import artist from "./artist";
import category from './category';
import song from './song';
export const store = configureStore({
  reducer: {
    artist,
    category,
    song
  },
})