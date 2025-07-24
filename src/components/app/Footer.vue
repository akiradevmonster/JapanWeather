<template>
	<v-footer app>
		<span class="caption">
			<v-icon small>mdi-code-braces</v-icon>&nbsp;with
			<v-icon color="error" small>mdi-heart</v-icon>&nbsp;by
			<a href="https://github.com/OneWinged-Eagle" target="_blank">OneWinged-Eagle</a>.
		</span>

		<v-spacer />

		<span class="caption">
			<a href="https://github.com/OneWinged-Eagle/JapanWeather" target="_blank">
				<v-icon>mdi-github-circle</v-icon>
				<sup>
					<v-icon x-small>mdi-open-in-new</v-icon>
				</sup>
			</a>
		</span>
	</v-footer>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

@Component({
	name: "Footer"
})
export default class Footer extends Vue { }
</script>
