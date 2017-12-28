const select = selector => document.querySelector(selector);

select('#submit').addEventListener('click', (e) => {
  e.preventDefault();
  const reqObject = {
    method: 'POST',
    url: '/login',
    body: {
      username: select('#username').value,
      password: select('#password').value,
    },
  };
  request(reqObject, (err, res) => {
    if (err) {
      return alert('errorConnectingToDB');
    } else if (res === 'noSuchAdmin' || res === 'wrongPassword') {
      return alert('loginFailed');
    } else if (res === 'redirectToDashboard') {
      window.location.pathname = '/dashboard';
    }
  });
});
