import { combineReducers } from '@reduxjs/toolkit'
import { colorReducer } from './color.reducer'
import { songReducer } from './song.reducer'
import { userReducer } from './user.reducer'
import albumReducer from './album.reducer'
import { audioReducer } from './audio.reducer'
import { searchReducer } from './search.reducer'
import { createAlbumReducer } from './create-album.reducer'
import { createAlbumTracksReducer } from './create-album-tracks.reducer'
import { scrollReducer } from './scroll.reducer'

export const rootReducer = combineReducers({
  color: colorReducer,
  song: songReducer,
  user: userReducer,
  albums: albumReducer,
  audio: audioReducer,
  search: searchReducer,
  createAlbum: createAlbumReducer,
  createAlbumTracks: createAlbumTracksReducer,
  scroll: scrollReducer
})