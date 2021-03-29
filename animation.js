const numOfSlices = 25;

let ticking = false;

function init() {
  const imgWrapper = document.getElementById('img-wrapper');

  const slicePercentRatio = 100 / numOfSlices;
  const sliceCenterPercentRatio = slicePercentRatio / 2;

  for (let index = 1; index <= numOfSlices; index++) {
    const newImg = document.createElement('img');
    newImg.src = 'img.jpeg';

    const rightMaskSkew = 100 - (slicePercentRatio * index);
    const leftMaskSkew = slicePercentRatio * (index - 1);
    newImg.style.clipPath = `inset(0% ${rightMaskSkew}% 0% ${leftMaskSkew}%)`;

    newImg.style.transformOrigin = `${(slicePercentRatio * index) - sliceCenterPercentRatio}% center`;

    imgWrapper.appendChild(newImg);
  }

  document.addEventListener('wheel', animateThrottle);
  document.addEventListener('touchmove', animateThrottle);
}

let currRotation = 5;

function animate() {
  const images = document.querySelectorAll('#img-wrapper>img');
  images.forEach((img) => {
    img.style.transform = `rotate3d(0, 1, 0, -${currRotation + 5}deg)`
  });
  currRotation += 10;
}

function animateThrottle() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      animate();
      ticking = false;
    });

    ticking.true;
  }
}

init();
