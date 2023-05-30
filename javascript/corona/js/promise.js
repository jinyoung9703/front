const myPromise = new Promise(function (resolve, rejaect) {
  setTimeout(function () {
    resolve("success");
  }, 1000);
});
myPromise.then(function (msg) {
  console.log(msg);
});
