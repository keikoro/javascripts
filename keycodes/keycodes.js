var cellHeight;

// code to execute on key presses
window.addEventListener("keypress", keyboardInput, false);


function keyboardInput(event) {

    // get Unicode for key presses
    var keyCode = event.which;
    var thisKey = String.fromCharCode(keyCode);
    console.log(keyCode);

    // create a new div for each key press and append it to the body
    var makeDiv = document.createElement("div");
    makeDiv.className = "regular";

    // make spaces show up
    if (keyCode == 32) {
        thisKey = "\u00A0";
    }

    var text = document.createTextNode("" + thisKey + " " + keyCode);
    makeDiv.appendChild(text);

    var column = document.getElementsByClassName('column')[0];
    column.appendChild(makeDiv);
}

// get the current browser window size
// and return its height + width
function calc_size() {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        width = w.innerWidth || e.clientWidth || g.clientWidth,
        height = w.innerHeight || e.clientHeight || g.clientHeight;

    console.log("h: " + height + "px\nw: " + width + "px");
    return [height, width];
}


// add height of any header-like elements on page together and return it
function getOccupiedSpace() {

    var headerHeight = document.getElementById('header').offsetHeight;
    var footerHeight = document.getElementById('footer').offsetHeight;
    var spacerHeight = document.getElementsByClassName('spacer')[0].offsetHeight;


    var occupiedHeight = headerHeight + footerHeight + spacerHeight + 10;
    console.log("occupied h: " + occupiedHeight + "px");

    return occupiedHeight;
}

// change height of columns depending on document height
function resizeColumns(height) {

    // subtract height occupied by header to calculate remaining height
    var occupiedHeight = getOccupiedSpace();
    var newHeight = height - occupiedHeight;
    console.log("remaining h: " + newHeight + "px");

    // calculate how many cells fit into one column
    // and base new column height on it
    var noOfCells = Math.floor(newHeight/cellHeight) - 1;
    var newColHeight = (noOfCells*cellHeight) + 10;

    // iterate over columns to change their height
    var column = document.getElementsByClassName('column');
    var countCols = column.length;
    for (var i=0; i<countCols; i++) {
        document.getElementsByClassName('column')[i].style.height
            = newColHeight + "px";
    }
}

// code to execute once the site has finished loading
document.addEventListener('DOMContentLoaded', function() {

    var window_size = calc_size();
    var height = window_size[0];
    var width = window_size[1];

    // determine height of one cell
    cellHeight = document.getElementsByClassName('regular')[0].offsetHeight;
    console.log("cell h: " + cellHeight + "px");

    resizeColumns(height);
});


// code to execute on browser window resize
window.addEventListener('resize', function() {

    var window_size = calc_size();
    var height = window_size[0];
    var width = window_size[1];

    resizeColumns(height);
});

