function init() {
  storage = { ...localStorage };
  let isStored = Object.keys(storage);
  isStored.forEach(item => {
    if (item != 'isDark') {
      let link = localStorage.getItem(item);
      addServer(item, link);
    }
    if (state.isDark === false) {
      darkMode(state.isDark);
      let toggle = document.getElementById('dark-switch');
      toggle.setAttribute('checked', '');
    }
  });
}

function reloadPage() {
  seconds = 0;
  servers.forEach(server => {
    checkServer(server, server.link);
  });
}

class Server {
  constructor(name, link) {
    this.name = name;
    this.link = link;
    this.tr = document.getElementById(name);
    this.code = document.getElementById(name + '-code');
    this.text = document.getElementById(name + '-text');
    this.time = document.getElementById(name + '-time');
  }
}

let serverName = document.getElementById('server-name');
let serverLink = document.getElementById('server-link');

let servers = [];
let serverId = 0;
let storage = {};
let state = {
  //paused: JSON.parse(localStorage.getItem('paused')),
  isDark: JSON.parse(localStorage.getItem('isDark')),
};

function addServer(name, link) {
  name = name;
  link = link;

  let tableBody = document.getElementById('tbody');

  let tableRow = document.createElement('tr');
  tableRow.setAttribute('id', `${name}`);

  let tdName = document.createElement('td');
  tdName.setAttribute('id', `${name}-name`);
  let nameText = document.createTextNode(`${name}`);
  tdName.appendChild(nameText);
  tableRow.appendChild(tdName);

  let tdCode = document.createElement('td');
  tdCode.setAttribute('id', `${name}-code`);
  tableRow.appendChild(tdCode);

  let tdText = document.createElement('td');
  tdText.setAttribute('id', `${name}-text`);
  tableRow.appendChild(tdText);

  let tdTime = document.createElement('td');
  tdTime.setAttribute('id', `${name}-time`);
  tableRow.appendChild(tdTime);

  tableBody.appendChild(tableRow);

  let server = new Server(name, link);

  servers.push(server);
  serverId++;

  if (storageAvailable('localStorage')) {
    localStorage.setItem(name, link);
    storage = { ...localStorage };
  } else {
    alert(
      `Something went wrong adding your server! The server ${name} may not persist after closing the window!`
    );
  }

  checkServer(server, link);
}

function checkServer(server, link) {
  let reqStart = new Date().getTime();

  axios
    .get(link)
    .then(response => {
      let reqEnd = new Date().getTime();
      let reqTime = reqEnd - reqStart;

      server.tr.classList.remove('error');
      server.tr.classList.add(ok);

      if (reqTime <= 300) {
        server.time.classList.add(ok);
        server.time.classList.remove('meh');
        server.time.classList.remove('error');
      } else if (reqTime <= 1000) {
        server.time.classList.add('meh');
        server.time.classList.remove(ok);
        server.time.classList.remove('error');
      } else {
        server.time.classList.add('error');
        server.time.classList.remove('meh');
        server.time.classList.remove(ok);
      }

      server.code.textContent = response.status;
      server.text.textContent = response.statusText;
      server.time.textContent = reqTime + 'ms';
    })
    .catch(error => {
      server.code.textContent = error.response.status;
      server.code.classList.add('error');

      server.text.textContent = error.response.statusText;
      server.text.classList.add('error');

      notifyMe('A server returned an error!');
    });
}

function removeServer(server) {
  let index = server;
  servers.splice(index, 1);
  serverId--;
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

function darkMode(bool) {
  if (bool === false) {
    body.classList.add('dark-mode');

    servers.forEach(server => {
      server.tr.classList.remove(ok);
      server.time.classList.remove(ok);
    });

    ok = 'ok-dark';

    servers.forEach(server => {
      server.tr.classList.add(ok);
      server.time.classList.add(ok);
    });

    //state needs to be opposite for function re-use
    isDark = true;
    localStorage.setItem('isDark', false);
  } else {
    body.classList.remove('dark-mode');

    servers.forEach(server => {
      server.tr.classList.remove(ok);
      server.time.classList.remove(ok);
    });

    ok = 'ok';

    servers.forEach(server => {
      server.tr.classList.add(ok);
      server.time.classList.add(ok);
    });

    isDark = false;
    localStorage.setItem('isDark', true);
  }
}

darkToggle.addEventListener('click', () => {
  darkMode(isDark);
});

let checkTime = document.getElementById('checkTime');
let seconds = 0;
let duration = 10;

let refreshTime = setInterval(function() {
  if (seconds === duration) {
    checkTime.textContent = seconds + ' seconds since last checked';
    reloadPage();
  } else {
    checkTime.textContent = seconds + ' seconds since last checked';
    seconds++;
  }
}, 1000);

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

// localStorage

function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

//init
init();
