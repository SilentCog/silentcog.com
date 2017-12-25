const getJSON = (url, cb) => {
  const req = new XMLHttpRequest();
  req.onload = () => {
    if (req.status === 404) {
      cb(new Error('not found'));
    } else {
      cb(null, JSON.parse(req.response));
    }
  };
  req.open('GET', url);
  req.send();
};

export default {
  getJSON
};

