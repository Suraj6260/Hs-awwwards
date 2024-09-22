
function SheryAnimation() {
  Shery.mouseFollower()

  Shery.makeMagnet("#cursor")

  Shery.imageEffect(".container5 #part-two #left-block", {
    style: 4,
    // debug: true,
    // gooey: true,
    config: { "uColor": { "value": false }, "uSpeed": { "value": 0.6, "range": [0.1, 1], "rangep": [1, 10] }, "uAmplitude": { "value": 1.5, "range": [0, 5] }, "uFrequency": { "value": 3.5, "range": [0, 10] }, "geoVertex": { "range": [1, 64], "value": 1 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.8333333134651184 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.09, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.84, "range": [0, 10] }, "metaball": { "value": 0.44, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.38, "range": [0, 2] }, "noise_scale": { "value": 8.4, "range": [0, 100] }, "noiseDetail": { "value": 6.11, "range": [0, 100] }, "distortionAmount": { "value": 2.9, "range": [0, 10] }, "scale": { "value": 59.54, "range": [0, 100] }, "speed": { "value": 0.58, "range": [0, 1] } }
  })
}
SheryAnimation()

// function SheryAnimation2(){
//   Shery.imageEffect(".container5 #right-block #upper", {
//     style: 4,
//     // debug: true,
//     // gooey: true,
//     config: { "uColor": { "value": false }, "uSpeed": { "value": 0.6, "range": [0.1, 1], "rangep": [1, 10] }, "uAmplitude": { "value": 1.5, "range": [0, 5] }, "uFrequency": { "value": 3.5, "range": [0, 10] }, "geoVertex": { "range": [1, 64], "value": 1 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.8333333134651184 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.09, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.84, "range": [0, 10] }, "metaball": { "value": 0.44, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.38, "range": [0, 2] }, "noise_scale": { "value": 8.4, "range": [0, 100] }, "noiseDetail": { "value": 6.11, "range": [0, 100] }, "distortionAmount": { "value": 2.9, "range": [0, 10] }, "scale": { "value": 59.54, "range": [0, 100] }, "speed": { "value": 0.58, "range": [0, 1] } }
//   })
// }
// SheryAnimation2()



let cursor = document.querySelector("#cursor")
let main = document.querySelector(".main")
main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
  })
})


var container2 = document.querySelector(".container2")
container2.addEventListener("mousemove", function (dets) {
  gsap.to("#cursor", {
    scale: 4,
    opacity: 1
  })
})

container2.addEventListener("mouseleave", function (dets) {
  gsap.to("#cursor", {
    scale: 0,
    opacity: 0
  })
})

var container4 = document.querySelector(".container4")


var menupart = document.querySelector(".menupart")
var leftpart = document.querySelector("#left_portion")
var rightpart = document.querySelector("#right_portion")
var four = document.querySelector(".container1 #nav-section #four")
four.addEventListener("click", function () {
  gsap.to(".menupart", {
    height: "100%",
    display: "flex",
    // yoyo: true
  })


  gsap.to("#left_portion", {
    height: "100%",
    duration: "1",
    display: "flex",
    // yoyo: true
  })

  gsap.to("#right_portion", {
    height: "100%",
    duration: "1",
    display: "flex",
    marginTop: "0%",
    // yoyo: true
  })

})

var cross = document.querySelector("#division_6 i")
cross.addEventListener("click", function () {
  gsap.to(".menupart", {
    height: "100%",
    display: "none",
    // yoyo: true
  })


  gsap.to("#left_portion", {
    height: "0%",
    duration: "1",
    display: "none",
    marginBottom: "0%"
    // yoyo: true
  })

  gsap.to("#right_portion", {
    height: "0%",
    duration: "2",
    display: "none",
    marginTop: "100%"
    // yoyo: true
  })

})



// var p1 = document.querySelector("#division_1 p_one")
// var p2 = document.querySelector("#division_2 p_two")
// var p3 = document.querySelector("#division_3 p_three")
// var p4 = document.querySelector("#division_4 p_four")
// var p5 = document.querySelector("#division_5 p_five")




var logo = document.querySelector("#logo")
var h = document.querySelector("#logo #font1")
var s = document.querySelector("#logo #font2")
var dot = document.querySelector("#logo #font3")

gsap.to("#logo #font1", {
  y: -140,
  duration: 1,
  opacity: 0
}, ".3")

