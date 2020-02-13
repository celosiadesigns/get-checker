function reloadPage() {
  location.reload();
}

function pause() {
  clearInterval(refreshTime);
  checkTime.textContent = 'PAUSED';
}

let body = document.getElementById('body');

let darkToggle = document.getElementById('darkToggle');
let isDark = false;
darkToggle.addEventListener('click', () => {
  if (isDark == false) {
    isDark = !isDark;
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
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
//Notes: instead of reloading the page, put get requests inside function. Call setinterval get request function
const web22Code = document.getElementById('web22-code');
const web22Text = document.getElementById('web22-text');
const web22Time = document.getElementById('web22-time');
axios
  .get('http://localhost:3000/posts')
  .then(response => {
    let reqEnd = new Date().getTime();
    let reqTime = reqEnd - reqStart;

    web22Code.classList.add('ok');
    web22Text.classList.add('ok');
    if (reqTime <= 300) {
      web22Time.classList.add('ok');
    } else if (reqTime <= 1000) {
      web22Time.classList.add('meh');
    } else {
      web22Time.classList.add('error');
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

// web 25

const web25Code = document.getElementById('web25-code');
const web25Text = document.getElementById('web25-text');
const web25Time = document.getElementById('web25-time');
axios
  .get('http://localhost:3000/posts')
  .then(response => {
    let reqEnd = new Date().getTime();
    let reqTime = reqEnd - reqStart;

    web25Code.textContent = response.status;
    web25Code.classList.add('ok');

    web25Text.textContent = response.statusText;
    web25Text.classList.add('ok');

    web25Time.textContent = reqTime + 'ms';
    if (reqTime <= 300) {
      web25Time.classList.add('ok');
    } else if (reqTime <= 1000) {
      web25Time.classList.add('meh');
    } else {
      web22Time.classList.add('error');
    }
  })
  .catch(error => {
    web25Code.textContent = error.response.status;
    web25Code.classList.add('error');

    web25Text.textContent = error.response.statusText;
    web25Text.classList.add('error');

    notifyMe('A server returned an error!');
  });
//web 71

const web71Code = document.getElementById('web71-code');
const web71Text = document.getElementById('web71-text');
const web71Time = document.getElementById('web71-time');
axios
  .get('http://localhost:3000/posts')
  .then(response => {
    let reqEnd = new Date().getTime();
    let reqTime = reqEnd - reqStart;

    web71Code.textContent = response.status;
    web71Code.classList.add('ok');

    web71Text.textContent = response.statusText;
    web71Text.classList.add('ok');

    web71Time.textContent = reqTime + 'ms';
    if (reqTime <= 300) {
      web71Time.classList.add('ok');
    } else if (reqTime <= 1000) {
      web71Time.classList.add('meh');
    } else {
      web22Time.classList.add('error');
    }
  })
  .catch(error => {
    web71Code.textContent = error.response.status;
    web71Code.classList.add('error');

    web71Text.textContent = error.response.statusText;
    web71Text.classList.add('error');

    notifyMe('A server returned an error!');
  });
//web 75

const web75Code = document.getElementById('web75-code');
const web75Text = document.getElementById('web75-text');
const web75Time = document.getElementById('web75-time');
axios
  .get('http://localhost:3000/posts')
  .then(response => {
    let reqEnd = new Date().getTime();
    let reqTime = reqEnd - reqStart;

    web75Code.textContent = response.status;
    web75Code.classList.add('ok');

    web75Text.textContent = response.statusText;
    web75Text.classList.add('ok');

    web75Time.textContent = reqTime + 'ms';
    if (reqTime <= 300) {
      web75Time.classList.add('ok');
    } else if (reqTime <= 1000) {
      web75Time.classList.add('meh');
    } else {
      web22Time.classList.add('error');
    }
  })
  .catch(error => {
    web75Code.textContent = error.response.status;
    web75Code.classList.add('error');

    web75Text.textContent = error.response.statusText;
    web75Text.classList.add('error');

    notifyMe('A server returned an error!');
  });

//web 76

const web76Code = document.getElementById('web76-code');
const web76Text = document.getElementById('web76-text');
const web76Time = document.getElementById('web76-time');
axios
  .get('http://localhost:3000/posts')
  .then(response => {
    let reqEnd = new Date().getTime();
    let reqTime = reqEnd - reqStart;

    web76Code.textContent = response.status;
    web76Code.classList.add('ok');

    web76Text.textContent = response.statusText;
    web76Text.classList.add('ok');

    web76Time.textContent = reqTime + 'ms';
    if (reqTime <= 300) {
      web76Time.classList.add('ok');
    } else if (reqTime <= 1000) {
      web76Time.classList.add('meh');
    } else {
      web22Time.classList.add('error');
    }
  })
  .catch(error => {
    web76Code.textContent = error.response.status;
    web76Code.classList.add('error');

    web76Text.textContent = error.response.statusText;
    web76Text.classList.add('error');

    notifyMe('A server returned an error!');
  });
