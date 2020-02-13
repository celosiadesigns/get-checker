function reloadPage() {
  seconds = 0;
  reqStart = new Date().getTime();
  web22();
  web25();
  web71();
  web75();
  web76();
}

let pauseButton = document.getElementById('pauseButton');
let paused = false;

function pause() {
  if (paused === false) {
    clearInterval(refreshTime);

    checkTime.textContent = 'PAUSED';
    pauseButton.textContent = 'Unpause';

    paused = !paused;
  } else {
    refreshTime = setInterval(function() {
      if (seconds === duration) {
        checkTime.textContent = seconds + ' seconds since last checked';
        reloadPage();
      } else {
        checkTime.textContent = seconds + ' seconds since last checked';
        seconds++;
      }
    }, 1000);

    pauseButton.textContent = 'Pause';

    paused = !paused;
  }
}

let body = document.getElementById('body');

let darkToggle = document.getElementById('darkToggle');
let isDark = false;
let ok = 'ok';

darkToggle.addEventListener('click', () => {
  if (isDark === false) {
    body.classList.add('dark-mode');
    web22tr.classList.remove(ok);
    web25tr.classList.remove(ok);
    web71tr.classList.remove(ok);
    web75tr.classList.remove(ok);
    web76tr.classList.remove(ok);

    web22Time.classList.remove(ok);
    web25Time.classList.remove(ok);
    web71Time.classList.remove(ok);
    web75Time.classList.remove(ok);
    web76Time.classList.remove(ok);

    ok = 'ok-dark';

    web22tr.classList.add(ok);
    web25tr.classList.add(ok);
    web71tr.classList.add(ok);
    web75tr.classList.add(ok);
    web76tr.classList.add(ok);

    web22Time.classList.add(ok);
    web25Time.classList.add(ok);
    web71Time.classList.add(ok);
    web75Time.classList.add(ok);
    web76Time.classList.add(ok);

    isDark = !isDark;
  } else {
    body.classList.remove('dark-mode');
    web22tr.classList.remove(ok);
    web25tr.classList.remove(ok);
    web71tr.classList.remove(ok);
    web75tr.classList.remove(ok);
    web76tr.classList.remove(ok);

    web22Time.classList.remove(ok);
    web25Time.classList.remove(ok);
    web71Time.classList.remove(ok);
    web75Time.classList.remove(ok);
    web76Time.classList.remove(ok);

    ok = 'ok';

    web22tr.classList.add(ok);
    web25tr.classList.add(ok);
    web71tr.classList.add(ok);
    web75tr.classList.add(ok);
    web76tr.classList.add(ok);

    web22Time.classList.add(ok);
    web25Time.classList.add(ok);
    web71Time.classList.add(ok);
    web75Time.classList.add(ok);
    web76Time.classList.add(ok);

    isDark = !isDark;
  }
});

let checkTime = document.getElementById('checkTime');
let seconds = 0;
let duration = 300;

let refreshTime = setInterval(function() {
  if (seconds === duration) {
    checkTime.textContent = seconds + ' seconds since last checked';
    reloadPage();
  } else {
    checkTime.textContent = seconds + ' seconds since last checked';
    seconds++;
  }
}, 1000);

let reqStart = new Date().getTime();

//Notices

function notifyMe(notice) {
  if (!('Notification' in window)) {
    alert('Desktop notification disabled');
  } else if (Notification.permission === 'granted') {
    let notification = new Notification(notice);
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(function(permission) {
      if (permission === 'granted') {
        let notification = new Notification(notice);
      }
    });
  }
}

//web 22

const web22tr = document.getElementById('web22');
const web22Code = document.getElementById('web22-code');
const web22Text = document.getElementById('web22-text');
const web22Time = document.getElementById('web22-time');

function web22() {
  axios
    .get('https://web22.gkg.net/cpanel')
    .then(response => {
      let reqEnd = new Date().getTime();
      let reqTime = reqEnd - reqStart;

      web22tr.classList.remove('error');
      web22tr.classList.add(ok);

      if (reqTime <= 300) {
        web22Time.classList.add(ok);
        web22Time.classList.remove('meh');
        web22Time.classList.remove('error');
      } else if (reqTime <= 1000) {
        web22Time.classList.add('meh');
        web22Time.classList.remove(ok);
        web22Time.classList.remove('error');
      } else {
        web22Time.classList.add('error');
        web22Time.classList.remove('meh');
        web22Time.classList.remove(ok);
      }

      web22Code.textContent = response.status;
      web22Text.textContent = response.statusText;
      web22Time.textContent = reqTime + 'ms';
    })
    .catch(error => {
      web22Code.textContent = error.response.status;
      web22Code.classList.add('error');

      web22Text.textContent = error.response.statusText;
      web22Text.classList.add('error');

      notifyMe('A server returned an error!');
    });
}

// web 25

const web25tr = document.getElementById('web25');
const web25Code = document.getElementById('web25-code');
const web25Text = document.getElementById('web25-text');
const web25Time = document.getElementById('web25-time');

