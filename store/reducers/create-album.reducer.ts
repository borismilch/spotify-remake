import { IAlbum } from "@/models/.";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateAlbumReducerState {
  newAlbum: IAlbum | null
  
}

const initialState: CreateAlbumReducerState = {
   newAlbum: null
}

const slice = createSlice({
  name: 'createAlbumReducer',
  initialState, 
  reducers: {
    setAlbum: (state, action: PayloadAction<IAlbum>) => {
      state.newAlbum = action.payload
    },
    clearAlbum: (state) => {
      state.newAlbum = null
    },

    updateAlbum: (state, action: PayloadAction<any>) => {
      state.newAlbum = {...state.newAlbum, ...action.payload}
    },

  }
})

export const createAlbumReducer = slice.reducer 

export const CreatealbumActions = slice.actions