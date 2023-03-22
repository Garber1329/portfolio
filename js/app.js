gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

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
