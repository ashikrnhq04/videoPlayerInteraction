class VideoPlay {
  constructor(videoWrapper, playBtn) {
    this.videoWrapper = videoWrapper;
    this.videoElement = videoWrapper.querySelector("video");
    this.playBtn = playBtn;

    this.play = this.videoPlay.bind(this.videoElement);
    this.restart = this.videoRestart.bind(this.videoElement);
    this.pause = this.videoPause.bind(this.videoElement);
    this.btnText = this.playBtnText.bind(this.playBtn, this.videoElement);
    this.observer = this.videoObserve.bind(this.videoElement, this.btnText);

    this.btnShow = this.playBtnShow.bind(this.playBtn);
    this.btnHide = this.playBtnHide.bind(this.playBtn);

    this.videoWrapper?.addEventListener("click", (e) => {
      if (e.target == this.videoElement || e.target == this.playBtn) {
        if (this.videoElement.muted && !this.videoElement.paused) {
          this.restart();
        } else if (!this.videoElement.paused && !this.videoElement.muted) {
          this.pause();
          this.btnShow();
        } else {
          this.play();
        }
        this.btnText();
      } else {
        return null;
      }
    });

    this.videoWrapper?.addEventListener("mouseover", (e) => {
      if (e.target == this.videoElement) this.btnShow();
    });

    this.videoWrapper?.addEventListener("mouseleave", (e) => {
      this.btnHide();
    });
    this.videoElement.addEventListener("playing", () => {
      if (!this.muted) {
        setTimeout(this.btnHide, 1000);
      }
    });

    this.videoElement.play();
    this.observer();
  }

  //update button text
  playBtnText(videoElement) {
    (!videoElement.paused && videoElement.muted) || videoElement.paused
      ? (this.textContent = "Play")
      : (this.textContent = "Pause");
  }

  playBtnShow() {
    this.classList.add("active");
  }

  playBtnHide() {
    this.classList.remove("active");
  }

  //restart the video
  videoRestart() {
    this.currentTime = 0;
    this.play();
    this.muted = false;
  }

  videoPause() {
    this.pause();
  }

  videoPlay() {
    this.play();
  }

  //video element observer to observe if out of view port on in
  videoObserve(btnText) {
    let observer = new IntersectionObserver((item) => {
      if (!item[0].isIntersecting) {
        if (!item[0].target.paused && !item[0].target.muted) {
          item[0].target.muted = true;
        } else {
          item[0].target.muted = true;
          item[0].target.play();
        }
      }
      btnText();
    });

    observer.observe(this);
  }
}

//play button element
const playBtn = document.querySelector(".playBtn");

//video element wrapper
const videoWrapper = document.querySelector(".video-wrapper");

//initialization of the constructor to make the video element functional
let videoPlay = new VideoPlay(videoWrapper, playBtn);
