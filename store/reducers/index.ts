import { combineReducers } from '@reduxjs/toolkit'
import { colorReducer } from './color.reducer'
import { songReducer } from './song.reducer'
import { userReducer } from './user.reducer'
import albumReducer from './album.reducer'

export const rootReducer = combineReducers({
  color: colorReducer,
  song: songReducer,
  user: userReducer,
  albums: albumReducer
})