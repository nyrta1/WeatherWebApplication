import { useState } from 'react';
import { WeatherData } from '../models/WeatherData';

export default function WeatherCard() {
    const [weatherInfo, setWeatherInfo] = useState<WeatherData | null>(null);
    const [cityName, setCityName] = useState<string | null>('Astana');

    const getCityNameFromInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCityName(event.target.value);
    };

    const fetchData = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:5000/weather/${cityName}/now`);
          const data = await response.json();
          setWeatherInfo(data);
        } catch (error) {
          console.error('Error:', error);
        }
    };

    return (
        <>
            {/*REFERENCE SITE: https://bbbootstrap.com/snippets/complete-weather-report-search-bar-32715352*/}
            <div className="container-fluid px-1 px-sm-2 py-5 mx-auto">
                <div className="row d-flex justify-content-center">
                    <div className="row card0">
                        <div className="card1 col-lg-8 col-md-7">
                            <small>WeatherApp</small>
                            <div className="text-center">
                                <img className="image mt-5" src="https://i.imgur.com/M8VyA2h.png" />
                            </div>
                            <div className="row px-3 mt-3 mb-3">
                                <h1 className="large-font mr-3">{weatherInfo?.temperature}°C</h1>
                                <div className="d-flex flex-column mr-3">
                                    <h2 className="mt-3 mb-0">{weatherInfo?.city}, {weatherInfo?.country}</h2>
                                    <small>{weatherInfo?.date}</small>
                                </div>
                                <div className="d-flex flex-column text-center">
                                    <h3 className="bi bi-brightness-high mt-4"></h3>
                                    <small>{weatherInfo?.kind}</small>
                                </div>
                            </div>
                        </div>
                        <div className="card2 col-lg-4 col-md-5">
                            <div className="row px-3">
                                <input type="text" name="location" placeholder="Another location" className="col-9 mb-5" value={cityName || ''} onChange={getCityNameFromInput} />
                                <div className="col-2 bi bi-search mb-5 mr-0 text-center" onClick={fetchData}></div>
                            </div>
                            <div className="mr-5">
                                <p>Weather Details</p>
                                <div className="row px-3">
                                    <p className="light-text">Feels like</p>
                                    <p className="ml-auto">{weatherInfo?.feels_like}°C</p>
                                </div>
                                <div className="row px-3">
                                    <p className="light-text">Humidity</p>
                                    <p className="ml-auto">{weatherInfo?.humidity}%</p>
                                </div>
                                <div className="row px-3">
                                    <p className="light-text">Wind</p>
                                    <p className="ml-auto">{weatherInfo?.wind_speed} km/h</p>
                                </div>
                                <div className="row px-3">
                                    <p className="light-text">Wind Direction</p>
                                    <p className="ml-auto">{weatherInfo?.wind_direction}</p>
                                </div>
                                <div className="row px-3">
                                    <p className="light-text">Pressure</p>
                                    <p className="ml-auto">{weatherInfo?.pressure} atm</p>
                                </div>
                                <div className="row px-3">
                                    <p className="light-text">Rain</p>
                                    <p className="ml-auto">{weatherInfo?.precipitation}mm</p>
                                </div>

                                <div className="line mt-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
