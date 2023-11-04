console.log('testing Oceana TL')
/*Animation outline: 
1- the 3 rows all come in, falling into place staggered
2- Oceana logo bounces in from L from a mask
3- top and bottom rows scale up and down respectively
4- Oceana Logo scales down/back while the background scales up to fill the page
*/ 

/* Elements involved in animation:
.mask ->: (oHidden with pos: abs to center / z:1 to place on top)
    h1
.fade-container ->: (grid container/ 3 ROWs / 100vh / 1 COL)
    .fade1, fade2, fade3
        from scaleY(0) to scaleY(1)
    =================================
    A: start by editing .scss to get the animated elements off the screen
    B: create a const ref the TL
*/

/* VARs*/

const tl = gsap.timeline({
    defaults: { 
        ease: "power4.inOut", duration: .6 
    }})

    tl
    
        .to(['.fade1', '.fade2', '.fade3'], {
            scaleY: 1.1, //for some reason there was a white 1px line appearing
            stagger: .2,
            // duration: 2

        }) // note to NOT place a ;semicolon here so they are 'chained'
        
        .to('h1', {
            x: 0, // this is just transforming the position only
            duration: 2,
            ease: "elastic.out(1, 0.5)"
        }, "-=.5")

        .to('.fade1', {
            scaleY: 0
        })

        .to('.fade3', {
            scaleY: 0,
            transformOrigin: "bottom" // this animates it to the bottom
        }, "-=.5")

        .to('.fade2', {
            height: '100vh'
        }, "-=.5")

        .to('h1', {
            scale: .6
        }, "-=.5")

        .to('.fade2', {
            scaleY: 0
        }, "-=.5")

        .to('.reveal', {
            opacity: 1,
            duration: 3,
            height: '1400px',
            y: -1000
        }, "-=1")
        
        .to('h1', {
            opacity: 0,
            duration: 1.6
        }, "-=.5")

        .to('h2', {
            scale: 40,
            duration: 2,
            opacity: 0
        }, "-=.5")

        .to('.reveal', {
            height: '1px'
        })

        .to('.lorem', {
            opacity: 1,
            color: "black",
            scale: 1.03,
            x: 0,
            duration: 2
        })

        .to("body", { 
            
            backgroundColor: "#000",
            duration: 4,
            
        })

        .to('.lorem', {
            color: '#bebebe',
            duration: 7,
            scale: 1.2
        }, "-=3")

        





