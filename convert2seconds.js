function calc() {
    var hh = Number(document.getElementById('hh').value);
    var mm = Number(document.getElementById('mm').value);
    var ss = Number(document.getElementById('ss').value);
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var display;
    var calculate;

    // display = hh + ':' + mm + ':' + ss
    // console.log(display);

    if (hh == 0 && mm == 0 && ss >= 60) {
        minutes = Math.floor(ss/60);
        seconds = Math.round(((ss/60) - minutes) * 60);
        if (minutes >= 60) {
            hours = minutes/60;
            minutes = minutes/60 - hours;
        }
        document.getElementById('result').innerHTML = hours + " hour(s) " + minutes + " minute(s) " + seconds + " second(s)";
    } else {
        calculate = hh * 60 * 60 + mm * 60 + ss;
        document.getElementById('result').innerHTML = calculate + " seconds";
    }

    // console.log(calculate);

}

document.addEventListener('DOMContentLoaded', function() {

    // window.addEventListener("keypress", keyboardInput, false);

    // function keyboardInput(event) {
    //     console.log(keycode);
    // }



});
