gsap.registerPlugin(ScrollTrigger);


// media icons fade in animation
gsap.fromTo(".mediaIcon",
    {
        opacity: 0,
        stagger: .1,
        y: 50,
    },
    {
        delay: .2,
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: .2,
    }
)

// tryhackme floating animation
gsap.fromTo("#tryhackme",
    {
        y: -2,
    },
    {
        duration: .7,
        y: 2,
        repeat: -1,
        yoyo: true
    }
)

let widthMatch = window.matchMedia("(max-width: 700px)");
// it matches the media query: that is, min-width is >= 500px
if (widthMatch.matches) {
    // skill animation for mobile port-view.
    gsap.fromTo(".skill:nth-child(odd)", 
        { opacity: 0, x: -100, stagger: .1 },
        { duration: 2, x: 0, opacity: 1, stagger: .2, scrollTrigger: "#skills", ease: "bounce" }
    )
    gsap.fromTo(".skill:nth-child(even)", 
        { opacity: 0, x: 100, stagger: .1 },
        { duration: 2, x: 0, opacity: 1, stagger: .2, scrollTrigger: "#skills", ease: "bounce" }
    )
    //  project animation on mobile portview
    // gsap.fromTo(".project:nth-child(odd)",
    //     { x: -500, opacity: 0, stagger: .5 },
    //     { x: 0, duration: 1, opacity: 1, stagger: .5, scrollTrigger: {
    //         trigger: "#projects",
    //         start: "top center"
    //     }}
    // )
    // gsap.fromTo(".project:nth-child(even)",
    //     { x: 500, opacity: 0, stagger: .5 },
    //     { x: 0, duration: 1, opacity: 1, stagger: .5, scrollTrigger: {
    //         trigger: "#projects",
    //         start: "top center"
    //     }}
    // )
    document.querySelectorAll('.project').forEach((project, i) => {
        gsap.fromTo(project,
            i%2==0 ?    //  if current project is even
            //  then move in from left;
            { x: 500, opacity: 0, stagger: .5 } :
            //  else move in from right!
            { x: -500, opacity: 0, stagger: .5 },
            { x: 0, duration: 1, opacity: 1, stagger: .5, scrollTrigger: {
                trigger: project,
                start: "top center"
            }}
        );
    })
}
// it no longer matches the media query
else {
    console.log("desktop");
    // skill animation for desktop portview.
    gsap.fromTo(".skill", 
        { opacity: 0, x: 100, stagger: .1 },
        { duration: 1, x: 0, opacity: 1, stagger: .3, scrollTrigger: {
            trigger: "#skills",
            start: "top center"
        } }
    )
}


//  write-up opacity animation based on scroll
gsap.fromTo(".writeup", 
    { opacity: 0 },
    { opacity: 1, scrollTrigger: {
        trigger: "#writeups",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        // markers: true
    } }
)

