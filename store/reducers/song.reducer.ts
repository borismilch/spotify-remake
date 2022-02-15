import { ITrack } from '@/models/.'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SongReducerState {
  volume: number,
  currentTime: number,
  fullTime: number,
  currentTrack: ITrack ,
  paused: boolean,
  currentIndex: number
}

const initialState: SongReducerState = {
  volume: 40,
  currentTime: 0,
  fullTime: 0,
  currentTrack: null,
  paused: false,
  currentIndex: 0
}

const slice = createSlice({
  name: 'songReducer',
  initialState,
  reducers: {
    setCurrentTime: (state, action: PayloadAction<number>) => {
       state.currentTime = action.payload
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload
    },

    setFullTime: (state, action: PayloadAction<number>) => {
      state.fullTime = action.payload
    },

    setCurrentTrack: (state, action: PayloadAction<ITrack>) => {
      state.currentTrack = action.payload
    },

    setPaused: (state, action: PayloadAction<boolean>) => {
      state.paused = action.payload
    },

    setCurrentIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload
    }
  }
})

export const songReducer = slice.reducer 

export const { setCurrentTime, setFullTime,setVolume, setCurrentTrack, setPaused, setCurrentIndex } = slice.actions