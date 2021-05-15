import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { searchPhotos } from '../../api/photos'

const fetchPhotos = createAsyncThunk(
  'photos/fetchPhotos',
  async ({ query }) => {
    const response = await searchPhotos({ params: { q: query } })
    return response.data
  }
)

export const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    media: [],
    currentState: 'idle'
  },
  reducers: {},
  extraReducers: {
    [fetchPhotos.pending] (state) {
      state.currentState = 'pending'
    },
    [fetchPhotos.fulfilled] (state, { payload: { collection: { items } } }) {
      state.currentState = 'idle'
      state.media = items
    }
  }
})

export const { setPhotos } = photosSlice.actions
export { fetchPhotos }
export default photosSlice.reducer
