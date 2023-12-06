import { useState } from 'react'
import Header from './components/Header.jsx'
import CityForm from './components/CityForm.jsx'
import axios from 'axios'


const API_KEY = import.meta.env.VITE_API_KEY;

function App() {

  const [city, setCity] = useState('')

  function changeCity(newCity){
    setCity(newCity)
    getLocation(newCity);
  }

  async function getLocation(cityName){

    let url = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${cityName}&format=json`;
    try {
      let data = axios.get(url)

    } catch(error){
      console.log(error.message)
    }

    setCity(newCity)
  }
  
  return (
    <>
      <Header />
      <CityForm city={city} handleChangeCity={changeCity}/>
      
    </>
  )
}

export default App
