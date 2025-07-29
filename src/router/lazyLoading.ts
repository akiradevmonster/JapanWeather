export const lazyLoading = (name: string) => () =>
	import(`@/views/${name}.vue`)
