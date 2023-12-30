import python_weather

async def getCurrentWeather(city):
    async with python_weather.Client(unit=python_weather.METRIC) as client:
        weather = await client.get(city)

        return weather