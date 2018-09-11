const ParticleParametersLanding = {
particles: {
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
		opacity: 1
	},

	size: {
		value: 2
	},

	number: {
		value: 250,
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
	        "color": "red"
       	},
       	"repulse": {
       		"distance": 300
       	},
       	"grab":{
       		"distance": 300
       	}
        },
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble", 
	    },
	  "onclick": {
	  	"enable": true,
	  	"mode": "repulse",
	  }
  }}}

  export default ParticleParametersLanding;