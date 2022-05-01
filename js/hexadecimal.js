function JoanBin2DecHex() {
    var infobien = document.getElementById('infobien')
    var infoerror = document.getElementById('infoerror')
    var resultadohexadecimal = document.getElementById('resultadohexadecimal').value
    var result = document.getElementById('result')
    var hexadecimal = parseInt(resultadohexadecimal, 16)
    result.innerHTML = hexadecimal

    var numero = resultadohexadecimal.charAt(resultadohexadecimal.length - 1)

    if (numero == 0 || numero == 1 || numero == 2 || numero == 3 || numero == 4 || numero == 5 || numero == 6 || numero == 7 || numero == 8 || numero == 9 || numero == "A" || numero == "B" || numero == "C" || numero == "D" || numero == "E" || numero == "F" || numero == "a" || numero == "b" || numero == "c" || numero == "d" || numero == "e" || numero == "f" ) {
        infobien.innerHTML = "Here is your decimal!"
        infoerror.innerHTML = ""
    } else {
        infobien.innerHTML = ""
        infoerror.innerHTML = "You entered a non-hexadecimal digit (please enter only 0 to 9 and A to F)"
    }
    if (numero == '') {
        infobien.innerHTML = ''
        infoerror.innerHTML = ''
    }
}


// 🤷🏻‍♀️Waiting for a valid hexadecimal number... //
// You entered a non-hexadecimal digit (please enter only 0 to 9 and A to F) //
// Here is your decimal! //