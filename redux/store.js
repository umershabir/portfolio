// dependencies
import { configureStore } from '@reduxjs/toolkit'
import { themeChangingReducer } from './modeSlice'
//consfiguring the store
const store = configureStore({
  reducer: {
    themeChangingReducer,
  },
})

export default store
