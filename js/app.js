gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin)

if (ScrollTrigger.isTouch !== 1) {

	// ScrollSmoother.create({
	// 	wrapper: '.wrapper',
	// 	content: '.content',
	// 	smooth: 1.5,
	// 	effects: true
	// })

	gsap.fromTo('.hero-section', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.hero-section',
			start: 'center',
			end: '820',
			scrub: true
		}
	})

	gsap.utils.toArray('.gallery__wrap .gallery__item:first-child').forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -80 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-700',
				end: '-200',
				scrub: true
			}
		})
	})

	gsap.utils.toArray('.gallery__wrap .gallery__item:last-child').forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 80 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-700',
				end: '-200',
				scrub: true
			}
		})
	})

	gsap.utils.toArray('.gallery__wrap:nth-child(odd) .text-block .text-block__p').forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 100 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-950',
				end: '-600',
				scrub: true
			}
		})
	})

	gsap.utils.toArray('.gallery__wrap:nth-child(even) .text-block .text-block__p').forEach(item => {
		console.log(item)
		gsap.fromTo(item, { opacity: 0, x: -100 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-950',
				end: '-600',
				scrub: true
			}
		})
	})

}

const sections = document.querySelectorAll(".panel");

const scrolling = {
    enabled: true,
    events: "scroll,wheel,touchmove,pointermove".split(","),
    prevent: e => e.preventDefault(),
    disable() {
      if (scrolling.enabled) {
        scrolling.enabled = false;
        window.addEventListener("scroll", gsap.ticker.tick, {passive: true});
        scrolling.events.forEach((e, i) => (i ? document : window).addEventListener(e, scrolling.prevent, {passive: false}));
      }
    },
    enable() {
      if (!scrolling.enabled) {
        scrolling.enabled = true;
        window.removeEventListener("scroll", gsap.ticker.tick);
        scrolling.events.forEach((e, i) => (i ? document : window).removeEventListener(e, scrolling.prevent));
      }
    }
  };


function goToSection(section, anim, i) {
  if (scrolling.enabled) { 
    scrolling.disable();
    gsap.to(window, {
      scrollTo: {y: section, autoKill: false},
      onComplete: scrolling.enable,
      duration: 1.2
    });

    anim && anim.restart();
  }
}

sections.forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
	start: "top bottom-=1",
    end: "bottom top+=1",
    onEnter: () => goToSection(section),
    onEnterBack: () => goToSection(section)
  });
 
});