import { ITrack } from "@/models/.";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateAlbumTracksReducer {
  tracks: ITrack[]
}

const initialState: CreateAlbumTracksReducer = {
  tracks: []
}

const slice = createSlice({
  name: 'createAlbumTracksreducer',
  initialState,
  reducers: {
    addTrack: (state, action: PayloadAction<ITrack>) => {
      state.tracks.push(action.payload)
    },
    deleteTrack: (state, action: PayloadAction<string>) => {
      state.tracks = state.tracks.filter(item => item.id !== action.payload)
    },
    cleanTracks: (state) => {
      state.tracks = []
    }
  }
})

export const createAlbumTracksReducer = slice.reducer

export const CreateAlbumtracksStore = slice.actions