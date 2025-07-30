import Vue from "vue"

interface Props {
	colour?: string
	mode?: string
	text: string
	timeout?: number
	visible?: boolean
	x?: string
	y?: string
}

const state = Vue.observable({
	colour: "success",
	mode: "multi-line",
	text: "",
	timeout: 6000,
	visible: false,
	x: "right",
	y: "top"
})

const mutations = {
	hide() {
		state.visible = false
	},

	show({ colour = "success", mode = "multi-line", text, timeout = 6000, x = "right", y = "top" }: Props) {
		state.colour = colour
		state.mode = mode
		state.text = text
		state.timeout = timeout
		state.visible = true
		state.x = x
		state.y = y
	}
}

const actions = {
	hide() {
		mutations.hide()
	},

	show(props: Props) {
		mutations.hide()
		setTimeout(() => {
			mutations.show(props)
		}, 250)
	}
}

export { state, actions }
