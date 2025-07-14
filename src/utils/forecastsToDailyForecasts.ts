import { Forecast, DailyForecast } from "./types"
import { sameDay } from "./date"

function forecastsToDailyForecasts(forecasts: Forecast[]): DailyForecast[] {
	const dailyForecasts: DailyForecast[] = []

	for (const forecast of forecasts) {
		const currDate = new Date(forecast.dt * 1000)
		const lastIndex = dailyForecasts.length - 1

		if (lastIndex < 0 || !sameDay(currDate, dailyForecasts[lastIndex].dt)) {
			dailyForecasts.push({
				dt: currDate,
				minTemp: forecast.main.temp,
				maxTemp: forecast.main.temp,
				humidity: forecast.main.humidity,
				clouds: forecast.clouds.all,
				wind: forecast.wind.speed,
				rain: forecast.rain ? forecast.rain["3h"] : undefined,
				snow: forecast.snow ? forecast.snow["3h"] : undefined
			})
		} else {
			dailyForecasts[lastIndex].minTemp = Math.min(dailyForecasts[lastIndex].minTemp, forecast.main.temp)
			dailyForecasts[lastIndex].maxTemp = Math.max(dailyForecasts[lastIndex].maxTemp, forecast.main.temp)
			dailyForecasts[lastIndex].humidity = (dailyForecasts[lastIndex].humidity + forecast.main.humidity) / 2
			dailyForecasts[lastIndex].clouds = (dailyForecasts[lastIndex].clouds + forecast.clouds.all) / 2
			dailyForecasts[lastIndex].wind = (dailyForecasts[lastIndex].wind + forecast.wind.speed) / 2

			if (forecast.rain && forecast.rain["3h"]) {
				if (dailyForecasts[lastIndex].rain) {
					dailyForecasts[lastIndex].rain! += forecast.rain["3h"]
				} else {
					dailyForecasts[lastIndex].rain = forecast.rain["3h"]
				}
			}

			if (forecast.snow && forecast.snow["3h"]) {
				if (dailyForecasts[lastIndex].snow) {
					dailyForecasts[lastIndex].snow! += forecast.snow["3h"]
				} else {
					dailyForecasts[lastIndex].snow = forecast.snow["3h"]
				}
			}
		}
	}

	return dailyForecasts
}

export { forecastsToDailyForecasts }
