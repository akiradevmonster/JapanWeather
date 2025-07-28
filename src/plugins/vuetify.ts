import "@mdi/font/css/materialdesignicons.css"
import Vue from "vue"
import Vuetify from "vuetify/lib"

import colours from "vuetify/lib/util/colors"

Vue.use(Vuetify)

export default new Vuetify({
	theme: {
		options: {
			customProperties: true,
		},
		themes: {
			dark: {
				primary: colours.purple.darken1,
				secondary: colours.indigo.darken1,
				accent: colours.yellow.darken1,
				error: colours.red.darken1,
				info: colours.cyan.darken1,
				success: colours.green.darken1,
				warning: colours.orange.darken1
			}
		}
	},
	icons: {
		iconfont: "mdi"
	}
})
