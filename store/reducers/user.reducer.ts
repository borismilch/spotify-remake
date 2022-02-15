import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from '@/models/.'

interface UserReducerState {
  user: IUser
}

const initialState: UserReducerState = {
  user: null
}

const slice = createSlice({
  name: 'UserReducer',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
    },
    cleanUser: (state) => {
      state.user = null
    }
  }
})

export const userReducer = slice.reducer 

export const { cleanUser, setUser } = slice.actions