gsap.to("#logo #font2", {
  y: 110,
  duration: 1,
  opacity: 0
}, ".5")

gsap.to("#logo #font3", {
  y: -50,
  x: -10,
  scale: 0,
  duration: .8
})

var upsection = document.querySelector(".uppersection")
var colm1 = document.querySelector(".uppersection #column1")
var colm2 = document.querySelector(".uppersection #column2")
var colm3 = document.querySelector(".uppersection #column3")
var colm4 = document.querySelector(".uppersection #column4")
var item1 = document.querySelector(".uppersection #item1")
var item2 = document.querySelector(".uppersection #item2")

gsap.to(".uppersection", {
  y: -1000,
  duration: 1
}, "1.5")

var h1 = document.querySelector(".container1 #text h1")
gsap.from(".container1 #text h1", {
  opacity: 0,
  y: 300,
  duration: .5
}, "1.8")

var sub = document.querySelector(".container1 #text sub")
gsap.from(".container1 #text sub", {
  opacity: 0,
  duration: .5
}, "2")

var line = document.querySelector(".container1 #line")
gsap.from(".container1 #line", {
  x: -2000,
  duration: 1.5
}, "2.1")


// gsap.from(".container2", {
// overflow:"hidden"
// }, "2")

var container2 = document.querySelector(".container2 img")
gsap.from(".container2 img", {
  x: 2000,
  duration: 1.5,
}, "2")

gsap.from(".container2 img", {
  y: -400,
  duration: 2,
  scrollTrigger: {
    trigger: ".container2 img",
    // markers:true,
    scroller: "body",
    start: "top 90%",
    end: "bottom 10%",
    scrub: 5
  }
})


var container3 = document.querySelector(".container3")
gsap.from(".container3", {
  y: -100,
  duration: 2,
  scrollTrigger: {
    trigger: ".container3",
    // markers:true,
    scroller: "body",
    start: "top 170%",
    end: "bottom 10%",
    scrub: 5
  }
})


var p1 = document.querySelector(".container2 p1")
var p2 = document.querySelector(".container2 p2")
gsap.from(".container2 p1", {
  opacity: 0,
  duration: .5,
  scrollTrigger: {
    trigger: ".container2 p1",
    scroller: "body",
    start: "top 80%",
    end: "bottom 10%",
    scrub: 3
  }
})

gsap.from(".container2 p2", {
  opacity: 0,
  duration: .5,
  scrollTrigger: {
    trigger: ".container2 p2",
    scroller: "body",
    // markers:true,
    start: "top 80%",
    end: "bottom 10%",
    scrub: 3
  }
})


var lefth6 = document.querySelector(".container3 #left h6")
gsap.from(".container3 #left h6", {
  opacity: 0,
  duration: .5,
  scrollTrigger: {
    trigger: ".container3 #left h6",
    scroller: "body",
    start: "top 80%",
    end: "bottom 10%",
    scrub: 3
  }
})


var h2 = document.querySelector(".container3 #right #h2 h2 ")
gsap.from(".container3 #right #h2 h2", {
  opacity: 0,
  duration: .5,
  scrollTrigger: {
    trigger: ".container3 #right #h2 h2",
    scroller: "body",
    start: "top 80%",
    end: "bottom 10%",
    scrub: 3
  }
})


var row = document.querySelector(".container3 #row")
row.style.width = "61vw"
gsap.from(".container3 #row", {
  duration: 1,
  width: "0",
  scrollTrigger: {
    trigger: ".container3 #row",
    scroller: "body",
    start: "top 130%",
    end: "bottom 10%",
    scrub: 3,
  }
})
// row.style.width = "70%"


var para = document.querySelector(".container3 #para p ")
gsap.from(".container3 #para p ", {
  opacity: 0,
  duration: .5,
  scrollTrigger: {
    trigger: ".container3 #para p ",
    scroller: "body",
    start: "top 80%",
    end: "bottom 10%",
    scrub: 3
  }
})


var parah6 = document.querySelector(".container3 #para h6 ")
gsap.from(".container3 #para h6  ", {
  y: 100,
  opacity: 0,
  duration: .5,
  scrollTrigger: {
    trigger: ".container3 #para h6",
    scroller: "body",
    start: "top 150%",
    end: "bottom 20%",
    scrub: 3
  }
})



var con4h1 = document.querySelector(".container4 #upper h1")

