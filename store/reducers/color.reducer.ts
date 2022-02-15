import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface colorReducerState {
  currentColor: string,

}

const initialState: colorReducerState = {
  currentColor: '#121212'
}

const slice = createSlice ({
  name: 'colorReducer',
  initialState,
  reducers: {
    setCurrentColor: (state, action: PayloadAction<string>) => {
      state.currentColor = action.payload
    },
    setDefaultColor: (state) => {
      state.currentColor = '#121212'
    }
  }
})

export const colorReducer = slice.reducer

export const { setDefaultColor, setCurrentColor } = slice.actions