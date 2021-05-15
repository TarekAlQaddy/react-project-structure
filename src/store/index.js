import { configureStore } from '@reduxjs/toolkit'
import homePage from '../pages/home/index.slice'

export default configureStore({
  reducer: {
    homePage
  }
})