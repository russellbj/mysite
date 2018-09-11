const ParticleParametersMusic = {
particles: {
	color: {
		value: "#000000"
	},
	move: {
		enable: true,
		speed: 5,
		detect_on: "canvas",
		out_mode: "out"
	},

	line_linked: {
		enable: false
	},

	opacity: {
		value: 1,
		random: true,
	},

	size: {
		value: 2
	},

	number: {
		value: 150,
		density: {
			enable: true,
			value_area: 1000
		}
},



},
canvas: {
	w: "500px",
	h: "500px"
},
"interactivity": {
	"modes": {
        "bubble": {
	        "distance":200,
	        "size": 3,
	        "opacity": 10,
	        
       	},
       	"repulse": {
       		"distance": 300
       	},
       	"grab":{
       		"distance": 300
       	}
        }}}

  export default ParticleParametersMusic;