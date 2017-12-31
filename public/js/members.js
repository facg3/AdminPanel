const delete_user = (event) => {
  const id = event.parentElement.parentElement.children[0].innerText;
  const reqObject = {
    url: '/member/delete',
    method: 'POST',
    body: { user_id: id },
  };
  request(reqObject, (err, res) => {
    if (err) {
      return alert('Error Occured, try again...');
    } else if (res === 'deleted') {
      return window.location.pathname = '/members';
    }
    return alert('Something went wrong');
  });
};
