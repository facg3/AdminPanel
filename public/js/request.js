const request = (reqObject, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        cb(xhr.responseText);
      } else {
        console.log(xhr.responseText);
      }
    }
  };
  xhr.open(reqObject.method, reqObject.url);
  xhr.send(JSON.stringify(reqObject.body));
};
