<template>
	<v-hover v-slot:default="{ hover }">
		<v-card :elevation="hover ? 24 : 12" :loading="!forecast" color="info darken-1">
			<v-card-title>
				<h2 class="display-1">Now</h2>
			</v-card-title>

			<v-card-text v-if="forecast">
				<v-container>
					<v-row align="center" justify="space-around">
						<v-col cols="12" md="6" xl="4">
							<v-icon large>mdi-thermometer-lines</v-icon>
							{{ forecast.main.temp }}&#8451;
						</v-col>

						<v-col cols="12" md="6" xl="4">
							<v-icon large>mdi-water-percent</v-icon>
							{{ forecast.main.humidity }}%
						</v-col>

						<v-col
							v-for="weather in forecast.weather"
							:key="weather.main"
							cols="12"
							md="6"
							xl="4"
							class="d-flex"
						>
							<v-img
								:src="`http://openweathermap.org/img/wn/${weather.icon}@2x.png`"
								max-width="40"
								max-height="40"
							/>
							{{ weather.main }} ({{ weather.description }})
						</v-col>

						<v-col cols="12" md="6" xl="4">
							<v-icon large>mdi-cloud</v-icon>
							{{ forecast.clouds.all }}%
						</v-col>

						<v-col cols="12" md="6" xl="4">
							<v-icon large>mdi-weather-windy</v-icon>
							<v-icon small :style="`transform:rotate(${forecast.wind.deg}deg);`">mdi-navigation</v-icon>
							{{ forecast.wind.speed }}&nbsp;m/s
						</v-col>

						<v-col
							v-if="forecast.rain && (forecast.rain['1h'] || forecast.rain['3h'])"
							cols="12"
							md="6"
							xl="4"
						>
							<v-icon large>mdi-water</v-icon>
							<span v-if="forecast.rain['1h']">{{ forecast.rain['1h'] }}&nbsp;mm for the last 1h</span>
							<span v-if="forecast.rain['3h']">{{ forecast.rain['3h'] }}&nbsp;mm for the last 3h</span>
						</v-col>

						<v-col
							v-if="forecast.snow && (forecast.snow['1h'] || forecast.snow['3h'])"
							cols="12"
							md="6"
							xl="4"
						>
							<v-icon large>mdi-snowflake</v-icon>
							<span v-if="forecast.snow['1h']">{{ forecast.snow['1h'] }}&nbsp;mm for the last 1h</span>
							<span v-if="forecast.snow['3h']">{{ forecast.snow['3h'] }}&nbsp;mm for the last 3h</span>
						</v-col>
					</v-row>
				</v-container>
			</v-card-text>
		</v-card>
	</v-hover>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

import { Forecast } from "@/utils/types"

@Component({
	name: "Now",
	props: {
		forecast: { type: Object as () => Forecast, required: true }
	}
})
export default class Now extends Vue { }
</script>
