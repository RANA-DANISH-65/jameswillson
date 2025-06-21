const video = document.getElementById("myVideo");
const thumbnailOverlay = document.getElementById("thumbnailOverlay");

// Play video and hide overlay when clicked
thumbnailOverlay.addEventListener("click", () => {
  thumbnailOverlay.style.display = "none";
  video.play();
});

// Show thumbnail when video ends
video.addEventListener("ended", () => {
  thumbnailOverlay.style.display = "flex";
});

const video2 = document.getElementById("video2");
const videoOverlay2 = document.getElementById("videoOverlay2");

// Play video on overlay click
videoOverlay2.addEventListener("click", () => {
  videoOverlay2.style.display = "none";
  video2.play();
});

// Show overlay again when video ends
video2.addEventListener("ended", () => {
  videoOverlay2.style.display = "flex";
});
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("navbar");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggle.classList.toggle("open");
});
