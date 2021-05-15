import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos } from './index.slice'

export const Home = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  const photos = useSelector(state => state.homePage.media.filter(item => 
    item.data[0].media_type === 'image'  
  ))
  const submitQuery = (e) => {
    e.preventDefault()
    console.log('loading...')
    dispatch(fetchPhotos({ query }))
  }
  return (
    <>
      <form onSubmit={submitQuery}>
        <input value={query} onChange={e => setQuery(e.target.value)} name="query" placeholder="Ex. Saturn" />
        <button type="submit">Search</button>
      </form>
      {
        photos.slice(0, 10).map(photo => 
          <img key={photo.data[0].nasa_id} src={photo.links[0].href} alt={photo.data[0].title} />  
        )
      }
    </>
  )
}

export default Home
