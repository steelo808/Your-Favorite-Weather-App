import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NavBar from "./components/NavBar";


function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [isLoading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_APIKEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&lat={lat}&lon={lon}&appid=${apiKey}`;

  const searchLocation = (event) => {
    setLoading(true);
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");

      if (isLoading) {
        return <h1>Loading ...</h1>;
      }
    }
  };

  return (
    <div className="app">
      <div className="container">
        <NavBar />

        <div className="main-content">
          <h1 className="center-text uppercase search-text">
            Search Current Weather
          </h1>
          <input
            value={location}
            type="text"
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter Location"
            onKeyDown={searchLocation}
          />

          {/* <button type = "submit" className="btn" >Enter</button> */}

          <div className="location-info">
            <div className="location">
              <h1 className="user-input-location">{data.name}</h1>
            </div>

            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
            </div>

            <div className="description">
              <div className="desc-icon">
                {data.weather ? <p>{data.weather[0].description}</p> : null}
              </div>
            </div>
          </div>
        </div>

        
      </div>
      <div class="bottom-section center-text">
      <div className="feels-like">
          <h1 className="uppercase">feels like</h1>
          {data.main ? <p className="shadow-effect data">{data.main.feels_like.toFixed()}°F</p> : null}
      </div>
      <div className="feels-like">
          <h1 className="uppercase">Low Temp</h1>
          {data.main ? <p className="shadow-effect data">{data.main.temp_min.toFixed()}°F</p> : null}
      </div>
      <div className="feels-like">
          <h1 className="uppercase">High Temp</h1>
          {data.main ? <p className ="shadow-effect data">{data.main.temp_max.toFixed()}°F</p> : null}
      </div>
        </div>
    </div>
  );
}

export default App;
