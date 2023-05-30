const myPromise = new Promise(function (resolve, rejaect) {
  setTimeout(function () {
    resolve("fail");
  }, 1000);
});
myPromise.then(function (msg) {
  console.log(msg);
});
myPromise.catch(function (msg) {
  console.log(msg);
});
