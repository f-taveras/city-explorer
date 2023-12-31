import { useState } from 'react'
import Header from './components/Header.jsx'
import CityForm from './components/CityForm.jsx'
import MAP from './components/Map.jsx'
import axios from 'axios'



const API_KEY = import.meta.env.VITE_API_KEY;

function App() {

  const [city, setCity] = useState('')
  const [latitude,setLatitude] = useState(null)
  const [longitude,setLongitude] = useState(null)

  function changeCity(newCity) {

    getLocation(newCity);
  }

  async function getLocation(cityName) {

    let url = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${cityName}&format=json`;
    try {
      let response = await axios.get(url)
      setCity(response.data[0].display_name)

      setLatitude(response.data[0].lat);
      setLongitude(response.data[0].lon);

    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <Header />
      <CityForm city={city} handleChangeCity={changeCity} />
      <MAP latitude={latitude} longitude={longitude} />

    </>
  )
}

export default App
