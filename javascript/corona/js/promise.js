//async/await

/*
const myPromise = new Promise(function (resolve, rejaect) {
  setTimeout(function () {
    resolve("success");
    // resolve("fail");
  }, 1000);
});
console.log(myPromise);
myPromise
  .then(function (msg) {
    console.log(msg);
  })

  .catch(function (msg) {
    console.log(msg);
  })

  .finally(function () {
    console.log("이건 무조건 출력");
    console.log(myPromise);
  });*/

const user = {
  id: "jjy03",
  name: "정진영",
};

function fatchUser() {
  const url = "https://jsonplaceholder.typicode.com/users/1";
  return fetch(url).then((response) => response.json());
}

// 비동기적 실행을 동기적으로 바꾼다.
async function checkName() {
  const user = await fatchUser();
  console.log(user);
  if (user.id === 1) {
    console.log(user.name);
  }
}

//async funtion 앞에 넣어주면 await 을
//사용할 수 있는데 비동기를 동기식으로 바꿔준다
//async안에서만 await를 사용 할 수 있다.

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => data.userId)
  .then(function (userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then(function (user) {
        // console.log(user.name);
      });
  });

async function fetchUserName(postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post = await response.json();
  const userId = post.userId;
  const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await userResponse.json();
  return user.name;
}
console.log(
  fetchUserName(1).then(function (name) {
    console.log(name);
  })
);
