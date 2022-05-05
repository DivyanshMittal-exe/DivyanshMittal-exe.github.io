var doc = window.document,
  context = doc.querySelector('.js-loop'),
  clones = context.querySelectorAll('.is-clone'),
  disableScroll = false,
  scrollWidth = 0,
  scrollPos = 0,
  clonesWidth = 0,
  i = 0;

function getScrollPos() {
  return (context.pageXOffset || context.scrollLeft) - (context.clientLeft || 0);
}

function setScrollPos(pos) {
  if(pos + clonesWidth >= context.scrollWidth ){
    context.scrollLeft = 0;
  }else{
    context.scrollLeft = pos;
  }
}

function getClonesWidth() {
  clonesWidth = 0;

  for (i = 0; i < clones.length; i += 1) {
    clonesWidth = clonesWidth + clones[i].offsetWidth;
  }

  return clonesWidth;
}

function reCalc() {
  scrollPos = getScrollPos();
  scrollWidth = context.scrollWidth;
  clonesWidth = getClonesWidth();

  if (scrollPos <= 0) {
    setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
  }
}

function scrollUpdate() {
  if (!disableScroll) {
    scrollPos = getScrollPos();

    if (clonesWidth + scrollPos >= scrollWidth) {
      // Scroll to the Left when you’ve reached the bottom
      setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
      disableScroll = true;
    } else if (scrollPos <= 0) {
      // Scroll to the bottom when you reach the Left
      setScrollPos(scrollWidth - clonesWidth);
      disableScroll = true;
    }
  }

  if (disableScroll) {
    // Disable scroll-jumping for a short time to avoid flickering
    window.setTimeout(function () {
      disableScroll = false;
    }, 40);
  }
}

window.requestAnimationFrame(reCalc);

context.addEventListener('scroll', function () {
  window.requestAnimationFrame(scrollUpdate);
}, false);

window.addEventListener('resize', function () {
  window.requestAnimationFrame(reCalc);
}, false);


// Just for this demo: Center the middle block on page load
window.onload = function () {
  setScrollPos(Math.round(clones[0].getBoundingClientRect().Left + getScrollPos() - (context.offsetWidth - clones[0].offsetWidth) / 2));
};


/* Auto scrolling */
var scrollSpeed = 1

function autoScroll() {
  
  setScrollPos(getScrollPos() + scrollSpeed)
  console.log("Rotating")
  console.log(context.scrollWidth)
  console.log(getScrollPos() + scrollSpeed + clonesWidth)
  window.requestAnimationFrame(autoScroll)
}

autoScroll()