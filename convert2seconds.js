function calc() {
    var hh = document.getElementById('hh').value;
    var mm = document.getElementById('mm').value;
    var ss = document.getElementById('ss').value;
    var display;
    var calculate;

    // display = hh + ':' + mm + ':' + ss
    // console.log(display);

    calculate = Number(hh) * 60 * 60 + Number(mm) * 60 + Number(ss);
    document.getElementById('result').innerHTML = calculate + " seconds";

    // console.log(calculate);

}

document.addEventListener('DOMContentLoaded', function() {

    // window.addEventListener("keypress", keyboardInput, false);

    // function keyboardInput(event) {
    //     console.log(keycode);
    // }



});
