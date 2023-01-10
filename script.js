const loginButton = document.querySelector('.option .btn');
const email = document.querySelector('.option.email input');
const password = document.querySelector('.option.password input');
const form = document.querySelector('.form');
// const [email, password] = inputs;

function writeCookie(name, value, days) {
  var date, expires;
  if (days) {
    date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toGMTString();
  } else {
    expires = '';
  }
  document.cookie = name + '=' + value + expires + '; path=/';
}

function readCookie(name) {
  var i,
    c,
    ca,
    nameEQ = name + '=';
  ca = document.cookie.split(';');
  for (i = 0; i < ca.length; i++) {
    c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) == 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return '';
}

function showAlreadyLoggedInfo() {
  if (readCookie('sessionId')) {
    form.innerHTML = 'You are  already logged in! ';
  }
}

showAlreadyLoggedInfo();

loginButton.addEventListener('click', (e) => {
  console.log(email.value, password.value);
  e.preventDefault();
  if (email.value === 'hello@mail.com' && password.value === 'hello') {
    const sId = 's234543245';
    writeCookie('sessionId', sId, 3);
    form.innerHTML = 'You are  now  logged in! ';
    console.log('nice');
  }
});
