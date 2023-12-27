import { useEffect, useState } from 'react';
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
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setWeatherInfo(data);
        } catch (error) {
          console.error('Error:', error);
        }
    };

    return (
        <>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-10 col-lg-8 col-xl-6">
                        <div className="mb-3">
                            <label htmlFor="cityName" className="form-label">
                                City Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="cityName"
                                value={cityName || ''}
                                onChange={getCityNameFromInput}
                            />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={fetchData}>
                            Submit
                        </button>
                        {weatherInfo && (
                            <div className="card bg-dark text-white mt-3">
                                <div className="bg-image">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
                                        className="card-img"
                                        alt="weather"
                                    />
                                    <div className="mask"></div>
                                </div>
                                <div className="card-img-overlay text-dark p-5">
                                    <h4 className="mb-0">
                                        {weatherInfo.city}, {weatherInfo.country}
                                    </h4>
                                    <p className="display-2 my-3">{weatherInfo.temperature}°C</p>
                                    <p className="mb-2">
                                        Feels Like: <strong>{weatherInfo.feels_like}°C</strong>
                                    </p>
                                    <h5>{weatherInfo.description}</h5>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
