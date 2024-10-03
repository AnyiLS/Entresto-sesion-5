$(document).ready(function () {
	localStorage.setItem('response', JSON.stringify([]))
	localStorage.removeItem('carta1')
	localStorage.removeItem('carta2')
	localStorage.removeItem('carta3')
	localStorage.removeItem('carta4')
	localStorage.removeItem('carta5')
	localStorage.removeItem('carta6')
	localStorage.removeItem('carta7')
	localStorage.removeItem('carta8')
	localStorage.removeItem('carta9')
	// modal 1
	$('.openModal').on('click', () => {
		const esta = localStorage.getItem('carta1')

		if (esta !== '') {
			$('.modal').css('display', 'block')
			const isAnswered = localStorage.getItem('carta1')

			sonidobuttom()
			if (!isAnswered || isAnswered === '') {
				localStorage.setItem('carta1', '')
			}
		}
	})

	$('#car-1').on('click', () => {
		$('#car-1 rect').css('fill', '#50e1d0')

		const response = JSON.parse(localStorage.getItem('response'))

		localStorage.setItem('response', JSON.stringify([...response, 1]))
		sonidoexitoso()

		setTimeout(() => {
			$('.modal').hide()
			sonidocarta()
			$('.openModal').css('transform', 'rotateY(180deg)')
		}, 2000)
	})

	$('#car-2').on('click', () => {
		$('#car-2 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal').hide()
			$('.modalerror').show()
		}, 2000)
	})

	$('#car-3').on('click', () => {
		$('#car-3 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal').hide()
			$('.modalerror').show()
		}, 2000)
	})

	$('#car-4').on('click', () => {
		$('#car-4 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal').hide()
			$('.modalerror').show()
		}, 2000)
	})

	$('.closeModalerror').on('click', () => {
		$('.modalerror').fadeOut()
	})

	$('.openModal .detras').on('click', () => {
		$('.cursores').hide()
		$('.car-pop1').show()
	})

	$('.cerrar').on('click', () => {
		$('.openModal').show()
		$('.car-pop1').hide()
		$('.openModal').css('transform', 'rotateY(0deg)')

		handleValidateCriteriasFinished()
	})

	// Carta 2
	// modal 1
	$('.openModal2').on('click', () => {
		const esta = localStorage.getItem('carta2')

		if (esta !== '') {
			$('.modal2').css('display', 'block')
			const isAnswered = localStorage.getItem('carta2')

			sonidobuttom()
			if (!isAnswered || isAnswered === '') {
				localStorage.setItem('carta2', '')
			}
		}
	})

	$('#car-11').on('click', () => {
		$('#car-11 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal2').hide()
			$('.modalerror2').show()
		}, 2000)
	})

	$('#car-22').on('click', () => {
		$('#car-22 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal2').hide()
			$('.modalerror2').show()
		}, 2000)
	})

	$('#car-33').on('click', () => {
		$('#car-33 rect').css('fill', '#50e1d0')

		const responses = JSON.parse(localStorage.getItem('response'))
		localStorage.setItem('response', JSON.stringify([...responses, 2]))
		sonidoexitoso()

		setTimeout(() => {
			$('.modal2').hide()
			sonidocarta()
			$('.openModal2').css('transform', 'rotateY(180deg)')
		}, 2000)
	})

	$('#car-44').on('click', () => {
		$('#car-44 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal2').hide()
			$('.modalerror2').show()
		}, 2000)
	})

	$('.closeModalerror2').on('click', () => {
		$('.modalerror2').fadeOut()
	})

	$('.openModal2 .detras2').on('click', () => {
		$('.cursores2').hide()
		$('.car-pop2').show()
	})

	$('.cerrar2').on('click', () => {
		$('.openModal2').show()
		$('.car-pop2').hide()
		$('.openModal2').css('transform', 'rotateY(0deg)')

		handleValidateCriteriasFinished()
	})

	// carta 2

	// Carta 3
	// modal 3
	$('.openModal3').on('click', () => {
		const esta = localStorage.getItem('carta3')

		if (esta !== '') {
			$('.modal3').css('display', 'block')
			const isAnswered = localStorage.getItem('carta3')

			sonidobuttom()
			if (!isAnswered || isAnswered === '') {
				localStorage.setItem('carta3', '')
			}
		}
	})

	$('#car-01').on('click', () => {
		$('#car-01 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal3').hide()
			$('.modalerror3').show()
		}, 2000)
	})

	$('#car-02').on('click', () => {
		$('#car-02 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal3').hide()
			$('.modalerror3').show()
		}, 2000)
	})

	$('#car-03').on('click', () => {
		$('#car-03 rect').css('fill', '#50e1d0')

		const responses = JSON.parse(localStorage.getItem('response'))
		localStorage.setItem('response', JSON.stringify([...responses, 3]))
		sonidoexitoso()

		setTimeout(() => {
			$('.modal3').hide()
			sonidocarta()
			$('.openModal3').css('transform', 'rotateY(180deg)')
		}, 2000)
	})

	$('#car-04').on('click', () => {
		$('#car-04 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal3').hide()
			$('.modalerror3').show()
		}, 2000)
	})

	$('.closeModalerror3').on('click', () => {
		$('.modalerror3').fadeOut()
	})

	$('.openModal3 .detras3').on('click', () => {
		$('.cursores3').hide()
		$('.car-pop3').show()
	})

	$('.cerrar3').on('click', () => {
		$('.openModal3').show()
		$('.car-pop3').hide()
		$('.openModal3').css('transform', 'rotateY(0deg)')

		handleValidateCriteriasFinished()
	})

	// carta 3

	// Carta 4
	// modal 4
	$('.openModal4').on('click', () => {
		const esta = localStorage.getItem('carta4')

		if (esta !== '') {
			$('.modal4').css('display', 'block')
			const isAnswered = localStorage.getItem('carta4')

			sonidobuttom()
			if (!isAnswered || isAnswered === '') {
				localStorage.setItem('carta4', '')
			}
		}
	})

	$('#pol1').on('click', () => {
		$('#pol1 rect').css('fill', '#50e1d0')

		const responses = JSON.parse(localStorage.getItem('response'))
		localStorage.setItem('response', JSON.stringify([...responses, 4]))
		sonidoexitoso()

		setTimeout(() => {
			$('.modal4').hide()
			sonidocarta()
			$('.openModal4').css('transform', 'rotateY(180deg)')
		}, 2000)
	})

	$('#pol2').on('click', () => {
		$('#pol2 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal4').hide()
			$('.modalerror4').show()
		}, 2000)
	})

	$('#pol3').on('click', () => {
		$('#pol3 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal4').hide()
			$('.modalerror4').show()
		}, 2000)
	})

	$('#pol4').on('click', () => {
		$('#pol4 rect').css('fill', '#d50000ab')
		sonidoerroneo()
		setTimeout(() => {
			$('.modal4').hide()
			$('.modalerror4').show()
		}, 2000)
	})

	$('.closeModalerror4').on('click', () => {
		$('.modalerror4').fadeOut()
	})

	$('.openModal4 .detras4').on('click', () => {
		$('.cursores4').hide()
		$('.car-pop4').show()
	})

	$('.cerrar4').on('click', () => {
		$('.openModal4').show()
		$('.car-pop4').hide()
		$('.openModal4').css('transform', 'rotateY(0deg)')

		handleValidateCriteriasFinished()
	})

	$('.boton-next').on('click', () => {
		const carta1 = localStorage.getItem('carta1'),
			carta2 = localStorage.getItem('carta2'),
			carta3 = localStorage.getItem('carta3'),
			carta4 = localStorage.getItem('carta4')

		if (carta1 === '' && carta2 === '' && carta3 === '' && carta4 === '') {
			window.location.href = './index278.html'
		}
	})

	// carta 4
})
