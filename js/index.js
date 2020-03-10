wow = new WOW(
  {
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0// アニメーションをスタートさせる距離
  }
);
wow.init();

ityped.init(document.querySelector("#ityped"), {
  showCursor: false,
  strings: ["Suichu Megane"],
  startDelay: 500,
  typeSpeed: 140,
  loop: false
});

const jin = document.getElementById('jin');
const hotaru = document.getElementById('hotaru');
const logo = document.getElementById('logo');


jin.addEventListener('mouseenter', () => {
  logo.style.transform = "translateX(-180px)";
}, false);
jin.addEventListener('mouseleave', () => {
  logo.style.transform = "translateX(0)";
}, false);

hotaru.addEventListener('mouseenter', () => {
  logo.style.transform = "translateX(205px)";
}, false);
hotaru.addEventListener('mouseleave', () => {
  logo.style.transform = "translateX(0)";
}, false);