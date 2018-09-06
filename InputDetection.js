document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

//Arrow keys
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '37') {
      e.preventDefault();
      if (currentpage > 1) gotopage(currentpage - 1);
    }
    else if (e.keyCode == '39'){
      e.preventDefault();
      gotopage(currentpage + 1);
    }
    else if (e.keyCode == '38') {
      e.preventDefault();
      loadbook(currentbook - 1);
    }
    else if (e.keyCode == '40') {
      e.preventDefault();
      loadbook(currentbook + 1);
    }


}


function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            gotopage(currentpage + 1);
        } else {
            if (currentpage > 1) {gotopage(currentpage - 1);}
        }
    }else {
        if ( yDiff > 0 ) {
            loadbook(currentbook + 1);
        } else {
            loadbook(currentbook - 1);
        }
    }
    xDown = null;
    yDown = null;
};
