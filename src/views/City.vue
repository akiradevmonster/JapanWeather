<template>
	<v-container>
		<v-row align="center" justify="center">
			<v-col cols="auto">
				<h1 class="display-3 font-weight-bold d-inline mr-1">{{ name }}</h1>

				<a v-if="wikipedia" :href="wikipedia" target="_blank">
					<v-icon x-large>mdi-wikipedia</v-icon>
					<sup>
						<v-icon x-small>mdi-open-in-new</v-icon>
					</sup>
				</a>
			</v-col>
		</v-row>

		<v-row v-if="forecast" align="center" justify="center">
			<v-col cols="auto">
				<now :forecast="forecast" />
			</v-col>
		</v-row>

		<v-row v-if="dailyForecasts" align="center" justify="space-around">
			<v-col
				v-for="dailyForecast in dailyForecasts"
				:key="dailyForecast.dt.getTime()"
				cols="12"
				sm="6"
				md="4"
				lg="3"
				xl="2"
			>
				<day :dailyForecast="dailyForecast" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

import Now from "@/components/city/Now.vue"
import Day from "@/components/city/Day.vue"
import { ApiCore } from "@/services/api/ApiCore"
import { forecastsToDailyForecasts } from "@/utils/forecastsToDailyForecasts"
import { Forecast, DailyForecast } from "@/utils/types"
import { prefectures } from "@/utils/const/prefectures"

@Component({
	components: { Now, Day },
	name: "City"
})
export default class City extends Vue {
	private name = ""
	private forecast: Forecast | null = null
	private dailyForecasts: DailyForecast[] | null = null
	private readonly apiCore = new ApiCore()

	get wikipedia(): string {
		return prefectures.find((p) => p.capital === this.name)!.wikipedia
	}

	created() {
		this.name = this.$route.params.name

		this.apiCore.getWeather(this.name).then((forecast) => {
			this.forecast = forecast ? forecast : null
		})

		this.apiCore.getForecast(this.name).then((forecasts) => {
			this.dailyForecasts = forecasts ? forecastsToDailyForecasts(forecasts) : null
		})
	}
}
</script>