function web25() {
  axios
    .get('https://web25.gkg.net/cpanel')
    .then(response => {
      let reqEnd = new Date().getTime();
      let reqTime = reqEnd - reqStart;

      web25tr.classList.remove('error');
      web25tr.classList.add(ok);

      if (reqTime <= 300) {
        web25Time.classList.add(ok);
        web25Time.classList.remove('meh');
        web25Time.classList.remove('error');
      } else if (reqTime <= 1000) {
        web25Time.classList.add('meh');
        web25Time.classList.remove(ok);
        web25Time.classList.remove('error');
      } else {
        web25Time.classList.add('error');
        web25Time.classList.remove('meh');
        web25Time.classList.remove(ok);
      }

      web25Code.textContent = response.status;
      web25Text.textContent = response.statusText;
      web25Time.textContent = reqTime + 'ms';
    })
    .catch(error => {
      web25Code.textContent = error.response.status;
      web25Code.classList.add('error');

      web25Text.textContent = error.response.statusText;
      web25Text.classList.add('error');

      notifyMe('A server returned an error!');
    });
}

//web 71

const web71tr = document.getElementById('web71');
const web71Code = document.getElementById('web71-code');
const web71Text = document.getElementById('web71-text');
const web71Time = document.getElementById('web71-time');

function web71() {
  axios
    .get('https://web71.gkg.net/cpanel')
    .then(response => {
      let reqEnd = new Date().getTime();
      let reqTime = reqEnd - reqStart;

      web71tr.classList.remove('error');
      web71tr.classList.add(ok);

      if (reqTime <= 300) {
        web71Time.classList.add(ok);
        web71Time.classList.remove('meh');
        web71Time.classList.remove('error');
      } else if (reqTime <= 1000) {
        web71Time.classList.add('meh');
        web71Time.classList.remove(ok);
        web71Time.classList.remove('error');
      } else {
        web71Time.classList.add('error');
        web71Time.classList.remove('meh');
        web71Time.classList.remove(ok);
      }

      web71Code.textContent = response.status;
      web71Text.textContent = response.statusText;
      web71Time.textContent = reqTime + 'ms';
    })
    .catch(error => {
      web71Code.textContent = error.response.status;
      web71Code.classList.add('error');

      web71Text.textContent = error.response.statusText;
      web71Text.classList.add('error');

      notifyMe('A server returned an error!');
    });
}

//web 75

const web75tr = document.getElementById('web75');
const web75Code = document.getElementById('web75-code');
const web75Text = document.getElementById('web75-text');
const web75Time = document.getElementById('web75-time');

function web75() {
  axios
    .get('https://web75.gkg.net/cpanel')
    .then(response => {
      let reqEnd = new Date().getTime();
      let reqTime = reqEnd - reqStart;

      web75tr.classList.remove('error');
      web75tr.classList.add(ok);

      if (reqTime <= 300) {
        web75Time.classList.add(ok);
        web75Time.classList.remove('meh');
        web75Time.classList.remove('error');
      } else if (reqTime <= 1000) {
        web75Time.classList.add('meh');
        web75Time.classList.remove(ok);
        web75Time.classList.remove('error');
      } else {
        web75Time.classList.add('error');
        web75Time.classList.remove('meh');
        web75Time.classList.remove(ok);
      }

      web75Code.textContent = response.status;
      web75Text.textContent = response.statusText;
      web75Time.textContent = reqTime + 'ms';
    })
    .catch(error => {
      web75Code.textContent = error.response.status;
      web75Code.classList.add('error');

      web75Text.textContent = error.response.statusText;
      web75Text.classList.add('error');

      notifyMe('A server returned an error!');
    });
}

//web 76

const web76tr = document.getElementById('web76');
const web76Code = document.getElementById('web76-code');
const web76Text = document.getElementById('web76-text');
const web76Time = document.getElementById('web76-time');

function web76() {
  axios
    .get('https://web76.gkg.net/cpanel')
    .then(response => {
      let reqEnd = new Date().getTime();
      let reqTime = reqEnd - reqStart;

      web76tr.classList.remove('error');
      web76tr.classList.add(ok);

      if (reqTime <= 300) {
        web76Time.classList.add(ok);
        web76Time.classList.remove('meh');
        web76Time.classList.remove('error');
      } else if (reqTime <= 1000) {
        web76Time.classList.add('meh');
        web76Time.classList.remove(ok);
        web76Time.classList.remove('error');
      } else {
        web22Time.classList.add('error');
        web76Time.classList.remove('meh');
        web76Time.classList.remove(ok);
      }

      web76Code.textContent = response.status;
      web76Text.textContent = response.statusText;
      web76Time.textContent = reqTime + 'ms';
    })
    .catch(error => {
      web76Code.textContent = error.response.status;
      web76Code.classList.add('error');

      web76Text.textContent = error.response.statusText;
      web76Text.classList.add('error');

      notifyMe('A server returned an error!');
    });
}

//init
reloadPage();
