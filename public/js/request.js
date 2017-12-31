const request = (reqObject, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        cb(null, xhr.responseText);
      } else {
        return alert(xhr.responseText);
      }
    }
    return null;
  };
  xhr.open(reqObject.method, reqObject.url);
  xhr.send(JSON.stringify(reqObject.body));
};
