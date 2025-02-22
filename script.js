const hero = document.querySelector(".hero"),
  heroWrapper = hero.querySelector(".hero-wrapper"),
  heroFrames = hero.querySelectorAll(".hero-frame"),
  heroImages = hero.querySelectorAll(".hero-frame-figure");

// 초기 elements 화면에 생성
const init = () => {
  gsap.from(heroFrames, {
    duration: 1.8,
    scale: 0,
    ease: "expo.inOut",
    onComplete: drag,
    stagger: 0.08,
  });
};

// draggable event
const drag = () => {
  Draggable.create(heroWrapper, {
    dragClickables: true,
    type: "x,y",
    bounds: window,
    onDragStart: () => {
      gsap.to(heroFrames, {
        duration: 0.2,
        scale: 1.1,
        ease: "power1.out",
      });
    },
    onDragEnd: () => {
      gsap.to(heroFrames, {
        duration: 0.2,
        scale: 1,
        ease: "power1.out",
      });
    },
  });
};

window.onload = () => {
  init();

  // clickable check
  heroFrames.forEach((frame) => {
    const frameText = frame.querySelector(".hero-frame-text");
    frame.addEventListener("click", () => {
      console.log(frameText);
    });
  });
};
