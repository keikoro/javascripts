// code to execute on key presses
window.addEventListener("keypress", keyboardInput, false);


function keyboardInput(event) {
/*    var keycode = event.keyCode;
    console.log(keycode);*/

    // get Unicode for key presses
    var keyCode = event.which;
    var thisKey = String.fromCharCode(keyCode);
    console.log(keyCode);

    // create a new div for each key press and append it to the body
    var makeDiv = document.createElement("div");
    makeDiv.className = "fun";

    text = document.createTextNode("" + thisKey + " " + keyCode);
    makeDiv.appendChild(text);

    document.body.appendChild(makeDiv);
}

// get the current browser window size
// and return its height + width
function calc_size() {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        height = w.innerWidth || e.clientWidth || g.clientWidth,
        width = w.innerHeight || e.clientHeight || g.clientHeight;

    console.log("height: " + height + "px, width: " + width + "px");
    return [height, width];
}


// code to execute once the site has finished loading
document.addEventListener('DOMContentLoaded', function() {

    var window_size = calc_size();
    var height = window_size[0];
    var width = window_size[1];

    // get coordinates of any header-like elements on page
    // (new content should start below these elements)
    var occupied = document.getElementsByClassName('spacer')[0];
    var rect = occupied.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);

    var new_top = rect.bottom

    // subtract height of header-like elements
    // to calculate measurements of remaining available space
    var new_height = height - (rect.bottom - rect.top);
    console.log("new height: " + new_height + "px");
});


// code to execute on browser window resize
window.addEventListener("resize", calc_size);