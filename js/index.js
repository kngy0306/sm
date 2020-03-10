ityped.init(document.querySelector("#ityped"), {
  showCursor: false,
  strings: ["Suichu Megane"],
  startDelay: 1000,
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