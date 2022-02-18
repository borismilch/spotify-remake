import { ITrack } from '@/models/.'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SongReducerState {
 
  currentTrack: ITrack ,
  currentIndex: number,
  queue: ITrack[],
  group: string
}

const initialState: SongReducerState = {

  currentTrack: null,

  currentIndex: 0,
  queue: [],
  group: ''
}

const slice = createSlice({
  name: 'songReducer',
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<ITrack>) => {
      state.currentTrack = action.payload
    },

    setCurrentIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload
    },

    setQueue (state, action: PayloadAction<ITrack[]>) {
      console.log('ququququq', action.payload)
      state.queue = action.payload
    },

    setGroup (state, action: PayloadAction<string>) {
      state.group = action.payload
    },

    goPrevios: (state) => {
      if (state.currentIndex - 1 < 0) {
        state.currentIndex = state.queue.length - 1
        state.currentTrack = state.queue[state.queue.length - 1]
      }
      else {
        state.currentIndex-- 
        state.currentTrack = state.queue[state.currentIndex]
      }
    },

    goNext: (state) => {
      if (state.currentIndex + 1 === state.queue.length) {
        state.currentIndex = 0
        state.currentTrack = state.queue[0]
      }
      else {
        state.currentIndex++
        state.currentTrack = state.queue[state.currentIndex]
      }
    },
  }
})

export const songReducer = slice.reducer 

export const { setCurrentTrack, setCurrentIndex, setQueue, goNext, goPrevios, setGroup } = slice.actions