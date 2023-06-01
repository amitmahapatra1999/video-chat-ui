function openCam() {
  let All_mediaDevices = navigator.mediaDevices;
  if (!All_mediaDevices || !All_mediaDevices.getUserMedia) {
    console.log('getUserMedia() not supported.');
    return;
  }
  All_mediaDevices.getUserMedia({
    audio: true,
    video: true,
  })
    .then(function (vidStream) {
      var video = document.getElementById('videoCam');
      if ('srcObject' in video) {
        video.srcObject = vidStream;
      } else {
        video.src = window.URL.createObjectURL(vidStream);
      }
      video.onloadedmetadata = function (e) {
        video.play();
      };
    })
    .catch(function (e) {
      console.log(e.name + ': ' + e.message);
    });
}

function dashboard() {
  let logoCard = document.getElementById('logo-card');
  let mainCard = document.getElementById('main-card');
  let dashboardBtn = document.getElementById('dashboard-btn');
  let joincallBtn = document.getElementById('joincall-btn');
  logoCard.classList.add('d-block');
  logoCard.classList.remove('d-none');
  mainCard.classList.remove('d-block');
  mainCard.classList.add('d-none');
  dashboardBtn.classList.add('active');
  joincallBtn.classList.remove('active');
}

function joinCall() {
  let logoCard = document.getElementById('logo-card');
  let mainCard = document.getElementById('main-card');
  let dashboardBtn = document.getElementById('dashboard-btn');
  let joincallBtn = document.getElementById('joincall-btn');
  logoCard.classList.remove('d-block');
  logoCard.classList.add('d-none');
  mainCard.classList.add('d-block');
  mainCard.classList.remove('d-none');
  dashboardBtn.classList.remove('active');
  joincallBtn.classList.add('active');
  openCam();
}
