import Vue from "vue"
import Router from "vue-router"

import { lazyLoading } from "./lazyLoading"

Vue.use(Router)

export const router = new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "Home",
			component: lazyLoading("Home")
		},
		{
			path: "/city/:name",
			name: "City",
			component: lazyLoading("City")
		}
	]
})
