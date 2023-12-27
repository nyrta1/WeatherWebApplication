export class WeatherData {
    city: string;
    country: string;
    date: Date;
    description: string;
    feels_like: number;
    humidity: number;
    kind: string;
    temperature: number;
    visibility: number;
    wind_speed: number;
  
    constructor(
      city: string,
      country: string,
      date: Date,
      description: string,
      feels_like: number,
      humidity: number,
      kind: string,
      temperature: number,
      visibility: number,
      wind_speed: number
    ) {
      this.city = city;
      this.country = country;
      this.date = date;
      this.description = description;
      this.feels_like = feels_like;
      this.humidity = humidity;
      this.kind = kind;
      this.temperature = temperature;
      this.visibility = visibility;
      this.wind_speed = wind_speed;
    }
  }