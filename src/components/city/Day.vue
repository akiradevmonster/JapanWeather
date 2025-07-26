<template>
	<v-hover v-slot:default="{ hover }">
		<v-card :elevation="hover ? 24 : 12" color="info darken-2">
			<v-card-title>
				<h2 class="display-1">{{ dailyForecast.dt.toLocaleDateString() }}</h2>
			</v-card-title>

			<v-card-text>
				<v-container>
					<v-row align="center" justify="space-around">
						<v-col cols="6">
							<v-icon large>mdi-thermometer-chevron-down</v-icon>
							{{ dailyForecast.minTemp | formatNumber }}&#8451;
						</v-col>

						<v-col cols="6">
							<v-icon large>mdi-thermometer-chevron-up</v-icon>
							{{ dailyForecast.maxTemp | formatNumber }}&#8451;
						</v-col>

						<v-col cols="6">
							<v-icon large>mdi-water-percent</v-icon>
							{{ dailyForecast.humidity | formatNumber }}%
						</v-col>

						<v-col cols="6">
							<v-icon large>mdi-cloud</v-icon>
							{{ dailyForecast.clouds | formatNumber }}%
						</v-col>

						<v-col cols="6">
							<v-icon large>mdi-weather-windy</v-icon>
							{{ dailyForecast.wind | formatNumber }}&nbsp;m/s
						</v-col>

						<v-col v-if="dailyForecast.rain" cols="6">
							<v-icon large>mdi-water</v-icon>
							<span>{{ dailyForecast.rain | formatNumber }}&nbsp;mm</span>
						</v-col>

						<v-col v-if="dailyForecast.snow" cols="6">
							<v-icon large>mdi-snowflake</v-icon>
							<span>{{ dailyForecast.snow | formatNumber }}&nbsp;mm</span>
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

import { DailyForecast } from "@/utils/types"

@Component({
	name: "Day",
	props: {
		dailyForecast: { type: Object as () => DailyForecast, required: true }
	}
})
export default class Day extends Vue { }
</script>
