
const grid = document.getElementById("masonryDiv");
console.log(grid.classList);
var msnry = new Masonry(grid);

reloadMasonry();

function immediateReload() {
    reloadMasonry();
    // msnry.layout();
}

function delayedReload() {
    reloadMasonry();
}

function reloadMasonry() {
    console.log("RELOAD");
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