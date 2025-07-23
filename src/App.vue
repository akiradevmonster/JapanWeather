<template>
	<v-app>
		<app-snackbar />

		<app-drawer :drawer.sync="drawer" />

		<app-toolbar :drawer.sync="drawer" />

		<v-content>
			<v-container fluid tag="section" class="page-wrapper">
				<v-fade-transition mode="out-in">
					<router-view :key="$route.fullPath" />
				</v-fade-transition>
			</v-container>
		</v-content>

		<app-footer />
	</v-app>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

import AppSnackbar from "./components/app/Snackbar.vue"
import AppDrawer from "./components/app/Drawer.vue"
import AppToolbar from "./components/app/Toolbar.vue"
import AppFooter from "./components/app/Footer.vue"

@Component({
	components: { AppSnackbar, AppDrawer, AppToolbar, AppFooter },
	name: "App"
})
export default class App extends Vue {
	private drawer = false

	beforeCreate() {
		this.$vuetify.theme.dark = true
	}
}
</script>

<style scoped>
.page-wrapper {
	min-height: calc(100vh - 64px - 36px);
}
</style>
