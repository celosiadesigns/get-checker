function reloadPage() {
  location.reload();
}

let checkTime = document.getElementById('checkTime');
let seconds = 0;
let duration = 300;

setInterval(function() {
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

const web22 = document.getElementById('web22');
axios
  .get('https://web22.gkg.net/cpanel')
  .then(response => {
    let reqEnd = new Date().getTime();
    let reqTime = reqEnd - reqStart;
    web22.textContent =
      response.status + ' ' + response.statusText + ' ' + reqTime + 'ms';
    web22.classList.add(`ok`);
  })
  .catch(error => {
    web22.textContent = error.response.status + ' ' + error.response.statusText;
    web22.classList.add('error');
    notifyMe('A server returned an error!');
  });

// web 25

const web25 = document.getElementById('web25');
axios
  .get('https://web25.gkg.net/cpanel')
  .then(response => {
    let reqEnd = new Date().getTime();
    let reqTime = reqEnd - reqStart;
    web25.textContent =
      response.status + ' ' + response.statusText + ' ' + reqTime + 'ms';
    web25.classList.add(`ok`);
  })
  .catch(error => {
    web25.textContent = error.response.status + ' ' + error.response.statusText;
    web25.classList.add('error');
    notifyMe('A server returned an error!');
  });

//web 71

const web71 = document.getElementById('web71');
axios
  .get('https://web71.gkg.net/cpanel')
  .then(response => {
    let reqEnd = new Date().getTime();
    let reqTime = reqEnd - reqStart;
    web71.textContent =
      response.status + ' ' + response.statusText + ' ' + reqTime + 'ms';
    web71.classList.add(`ok`);
  })
  .catch(error => {
    web71.textContent = error.response.status + ' ' + error.response.statusText;
    web71.classList.add('error');
    notifyMe('A server returned an error!');
  });

//web 75

const web75 = document.getElementById('web75');
axios
  .get('https://web75.gkg.net/cpanel')
  .then(response => {
    let reqEnd = new Date().getTime();
    let reqTime = reqEnd - reqStart;
    web75.textContent =
      response.status + ' ' + response.statusText + ' ' + reqTime + 'ms';
    web75.classList.add(`ok`);
  })
  .catch(error => {
    web75.textContent = error.response.status + ' ' + error.response.statusText;
    web75.classList.add('error');
    notifyMe('A server returned an error!');
  });

//web 76

const web76 = document.getElementById('web76');
axios
  .get('https://web76.gkg.net/cpanel')
  .then(response => {
    let reqEnd = new Date().getTime();
    let reqTime = reqEnd - reqStart;
    web76.textContent =
      response.status + ' ' + response.statusText + ' ' + reqTime + 'ms';
    web76.classList.add(`ok`);
  })
  .catch(error => {
    web76.textContent = error.response.status + ' ' + error.response.statusText;
    web76.classList.add('error');
    notifyMe('A server returned an error!');
  });
