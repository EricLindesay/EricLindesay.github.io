
const grid = document.getElementById("masonryDiv");
console.log(grid.classList);
var msnry = new Masonry(grid);

// document.addEventListener('DOMContentLoaded', function () { reloadMasonry });
Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
    reloadMasonry();
});

function immediateReload() {
    reloadMasonry();
}

function delayedReload() {
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