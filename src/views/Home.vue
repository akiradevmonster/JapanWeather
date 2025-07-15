<template>
	<svg viewBox="0 0 437.33432 516.01587">
		<router-link
			v-for="prefecture in prefectures"
			:key="prefecture.name"
			:to="{ name: 'City', params: { name: prefecture.capital } }"
		>
			<path v-bind="prefecture">
				<title>{{ prefecture.capital }} ({{ prefecture.name }})</title>
			</path>
		</router-link>
	</svg>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

import { prefectures } from "@/utils/const/prefectures"

@Component({
	name: "Home"
})
export default class Home extends Vue {
	private readonly prefectures = prefectures
}
</script>

<style scoped>
svg {
	display: block;
	margin: 0 auto;
	max-height: 100vh;
}

path {
	fill: var(--v-info-darken2);
	stroke: var(--v-secondary-darken2);
	stroke-width: 0.1;
}

path:hover {
	fill: var(--v-secondary-darken4);
}
</style>
