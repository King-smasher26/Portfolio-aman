// SKILLS CARD SCRIPT

var w = window.innerWidth;

if(w>1250){

    gsap.registerPlugin(ScrollTrigger);
    
        gsap.from("#SK1", {
            y: "-50%",
            x:"-50%",
            scale:1.3,
            duration: 2,
            scrollTrigger: {
                trigger: "#SK1",
                // markers:true,
                start: "center 100%",
                end: "center 0%",
                // scrub: 4,
                toggleActions: "restart reverse restart reverse"
                // toggleActions:"restart none none none"
            }
        })
        gsap.from("#SK2", {
            y: "-50%",
            duration: 2,
            scale:1.3,
            scrollTrigger: {
                trigger: "#SK2",
                // markers:true,
                start: "center 100%",
                end: "center 0%",
                // scrub: 4,
                toggleActions: "restart reverse restart reverse"
                // toggleActions:"restart none none none"
            }
        })
        gsap.from("#SK3", {
            y: "-50%",
            x:"50%",
            scale:1.3,
            duration: 2,
            scrollTrigger: {
                trigger: "#SK3",
                // markers:true,
                start: "center 100%",
                end: "center 0%",
                // scrub: 4,
                toggleActions: "restart reverse restart reverse"
                // toggleActions:"restart none none none"
            }
        })
        
        gsap.set('.follower', { xPercent: -50, yPercent: -50 });
        gsap.set('.cursor', { xPercent: -50, yPercent: -50 });
        
        var follow = document.querySelector('.follower');
        var cur = document.querySelector('.cursor');
        
        window.addEventListener('mousemove', e => {
            gsap.to(cur, 0.2, { x: e.clientX, y: e.clientY });
            gsap.to(follow, 0.9, { x: e.clientX, y: e.clientY });
        });
        
        gsap.to("#sk-text", {
            // x: 300,
            y:300,
            duration: 5,
            scrollTrigger: {
                trigger: "#Container2",
                // markers:true,
                start: "top 30%",
                end: "top 100%",
                scrub: 10,
                pin: "#Skills-text",
                pinSpacing: false,
                // toggleActions:"restart reverse restart reverse"
                toggleActions: "restart none none none"
            }
        })

        // PROJECT CARD JS
                gsap.registerPlugin(ScrollTrigger);
                gsap.from("#PC1", {
                x: "-40%",
                duration: 1,
                scrollTrigger: {
                    trigger: "#PC1",
                    // markers:true,
                    start: "top 100%",
                    end: "top 0%",
                    scrub: 4,
                    toggleActions: "restart reverse restart reverse"
                    // toggleActions:"restart none none none"
                }
            })
        gsap.to("#PC2", {
            x: "-30%",
            duration: 4,
            scrollTrigger: {
                trigger: "#PC2",
                // markers:true,
                start: "top 100%",
                end: "top 0%",
                scrub: 4,
                toggleActions: "restart reverse restart reverse"
                // toggleActions:"restart none none none"
            }
        })
        gsap.from("#PC3", {
            x: "-40%",
            duration: 1,
            scrollTrigger: {
                trigger: "#PC3",
                // markers:true,
                start: "top 100%",
                end: "top 0%",
                scrub: 4,
                toggleActions: "restart reverse restart reverse"
                // toggleActions:"restart none none none"
            }
        })
        
        
        
        
        gsap.to("#Skills-text", {
            // x: 300,
            duration: 5,
            scrollTrigger: {
                trigger: ".Project-cards",
                // markers:true,
                start: "-10% 30%",
                end: "100% 100%",
                scrub: 10,
                pin: "#Skills-text",
                pinSpacing: false,
                // toggleActions:"restart reverse restart reverse"
                toggleActions: "restart none none none"
            }
        })
        
        

        gsap.to('#PI1', {
            scale: 1.3,
            duration: 1,
            scrollTrigger: {
                trigger: '#PI1',
                // markers: true,
                scrub: true,
                start: 'bottom bottom'
            }
        })
        gsap.to('#PC1', {
            scale: 0.8,
            duration: 1,
            scrollTrigger: {
                trigger: '#PC1',
                // markers: true,
                scrub: true,
                start: 'bottom bottom'
            }
        })
        gsap.to('#PC2', {
            scale: 0.8,
            duration: 1,
            scrollTrigger: {
                trigger: '#PC2',
                // markers: true,
                scrub: true,
                start: 'bottom bottom'
            }
        })
        gsap.to('#PC3', {
            scale: 0.8,
            duration: 1,
            scrollTrigger: {
                trigger: '#PC3',
                // markers: true,
                scrub: true,
                start: 'bottom bottom'
            }
        })
        gsap.to('#PI2', {
            scale: 1.3,
            duration: 1,
            scrollTrigger: {
                trigger: '#PI2',
                // markers: true,
                scrub: true,
                start: 'bottom bottom'
            }
        })
        gsap.to('#PI3', {
            scale: 1.3  ,
            duration: 1,
            scrollTrigger: {
                trigger: '#PI3',
                // markers: true,
                scrub: true,
                start: 'bottom bottom'
            }
        })
        
    }

    // gsap.to('#avatar-img', {
    //     scale: 1,
    //     duration: 1,
    //     scrollTrigger: {
    //         trigger: '#avatar-img',
    //         // markers: true,
    //         scrub: true,
    //         start: 'bottom bottom'
    //     }
    // })

    const mytext= new SplitType(".name")
    
    gsap.to('.char',{
        y:0,
        stagger:0.1,
        delay:0.4,
        duration:0.4
    })



// now text animation 
