$(document).ready(function () {
	if (
		localStorage.getItem('carta1') !== '' &&
		localStorage.getItem('carta2') !== '' &&
		localStorage.getItem('carta3') !== '' &&
		localStorage.getItem('carta4') !== ''
	) {
		window.location.href = './index277.html'
	}

	// modal 1
	$('.openModal5').on('click', () => {
		const esta = localStorage.getItem('carta5')

		if (esta !== '') {
			$('.modal5').css('display', 'block')
			const isAnswered = localStorage.getItem('carta5')

			sonidobuttom()
			if (!isAnswered || isAnswered === '') {
				localStorage.setItem('carta5', '')
			}
		}
	})

	$('#lop1').on('click', () => {
		$('#lop1 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal5').hide()
			$('.modalerror5').show()
		}, 2000)
	})

	$('#lop2').on('click', () => {
		$('#lop2 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal5').hide()
			$('.modalerror5').show()
		}, 2000)
	})

	$('#lop3').on('click', () => {
		$('#lop3 rect').css('fill', '#50e1d0')
		const responses = JSON.parse(localStorage.getItem('response'))
		localStorage.setItem('response', JSON.stringify([...responses, 5]))
		sonidoexitoso()

		setTimeout(() => {
			$('.modal5').hide()
			sonidocarta()
			$('.openModal5').css('transform', 'rotateY(180deg)')
		}, 2000)
	})

	$('#lop4').on('click', () => {
		$('#lop4 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal5').hide()
			$('.modalerror5').show()
		}, 2000)
	})

	$('.closeModalerror5').on('click', () => {
		$('.modalerror5').fadeOut()
	})

	$('.openModal5 .detras5').on('click', () => {
		$('.cursores5').hide()
		$('.car-pop1').show()
	})

	$('.cerrar5').on('click', () => {
		$('.openModal5').show()
		$('.car-pop5').hide()
		$('.openModal5').css('transform', 'rotateY(0deg)')

		handleValidateCriteriasFinished()
	})

	// carta 6
	// modal 6
	$('.openModal6').on('click', () => {
		const esta = localStorage.getItem('carta6')

		if (esta !== '') {
			$('.modal6').css('display', 'block')
			const isAnswered = localStorage.getItem('carta6')

			sonidobuttom()
			if (!isAnswered || isAnswered === '') {
				localStorage.setItem('carta6', '')
			}
		}
	})

	$('#ra1').on('click', () => {
		$('#ra1 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal6').hide()
			$('.modalerror6').show()
		}, 2000)
	})

	$('#ra2').on('click', () => {
		$('#ra2 rect').css('fill', '#50e1d0')

		const responses = JSON.parse(localStorage.getItem('response'))
		localStorage.setItem('response', JSON.stringify([...responses, 6]))
		sonidoexitoso()

		setTimeout(() => {
			$('.modal6').hide()
			sonidocarta()
			$('.openModal6').css('transform', 'rotateY(180deg)')
		}, 2000)
	})

	$('#ra3').on('click', () => {
		$('#ra3 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal6').hide()
			$('.modalerror6').show()
		}, 2000)
	})

	$('#ra4').on('click', () => {
		$('#ra4 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal6').hide()
			$('.modalerror6').show()
		}, 2000)
	})

	$('.closeModalerror6').on('click', () => {
		$('.modalerror6').fadeOut()
	})

	$('.openModal6 .detras6').on('click', () => {
		$('.cursores6').hide()
		$('.car-pop6').show()
	})

	$('.cerrar6').on('click', () => {
		$('.openModal6').show()
		$('.car-pop6').hide()
		$('.openModal6').css('transform', 'rotateY(0deg)')

		handleValidateCriteriasFinished()
	})

	// carta 6

	// carta 7
	// modal 7
	$('.openModal7').on('click', () => {
		const esta = localStorage.getItem('carta7')

		if (esta !== '') {
			$('.modal7').css('display', 'block')
			const isAnswered = localStorage.getItem('carta7')

			sonidobuttom()
			if (!isAnswered || isAnswered === '') {
				localStorage.setItem('carta7', '')
			}
		}
	})

	$('#ra-1').on('click', () => {
		$('#ra-1 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal7').hide()
			$('.modalerror7').show()
		}, 2000)
	})

	$('#ra-2').on('click', () => {
		$('#ra-2 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal7').hide()
			$('.modalerror7').show()
		}, 2000)
	})

	$('#ra-3').on('click', () => {
		$('#ra-3 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal7').hide()
			$('.modalerror7').show()
		}, 2000)
	})

	$('#ra-4').on('click', () => {
		$('#ra-4 rect').css('fill', '#50e1d0')

		const responses = JSON.parse(localStorage.getItem('response'))
		localStorage.setItem('response', JSON.stringify([...responses, 7]))
		sonidoexitoso()

		setTimeout(() => {
			$('.modal7').hide()
			sonidocarta()
			$('.openModal7').css('transform', 'rotateY(180deg)')
		}, 2000)
	})

	$('.closeModalerror7').on('click', () => {
		$('.modalerror7').fadeOut()
	})

	$('.openModal7 .detras7').on('click', () => {
		$('.cursores7').hide()
		$('.car-pop7').show()
	})

	$('.cerrar7').on('click', () => {
		$('.openModal7').show()
		$('.car-pop7').hide()
		$('.openModal7').css('transform', 'rotateY(0deg)')

		handleValidateCriteriasFinished()
	})

	// carta 7

	// carta 8
	// modal 8
	$('.openModal8').on('click', () => {
		const esta = localStorage.getItem('carta8')

		if (esta !== '') {
			$('.modal8').css('display', 'block')
			const isAnswered = localStorage.getItem('carta8')

			sonidobuttom()
			if (!isAnswered || isAnswered === '') {
				localStorage.setItem('carta8', '')
			}
		}
	})

	$('#pa-1').on('click', () => {
		$('#pa-1 rect').css('fill', '#50e1d0')

		const responses = JSON.parse(localStorage.getItem('response'))
		localStorage.setItem('response', JSON.stringify([...responses, 8]))
		sonidoexitoso()

		setTimeout(() => {
			$('.modal8').hide()
			sonidocarta()
			$('.openModal8').css('transform', 'rotateY(180deg)')
		}, 2000)
	})

	$('#pa-2').on('click', () => {
		$('#pa-2 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal8').hide()
			$('.modalerror8').show()
		}, 2000)
	})

	$('#pa-3').on('click', () => {
		$('#pa-3 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal8').hide()
			$('.modalerror8').show()
		}, 2000)
	})

	$('#pa-4').on('click', () => {
		$('#pa-4 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal8').hide()
			$('.modalerror8').show()
		}, 2000)
	})

	$('.closeModalerror8').on('click', () => {
		$('.modalerror8').fadeOut()
	})

	$('.openModal8 .detras8').on('click', () => {
		$('.cursores8').hide()
		$('.car-pop8').show()
	})

	$('.cerrar8').on('click', () => {
		$('.openModal8').show()
		$('.car-pop8').hide()
		$('.openModal8').css('transform', 'rotateY(0deg)')

		handleValidateCriteriasFinished()
	})

	// carta 8

	// carta 9
	// modal 9
	$('.openModal9').on('click', () => {
		const esta = localStorage.getItem('carta9')

		if (esta !== '') {
			$('.modal9').css('display', 'block')
			const isAnswered = localStorage.getItem('carta9')

			sonidobuttom()
			if (!isAnswered || isAnswered === '') {
				localStorage.setItem('carta9', '')
			}
		}
	})

	$('#ma-1').on('click', () => {
		$('#ma-1 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal9').hide()
			$('.modalerror9').show()
		}, 2000)
	})

	$('#ma-2').on('click', () => {
		$('#ma-2 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal9').hide()
			$('.modalerror9').show()
		}, 2000)
	})

	$('#ma-3').on('click', () => {
		$('#ma-3 rect').css('fill', '#50e1d0')

		const responses = JSON.parse(localStorage.getItem('response'))
		localStorage.setItem('response', JSON.stringify([...responses, 9]))
		sonidoexitoso()

		setTimeout(() => {
			$('.modal9').hide()
			sonidocarta()
			$('.openModal9').css('transform', 'rotateY(180deg)')
			setTimeout(() => {
				window.location.href = './index279.html'
			}, 3000)
		}, 2000)
	})

	$('#ma-4').on('click', () => {
		$('#ma-4 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal9').hide()
			$('.modalerror9').show()
		}, 2000)
	})

	$('.closeModalerror9').on('click', () => {
		$('.modalerror9').fadeOut()

		setTimeout(() => {
			window.location.href = './index279.html'
		}, 3000)
	})

	$('.openModal9 .detras9').on('click', () => {
		$('.cursores9').hide()
		$('.car-pop9').show()
	})

	$('.cerrar9').on('click', () => {
		
		$('.openModal9').show()
		$('.car-pop9').hide()
		$('.openModal9').css('transform', 'rotateY(0deg)')

		

		// handleValidateCriteriasFinished()
	})

	$('.boton-next').on('click', () => {
		const carta5 = localStorage.getItem('carta5'),
			carta6 = localStorage.getItem('carta6'),
			carta7 = localStorage.getItem('carta7'),
			carta8 = localStorage.getItem('carta8'),
			carta9 = localStorage.getItem('carta9')

		if (
			carta5 === '' &&
			carta6 === '' &&
			carta7 === '' &&
			carta8 === '' &&
			carta9 === ''
		) {
			window.location.href = './index279.html'
		}
	})
})
