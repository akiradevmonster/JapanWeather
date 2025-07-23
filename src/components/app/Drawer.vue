<template>
	<v-navigation-drawer :value="drawer" @input="$emit('update:drawer', $event)" app>
		<v-list dense shaped>
			<v-list-item :to="{ name: 'Home' }" exact>
				<v-list-item-icon>
					<v-icon>mdi-map-search</v-icon>
				</v-list-item-icon>

				<v-list-item-content>
					<v-list-item-title>Home</v-list-item-title>
				</v-list-item-content>
			</v-list-item>

			<v-list-item
				v-for="prefecture in prefectures"
				:key="prefecture.name"
				:to="{name: 'City', params: {name: prefecture.capital}}"
				exact
			>
				<v-list-item-content>
					<v-list-item-title>{{ prefecture.capital }} ({{ prefecture.name }})</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

import { prefectures } from "@/utils/const/prefectures"

@Component({
	name: "Drawer",
	props: {
		drawer: { type: Boolean, required: true }
	}
})
export default class Drawer extends Vue {
	private readonly prefectures = prefectures
}
</script>
