import { createSlice } from '@reduxjs/toolkit'

export const themeChangingSlice = createSlice({
  name: 'themeChanging',
  initialState: {
    value: '#fff',
  },
  reducers: {
    true: (state) => {
      state.value = {
        bg: '#1F2937',
        clr: '#fff',
      }
    },
    false: (state) => {
      state.value = {
        bg: '#fff',
        clr: '#3a4443',
      }
    },
  },
})

export const themeChangingReducer = themeChangingSlice.reducer
