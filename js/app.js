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

	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

	itemsL.forEach(item => {
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

	let itemsL_p = gsap.utils.toArray('.gallery__left .gallery__item .text-block__p')

	itemsL_p.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -80 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-950',
				end: '-600',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	itemsR.forEach(item => {
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

	let itemsR_p = gsap.utils.toArray('.gallery__right .gallery__item .text-block__p')

	itemsR_p.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 80 }, {
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
