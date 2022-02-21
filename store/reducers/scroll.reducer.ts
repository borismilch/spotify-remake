import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RefObject } from "react";

interface ScrollReducerState {
  scrollTop: number
}

const initialState: ScrollReducerState = {
  scrollTop: 0
}

const slice = createSlice({
  name: 'scrollReducer',
  initialState,
  reducers: {
    setScrolledEmeent: (state, action: PayloadAction<number>) => {
      state.scrollTop = action.payload
    }
  }
})

export const scrollReducer = slice.reducer 

export const ScrollReducerctions = slice.actions