import { useState } from 'react';
import { WeatherData } from '../models/WeatherData';
import WeatherIcon from './weather_icon';

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

    function getLinearGradientColor(kind: string | undefined): string {
        switch (kind) {
            case 'Sunny':
                return 'weather-sunny';
            case 'Partly cloudy':
                return 'weather-partly-cloudy';
            case 'Cloudy':
                return 'weather-cloudy';
            case 'Very Cloudy':
                return 'weather-very-cloudy';
            case 'Fog':
                return 'weather-fog';
            case 'Light Showers':
            case 'Light Sleet Showers':
            case 'Light Sleet':
            case 'Thundery Showers':
            case 'Light Rain':
            case 'Heavy Showers':
            case 'Heavy Rain':
            case 'Thundery Heavy Rain':
                return 'weather-light-showers';
            case 'Light Snow':
            case 'Heavy Snow':
            case 'Light Snow Showers':
            case 'Heavy Snow Showers':
            case 'Thundery Snow Showers':
                return 'weather-light-snow';
            default:
                return 'weather-sunny';
        }
    }
    

    return (
        <>
            {/*REFERENCE SITE: https://bbbootstrap.com/snippets/complete-weather-report-search-bar-32715352*/}
            <div className="video-container">
                <video autoPlay muted loop>
                    <source src="./src/assets/videos/video.mp4" type="video/mp4" />
                </video>
                <div className="caption">
                    <div className="container-fluid px-1 px-sm-2 py-2 mx-auto vh-100">
                        <div className="row d-flex justify-content-center">
                            <div className="row card0">
                                <div className={`card1 col-lg-8 col-md-7 ${getLinearGradientColor(weatherInfo?.kind)} `}>
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
                                        <div className="d-flex flex-column text-center mt-5">
                                            <WeatherIcon kind={weatherInfo?.kind}></WeatherIcon>
                                            <small>{weatherInfo?.kind}</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="card2 col-lg-4 col-md-5">
                                    <div className="row px-3">
                                        <input type="text" name="location" placeholder="Another location" className="col-9 mb-4" value={cityName || ''} onChange={getCityNameFromInput} />
                                        <div className="col-2 bi bi-search mb-4 mr-0 text-center" onClick={fetchData}></div>
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
                                            <p className="ml-auto">{(Number((weatherInfo?.wind_speed! / 3.6).toFixed(1)))} m/s</p>
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
                                    <div className="d-flex justify-content-around align-items-center pt-3">
                                        <div className="flex-column">
                                            <i className="fas fa-minus"></i>
                                        </div>
                                        <div className="flex-column">
                                            <p className="small mb-1">Sun</p>
                                            <p className="small mb-0"><strong>0°C</strong></p>
                                        </div>
                                        <div className="flex-column">
                                            <p className="small mb-1">Mon</p>
                                            <p className="small mb-0"><strong>0°C</strong></p>
                                        </div>
                                        <div className="flex-column">
                                            <p className="small mb-1">Tue</p>
                                            <p className="small mb-0"><strong>0°C</strong></p>
                                        </div>
                                        <div className="flex-column">
                                            <p className="small mb-1">Wed</p>
                                            <p className="small mb-0"><strong>0°C</strong></p>
                                        </div>
                                        <div className="flex-column">
                                            <p className="small mb-1">Thu</p>
                                            <p className="small mb-0"><strong>0°C</strong></p>
                                        </div>
                                        <div className="flex-column">
                                            <p className="small mb-1">Thu</p>
                                            <p className="small mb-0"><strong>0°C</strong></p>
                                        </div>
                                        <div className="flex-column">
                                            <i className="fas fa-minus"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}