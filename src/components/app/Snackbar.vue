<template>
	<v-snackbar
		:color="snackbar.colour"
		:multi-line="snackbar.mode === 'multi-line'"
		:vertical="snackbar.mode === 'vertical'"
		:timeout="snackbar.timeout"
		:value="snackbar.visible"
		:right="snackbar.x === 'right'"
		:left="snackbar.x === 'left'"
		:top="snackbar.y === 'top'"
		:bottom="snackbar.y === 'bottom'"
	>
		{{ snackbar.text }}
		<v-btn text icon @click="hide">
			<v-icon>mdi-close</v-icon>
		</v-btn>
	</v-snackbar>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

import { state, actions } from "@/stores/snackbar"

@Component({
	name: "Snackbar"
})
export default class Snackbar extends Vue {
	private readonly snackbar = state

	hide() {
		actions.hide()
	}
}
</script>
