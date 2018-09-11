const ParticleParametersExit = {
particles: {
	move: {
		enable: true,
		speed: 5,
		detect_on: "canvas",
		out_mode: "out"
	},

	shape: {
		image: {
			type: "circle"
		}
	},

	line_linked: {
		enable: false
	},

	size: {
		value:0
	},

	number: {

		value: 250,
		density: {
			enable: true,
			value_area: 1000
		}
}, opacity: {
	opacity: 0,
	anim: {

		enable: true,
		speed: 1,
		opacity_min: 0,
		sync: true
	}
},
}
}

  export default ParticleParametersExit;