
const grid = document.getElementById("masonryDiv");
var msnry;

var $grid = $('#masonryDiv').imagesLoaded(function () {
    // init Masonry after all images have loaded
    msnry = new Masonry(grid);
});

function immediateReload(button_id) {
    console.log("ImmediateReload");
    button = document.getElementById(button_id);
    if (button.innerHTML == "See More") {
        button.innerHTML = "See Less";
    } else {
        button.innerHTML = "See More";
    }
    reloadMasonry();
}

function delayedReload(button_id) {
    console.log("delayedReload");
    document.getElementById(button_id).innerHTML = "See More";
    reloadMasonry();
}

function reloadMasonry() {
    const collapseThings = document.getElementsByClassName("seeMoreCollapse");
    for (i = 0; i < collapseThings.length; i++) {
        doReload(collapseThings[i]);
    }
}

function doReload(thing) {
    $(thing).on('shown.bs.collapse', function () {
        msnry.layout();
    });
    $(thing).on('hidden.bs.collapse', function () {
        msnry.layout();
    });
}

