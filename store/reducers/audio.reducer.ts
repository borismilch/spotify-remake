import { createSlice } from "@reduxjs/toolkit";

import { PayloadAction } from '@reduxjs/toolkit'

interface AudioReducerState {
  volume: number,
  currentTime: number,
  fullTime: number,
  paused: boolean
  
}

const initialState: AudioReducerState = {
  volume: 40,
  currentTime: 0,
  fullTime: 0,
  paused: false
}

const slice = createSlice({
  name: 'audioReducr',
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

    setPaused: (state, action: PayloadAction<boolean>) => {
      state.paused = action.payload
    },

  }
})

export const audioReducer = slice.reducer 

export const { setCurrentTime, setFullTime, setPaused, setVolume } = slice.actions