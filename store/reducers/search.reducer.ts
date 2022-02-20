import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SearchReducerState {
  query: string
}

const initialState: SearchReducerState = {
  query: ''
}

const slice = createSlice({
  name: 'searchRedicer',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    }
  }
})

export const searchReducer = slice.reducer 

export const { setSearch } = slice.actions