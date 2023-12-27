import weather
import asyncio
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/weather/<city>/now', methods=['GET'])
def get_weather_now(city):
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    result = loop.run_until_complete(weather.getCurrentWeather(city))

    weather_dict = {
        "temperature": result.current.temperature,
        "humidity": result.current.humidity,
        "feels_like": result.current.feels_like,
        "wind_speed": result.current.wind_speed,
        "visibility": result.current.visibility,
        "date": result.current.date,
        "description": result.current.description,
        "kind": str(result.current.kind),
        "city": result.nearest_area.name,
        "country": result.nearest_area.country
    }
    return jsonify(weather_dict)