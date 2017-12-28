const delete_user = (event) => {
  const id = event.parentElement.parentElement.children[0].innerText;
  const reqObject = {
    url: '/member/delete',
    method: 'POST',
    body: { user_id: id },
  };
  request(reqObject, (res, err) => {
    if (err) {
      console.log('err');
    } else {
      // console.log(res);
      window.pathname.location = '/members';
    }
  });
};
