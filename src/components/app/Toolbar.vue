<template>
	<v-app-bar app fixed>
		<v-app-bar-nav-icon @click.native.stop="$emit('update:drawer', !drawer)" />

		<v-toolbar-title>Japan Weather</v-toolbar-title>

		<v-spacer />

		<v-autocomplete
			label="Search Japanese city"
			:items="capitals"
			:value="$route.params.name"
			color="accent"
			item-color="accent"
			hide-details
			single-line
			@change="goTo"
		/>

		<v-spacer />
	</v-app-bar>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

import { prefectures } from "@/utils/const/prefectures"

@Component({
	name: "Toolbar",
	props: {
		drawer: { type: Boolean, required: true }
	}
})
export default class Toolbar extends Vue {
	get capitals(): string[] {
		return prefectures.map((p) => p.capital)
	}

	goTo(capital: string) {
		this.$router.push({ name: "City", params: { name: capital } })
	}
}
</script>
