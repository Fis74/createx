// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const videoBlock = document.querySelector(".video-block");

if (videoBlock) {
  const video = videoBlock.querySelector("video");
  const playBtn = videoBlock.querySelector(".video-block__play");
  const mutedBtn = videoBlock.querySelector(".video-block__muted");
  function checkMuted() {
    if (video.muted) {
      mutedBtn.classList.add("video-block__muted--visible");
    }
  }
  checkMuted();
  playBtn.addEventListener("click", () => {
    videoBlock.classList.add("video-block--played");
    video.play();
    video.controls = true;
    mutedBtn.classList.remove("video-block__muted--visible");
    playBtn.classList.add("video-block__play--played");
  });

  video.onpause = function () {
    videoBlock.classList.remove("video-block--played");
    video.controls = false;
    checkMuted();
    playBtn.classList.remove("video-block__play--played");
  };
}
