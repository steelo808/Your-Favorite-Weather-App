import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import NavBar from './components/NavBar';


function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&lat={lat}&lon={lon}&appid=928ba6458be5275b4da9ec4f2d94a127`;

  const searchLocation = (event) =>{
    if(event.key === 'Enter') {
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  
  return (
    <div className ="app">
    <div className = 'container'>
    <NavBar />
    
    
    <div className="main-content">
    <input value={location} type="text"  onChange = {event => setLocation(event.target.value)} placeholder="Enter Location" onKeyDown={searchLocation}/>


    <div className ="location-info">

    <div className ='location'>
      <h1>{data.name}</h1>
    </div>

    <div className='temp'>
      {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
    </div>

    <div className ='description'>
    <div className="desc-icon">
      {data.weather ? <h1>{data.weather[0].description}</h1> : null}
    </div>
    </div>
    </div>

    </div>
    </div>
    </div>
  )
}

export default App
