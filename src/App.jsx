import { useState } from 'react'
import Header from './components/Header'
import CityForm from './components/CityForm'
import axios from 'axios'


const API_KEY = import.meta.env.VITE_API_KEY;

console.log(API_KEY)

function App() {

  const [city, setCity] = useState('')

  function changeCity(newCity){
    
    getLocation(newCity);

    console.log("Changing to,", newCity)
  }

  async function getLocation(cityName){

    let url = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${cityName}&format=json`;
    try {
      let response = await axios.get(url)
      setCity(response.data[0].display_name)

    } catch(error){
      console.log(error.message)
    }

    
  }
  
  return (
    <>
      <Header />
      <CityForm city={city} handleChangeCity={changeCity}/>
      
    </>
  )
}

export default App
