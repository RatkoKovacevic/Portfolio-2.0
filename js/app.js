particlesJS('particles-js',

    {
        "particles": {
            "number": {
                "value": 150,
            },
            "color": {
                "value": ["#ffffff", "251605", "#f06023"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 5,
                    "opacity_min": 1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 120,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 4,
                "direction": "top-right",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "bubble"
                },
            },
            "modes": {
                "repulse": {
                    "distance": 50,
                    "duration": 0.4
                },
                "bubble": {
                    "distance": 100,
                    "size": 10,
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    }
);