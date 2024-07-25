import React, { useState, useEffect } from "react";

const DestinationWeather = ({ location }) => {
  const [cityWeather, setCityWeather] = useState(null);
  useEffect(() => {
    const fetchWeather = async () => {
      if (!location) return;
      const API_KEY = "f8d0459764a8d53ac96ae14ca3993acb";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
          setCityWeather(data);
        } else {
          setCityWeather(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setCityWeather(null);
      }
    };

    if (location) {
      fetchWeather();
    }
  }, [location]);
  // Show icon
  const iconUrl = cityWeather?.weather?.[0]?.icon
    ? `http://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`
    : null;
  return (
    <>
      {/* <div className=""> */}
        {iconUrl && <img  className="text-white w-[50px]  " src={iconUrl} alt="Weather icon" />}
        {cityWeather && (
          <div>
            <p>{cityWeather.main.temp} °C</p>
          </div>
        )}
      {/* </div> */}
    </>
  );
};

export default DestinationWeather;
