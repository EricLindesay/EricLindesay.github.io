
const grid = document.getElementById("masonryDiv");
var msnry = new Masonry(grid);

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


// Reload the masonry after every image has loaded
// Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
//     document.addEventListener('DOMContentLoaded', function () {
//         msnry.layout();
//     });
// });

$(document).ready(function () {
    grid.imagesLoaded(function () {
        msnry.layout();
    });
});

// document.addEventListener('load'), (event) => {
//     msnry.layout();
// };

