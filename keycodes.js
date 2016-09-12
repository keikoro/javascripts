// listen for key presses
window.addEventListener("keypress", keyboardInput, false);

// deal with key presses
function keyboardInput(event) {
/*    var keycode = event.keyCode;
    console.log(keycode);*/

    var keyCode = event.which;
    var thisKey = String.fromCharCode(keyCode);
    console.log(keyCode);

    var contents = document.getElementsByTagName('tbody')[0].innerHTML;
    contents += '\n<tr><td>' + thisKey + '</td><td>' + keyCode + '</td></tr>';

    document.getElementsByTagName('tbody')[0].innerHTML = contents;


    // document.getElementsByTagName('body')[0].innerHTML = body;
}
