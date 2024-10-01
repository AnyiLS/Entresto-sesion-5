$(document).ready(function () {
	let bandera = false
	let bandera1 = false
	let bandera2 = false
	let bandera3 = false
	let bandera4 = false
	$('#abrir1').on('mouseover', function () {
		localStorage.setItem('slide293-1', 'true')
		if (localStorage.getItem('slide293-2') === 'true') {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
		$('.cursor').hide()
		if (bandera) {
			$('.menu1').css('display', 'none')
			bandera = !bandera
		} else {
			$('.menu1').css('display', 'block')
			$('.menu2').css('display', 'none')
			$('.menu3').css('display', 'none')
			$('.menu4').css('display', 'none')
			$('.menu5').css('display', 'none')
			bandera = !bandera
		}
	})

	$('#abrir2').on('mouseover', function () {
		localStorage.setItem('slide293-2', 'true')
		if (localStorage.getItem('slide293-1') === 'true') {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
		$('.cursor1').hide()
		if (bandera1) {
			$('.menu2').css('display', 'none')
			bandera1 = !bandera1
		} else {
			$('.menu2').css('display', 'block')
			$('.menu1').css('display', 'none')
			$('.menu3').css('display', 'none')
			$('.menu4').css('display', 'none')
			$('.menu5').css('display', 'none')
			bandera1 = !bandera1
		}
	})

	$('#abrir3').on('mouseover', function () {
		localStorage.setItem('slide293-3', 'true')
		if (localStorage.getItem('slide293-1') === 'true') {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
		$('.cursor2').hide()
		if (bandera2) {
			$('.menu3').css('display', 'none')
			bandera2 = !bandera2
		} else {
			$('.menu3').css('display', 'block')
			$('.menu2').css('display', 'none')
			$('.menu1').css('display', 'none')
			$('.menu4').css('display', 'none')
			$('.menu5').css('display', 'none')
			bandera2 = !bandera2
		}
	})

	$('#abrir4').on('mouseover', function () {
		localStorage.setItem('slide293-4', 'true')
		if (localStorage.getItem('slide293-1') === 'true') {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
		$('.cursor3').hide()
		if (bandera3) {
			$('.menu4').css('display', 'none')
			bandera3 = !bandera3
		} else {
			$('.menu4').css('display', 'block')
			$('.menu3').css('display', 'none')
			$('.menu2').css('display', 'none')
			$('.menu1').css('display', 'none')
			$('.menu5').css('display', 'none')

			bandera3 = !bandera3
		}
	})

	$('#abrir5').on('mouseover', function () {
		localStorage.setItem('slide293-5', 'true')
		if (localStorage.getItem('slide293-1') === 'true') {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
		$('.cursor4').hide()
		if (bandera4) {
			$('.menu5').css('display', 'none')
			bandera4 = !bandera4
		} else {
			$('.menu5').css('display', 'block')
			$('.menu4').css('display', 'none')
			$('.menu3').css('display', 'none')
			$('.menu2').css('display', 'none')
			$('.menu1').css('display', 'none')
			bandera4 = !bandera4
		}
	})

	// modal
    $(".openModal").on("mouseover", () => {
        $(".modal").css("display", "block");
    });
    // cerra modal
    $(".closeModal").on("mouseover", () => {
        $(".modal").css("display", "none");
        $('.reproduc').trigger('pause');
        $('.reproduc').hide();
    });
})
