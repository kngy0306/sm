const titleAnimation = () => {
  ityped.init(document.querySelector("#ityped"), {
    showCursor: false,
    strings: ["Suichu Megane"],
    loop: false
  });
}

setTimeout(titleAnimation, 500);