import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAlbum } from '@/models/.'

interface AlbumReducerState {
  albums:IAlbum[]
}

const initialState: AlbumReducerState = {
  albums: []
}

const slice = createSlice({
  name: 'AlbumReducer',
  initialState,
  reducers: {
    addNewAlbum: (state, action: PayloadAction<IAlbum>) => {
      state.albums[action.payload.id] = action.payload 

      localStorage.setItem('albums', JSON.stringify(state.albums))
    },

    loadAlbums: (state) => {
      const albums = JSON.parse(localStorage.getItem('albums'))

      if (albums) state.albums = albums
    },

    setAlbums: (state, action: PayloadAction<IAlbum[]>) => {
      console.log(action.payload, 'from store')
      state.albums = action.payload

      localStorage.setItem('albums', JSON.stringify(state.albums))
    }
  }
})

export default slice.reducer 

export const {addNewAlbum, loadAlbums, setAlbums} = slice.actions