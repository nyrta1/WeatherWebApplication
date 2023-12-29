import { WeatherKindEnums } from "../models/WeatherKindEnums";

export default function WeatherIcon({ kind }: any) {
  let iconClassName = 'bi ';

  switch (kind) {
    case WeatherKindEnums.SUNNY:
      iconClassName += 'bi-sun';
      break;
    case WeatherKindEnums.PARTLY_CLOUDY:
      iconClassName += 'bi-cloud-sun';
      break;
    case WeatherKindEnums.CLOUDY:
      iconClassName += 'bi-cloud';
      break;
    case WeatherKindEnums.VERY_CLOUDY:
      iconClassName += 'bi-clouds';
      break;
    case WeatherKindEnums.FOG:
      iconClassName += 'bi-cloud-fog';
      break;
    case WeatherKindEnums.LIGHT_SHOWERS:
      iconClassName += 'bi-cloud-drizzle';
      break;
    case WeatherKindEnums.LIGHT_RAIN:
      iconClassName += 'bi-cloud-drizzle';
      break;
    case WeatherKindEnums.LIGHT_SLEET:
      iconClassName += 'bi-cloud-drizzle';
      break;
    case WeatherKindEnums.THUNDERY_SHOWERS:
      iconClassName += 'bi-cloud-lightning-rain';
      break;
    case WeatherKindEnums.THUNDERY_SNOW_SHOWERS:
      iconClassName += 'bi-cloud-lightning-rain';
      break;
    case WeatherKindEnums.LIGHT_SNOW:
      iconClassName += 'bi-cloud-snow';
      break;
    case WeatherKindEnums.HEAVY_SNOW:
      iconClassName += 'bi-snow';
      break;
    case WeatherKindEnums.LIGHT_SNOW_SHOWERS:
      iconClassName += 'bi-cloud-snow';
      break;
    case WeatherKindEnums.HEAVY_SNOW_SHOWERS:
      iconClassName += 'bi-cloud-snow';
      break;
    case WeatherKindEnums.HEAVY_SHOWERS:
      iconClassName += 'bi-cloud-rain-heavy';
      break;
    case WeatherKindEnums.HEAVY_RAIN:
      iconClassName += 'bi-cloud-rain';
      break;
    default:
      iconClassName += 'bi-question';
  }

  return (
    <>
      <i className={iconClassName}></i>
    </>
  );
}