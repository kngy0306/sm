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
const hotaru_mono = document.getElementById('hotaru_mono');
const jin_mono = document.getElementById('jin_mono');

jin.addEventListener('mouseenter', () => {
  hotaru_mono.style.display = "block";
}, false);
jin.addEventListener('mouseleave', () => {
  hotaru_mono.style.display = "none";
}, false);

hotaru.addEventListener('mouseenter', () => {
  jin_mono.style.display = "block";
}, false);
hotaru.addEventListener('mouseleave', () => {
  jin_mono.style.display = "none";
}, false);