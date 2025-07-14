interface Weather {
	main: string,
	description: string,
	icon: string
}
export interface Forecast {
	dt: number,
	main: {
		temp: number,
		humidity: number
	},
	weather: Weather[],
	clouds: { all: number },
	wind: {
		speed: number,
		deg: number
	},
	rain?: {
		"1h"?: number
		"3h"?: number
	},
	snow?: {
		"1h"?: number
		"3h"?: number
	}
}

export interface DailyForecast {
	dt: Date,
	minTemp: number,
	maxTemp: number,
	humidity: number,
	clouds: number,
	wind: number,
	rain?: number,
	snow?: number
}
