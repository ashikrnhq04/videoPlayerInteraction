# Script to control video player and user interaction
The goal was to build a system to control a video player, such as this website https://landor.com, using vanilla JavaScript. So, the video will play in mute. Once the user lands on the page and up or clicks the video/play button element, the video will start with sound. Once the video element is out of the viewport, it'll mute. 

## Features
- Play video in mute.
- Toggle the video player and play with sound once a user clicks.
- Mute the player if the video is out of the viewport.
- Toggle the play button text and visibility when playing video.
  - When playing the video, the button will hide, and when pausing, the button will show.
  - On leaving the mouse from the video element, the button will hide and the opposite when hover the video element.
 
## Installation
Download and add the index.js in <script> tag before the </body>. You can change the file name to whatever you want. 

### Prerequisite
* An HTML <video> element with a valid video source.
* The video element should have "muted" and "loop" attributes.
* A wrapper ( div, section etc. ) element to wrap the video and a button element inside it.
* The video element should have an ID "video".

### Initialization
To initialize the function, create an instance of the class "VideoPlay". Make sure to pass the wrapper element and the button element as parameters. 

### Example 
//play button element </br>
const playBtn = document.querySelector(".playBtn");

//video element wrapper </br>
const videoWrapper = document.querySelector(".video-wrapper");

//initialization of the constructor to make the video element functional </br>
const videoPlay = new VideoPlay(videoWrapper, playBtn);
