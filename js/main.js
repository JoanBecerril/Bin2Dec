function JoanBin2Dec() {
    var infobien = document.getElementById('infobien')
    var infoerror = document.getElementById('infoerror')
    var resultadobinario = document.getElementById('resultadobinario').value
    var procesando = document.getElementById('procesando')
    procesando.innerHTML = parseInt(resultadobinario, 2);
    var numero = resultadobinario.charAt(resultadobinario.length - 1)
    if (resultadobinario == '') {
        procesando.innerHTML = ''
    }
    if (numero == 0 || numero == 1) {
        infobien.innerHTML = 'Here is your decimal!'
        infoerror.innerHTML = ''
    } else {
        procesando.innerHTML = '🤷🏻‍♀️Waiting for a valid binary number...'
    }
    if (numero >> 1 || numero >> 10000) {
        infoerror.innerHTML = 'You entered a non-binary digit (please enter only 0 or 1)'
        infobien.innerHTML = ''
    }
    if (numero == '') {
        infoerror.innerHTML = ''
        infobien.innerHTML = ''
    }
}



// 🤷🏻‍♀️Waiting for a valid binary number... //
// You entered a non-binary digit (please enter only 0 or 1) //
// Here is your decimal! //