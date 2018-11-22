const ParticleParametersLanding = {
particles: {
	move: {
		enable: true,
		speed: 5,
		detect_on: "canvas",
		out_mode: "out"
	},

	line_linked: {
		enable: true
	},

	opacity: {
		opacity: 1
	},

	size: {
		value: 2
	},

	number: {
		value: 100,
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
	        "distance":400,
	        "size": 5,
	        "opacity": 10,
	        "color": "red"
       	},
       	"repulse": {
       		"distance": 200
       	},
       	"grab":{
       		"distance": 300
       	}
        },
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse", 
	    },
	  "onclick": {
	  	"enable": false,
	  	"mode": "bubble",
	  }
  }}}

  export default ParticleParametersLanding;