gsap.from(".container4 #upper h1", {
  y: 150,
  stagger: .3,
  duration: .5,
  scrollTrigger: {
    trigger: ".container4 #upper h1",
    scroller: "body",
    start: "top 140%",
    end: "bottom 20%",
    scrub: 3
  }
})

var overlay1 = document.querySelector(".container4 #lower #card1 #overlay1")
gsap.to(".container4 #lower #card1 #overlay1", {
  bottom: "-3%",
  height: "0%",
  duration: .3,
  scrollTrigger: {
    trigger: ".container4 #lower #card1 #overlay1",
    scroller: "body",
    start: "top 110%",
    end: "bottom 10%",
    scrub: 3
  }
})

var overlay1 = document.querySelector(".container4 #lower #card2 #overlay2")
gsap.to(".container4 #lower #card2 #overlay2", {
  bottom: "-3%",
  height: "0%",
  duration: .3,
  scrollTrigger: {
    trigger: ".container4 #lower #card2 #overlay2",
    scroller: "body",
    start: "top 110%",
    end: "bottom 10%",
    scrub: 3
  }
})

var overlay1 = document.querySelector(".container4 #lower #card3 #overlay3")
gsap.to(".container4 #lower #card3 #overlay3", {
  bottom: "-3%",
  height: "0%",
  duration: .3,
  scrollTrigger: {
    trigger: ".container4 #lower #card3 #overlay3",
    scroller: "body",
    start: "top 110%",
    end: "bottom 10%",
    scrub: 3
  }
})


var card1h1 = document.querySelector(".container4 #lower #card1 h1")
gsap.from(".container4 #lower #card1 h1", {
  opacity: 0,
  stagger: .3,
  duration: .5,
  scrollTrigger: {
    trigger: ".container4 #lower #card1 h1",
    scroller: "body",
    start: "top 130%",
    end: "bottom 30%",
    scrub: 3
  }
}, "-300")


var card1p = document.querySelector(".container4 #lower #card1 p")
gsap.from(".container4 #lower #card1 p", {
  opacity: 0,
  stagger: .3,
  duration: .5,
  scrollTrigger: {
    trigger: ".container4 #lower #card1 p",
    scroller: "body",
    start: "top 130%",
    end: "bottom 30%",
    scrub: 3
  }
}, "-300")


var card2h1 = document.querySelector(".container4 #lower #card2 h1")
gsap.from(".container4 #lower #card2 h1", {
  opacity: 0,
  duration: .5,
  scrollTrigger: {
    trigger: ".container4 #lower #card1 h1",
    scroller: "body",
    start: "top 130%",
    end: "bottom 30%",
    scrub: 3
  }
}, "-300")


var card2p = document.querySelector(".container4 #lower #card2 p")
gsap.from(".container4 #lower #card2 p", {
  opacity: 0,
  stagger: .3,
  duration: .5,
  scrollTrigger: {
    trigger: ".container4 #lower #card2 p",
    scroller: "body",
    start: "top 130%",
    end: "bottom 30%",
    scrub: 3
  }
}, "-300")


var card3h1 = document.querySelector(".container4 #lower #card3 h1")
gsap.from(".container4 #lower #card3 h1", {
  opacity: 0,
  duration: .5,
  scrollTrigger: {
    trigger: ".container4 #lower #card3 h1",
    scroller: "body",
    start: "top 130%",
    end: "bottom 30%",
    scrub: 3
  }
}, "-300")


var card3p = document.querySelector(".container4 #lower #card3 p")
gsap.from(".container4 #lower #card3 p", {
  opacity: 0,
  stagger: .3,
  duration: .5,
  scrollTrigger: {
    trigger: ".container4 #lower #card3 p",
    scroller: "body",
    start: "top 130%",
    end: "bottom 30%",
    scrub: 3
  }
}, "-300")


var con5h1 = document.querySelector(".container5 #part-one h1")

gsap.from(".container5 #part-one h1", {
  y: 150,
  stagger: .3,
  duration: .5,
  scrollTrigger: {
    trigger: ".container5 #part-one h1",
    scroller: "body",
    start: "top 140%",
    end: "bottom 20%",
    scrub: 3
  }
})


// var line1 = document.querySelector(".container5 #part-two #right-block #lower #line1")
// var con5p1 = document.querySelector(".container5 #part-two #right-block #lower p1")
// con5p1.addEventListener("mouseenter",function(){
//   line1.style.width = "1vw"
// })

