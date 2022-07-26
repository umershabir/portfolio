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
        fontClr: '#ffc83d',
      }
    },
    false: (state) => {
      state.value = {
        bg: '#fff',
        clr: '#3a4443',
        themeOff: '#ffc83d',
      }
    },
  },
})

export const themeChangingReducer = themeChangingSlice.reducer
