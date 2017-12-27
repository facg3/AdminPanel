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
  // alert('myalert', reqObject.body.username);
  request(reqObject, (err, res) => {
    if (err) {
      return console.log(err);
    }
    console.log(res);
  });
});