// con5p1.addEventListener("mouseleave",function(){
//   line1.style.width = "34vw"
// })


var gap = document.querySelector("#gap")
row.style.width = "100vw"
gsap.from("#gap", {
  duration: 1,
  width: "0",
  scrollTrigger: {
    trigger: "#gap",
    scroller: "body",
    start: "top 90%",
    end: "bottom 10%",
    scrub: 3,
  }
})


var gap2 = document.querySelector("#gap2")
row.style.width = "100vw"
gsap.from("#gap2", {
  duration: 1,
  width: "0",
  scrollTrigger: {
    trigger: "#gap2",
    scroller: "body",
    start: "top 90%",
    end: "bottom 10%",
    scrub: 3,
  }
})


var con6h1 = document.querySelector(".container6 #part-primary h1")

gsap.from(".container6 #part-primary h1", {
  y: 150,
  stagger: .3,
  duration: .5,
  scrollTrigger: {
    trigger: ".container6 #part-primary h1",
    scroller: "body",
    start: "top 140%",
    end: "bottom 20%",
    scrub: 3
  }
})

var con6img = document.querySelector(".container6 #part-secondary #left-side #upper_section")
var con6video = document.querySelector(".container6 #part-secondary #right-side video")

gsap.to(".container6 #part-secondary #left-side #upper_section", {
  height: "120%",
  width: "120%",
  position: "absolute",
  left: "0%",
  scrollTrigger: {
    trigger: ".container6 #part-secondary #left-side #upper_section",
    scroller: "body",
    start: "top 140%",
    end: "bottom 20%",
    scrub: 3,
  }

})

gsap.to(".container6 #part-secondary #right-side video", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".container6 #part-secondary #right-side video",
    scroller: "body",
    start: "top 140%",
    end: "bottom 20%",
    scrub: 3,
  }

})

var anime = document.querySelector("#anime")
gsap.to("#anime", {
  x: -400,
  y: -400,
  scrollTrigger: {
    trigger: "#anime",
    scroller: "body",
    start: "top 140%",
    end: "bottom 20%",
    scrub: 3,
  }

})

var anime = document.querySelector("#anime2")
gsap.to("#anime2", {
  x: 400,
  y: -400,
  scrollTrigger: {
    trigger: "#anime2",
    scroller: "body",
    start: "top 140%",
    end: "bottom 20%",
    scrub: 3,
  }

})


var con7b1 = document.querySelector(".container7 #block1")
gsap.to(".container7 #block1", {
  scale: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: ".container7",
    scroller: "body",
    start: "top 140%",
    end: "bottom 20%",
    scrub: 3,
  }
})


var con7b2 = document.querySelector(".container7 #block2")
gsap.to(".container7 #block2", {
  scale: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: ".container7",
    scroller: "body",
    start: "top 140%",
    end: "bottom 20%",
    scrub: 3,
  }
})


var con7b3 = document.querySelector(".container7 #block3")
gsap.to(".container7 #block3", {
  scale: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: ".container7",
    scroller: "body",
    start: "top 140%",
    end: "bottom 20%",
    scrub: 3,
  }
})

var overlayimg = document.querySelector(".container8 #leftside_portion #overlayimg")
gsap.to(".container8 #leftside_portion #overlayimg", {
  // bottom: "0%",
  // top:"5%",
  height: "0%",
  duration: 1,
  scrollTrigger: {
    trigger: ".container8 #leftside_portion #overlayimg",
    scroller: "body",
    start: "top 110%",
    end: "bottom 10%",
    scrub: 3
  }
})

let overlayf_h1 = document.querySelector("#rightside_portion #firsth1 #overlayf_h1")
gsap.from("#rightside_portion #firsth1 #overlayf_h1", {
  width: "50vw",
  right: "0%",
  scrollTrigger: {
    trigger: "#rightside_portion #firsth1 #overlayf_h1",
    scroller: "body",
    start: "top 100%",
    end: "bottom 10%",
    scrub: 3
  }
})

let overlays_h1 = document.querySelector("#rightside_portion #secondh1 #overlays_h1")
gsap.from("#rightside_portion #secondh1 #overlays_h1", {
  width: "50vw",
  right: "0%",
  scrollTrigger: {
    trigger: "#rightside_portion #secondh1 #overlays_h1",
    scroller: "body",
    start: "top 100%",
    end: "bottom 10%",
    scrub: 3
  }
})





gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



