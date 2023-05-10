import { configureStore } from '@reduxjs/toolkit'
import artist from "./artist";
import category from './category';
import song from './song';
import album from './album';
import common from './common';
export const store = configureStore({
  reducer: {
    artist,
    category,
    song,
    album,
    common,
  },
})