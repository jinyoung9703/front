// ajax (asynchronous javascript and xml)
// setTimeout(() => {
//   console.log("03");
// }, 0);
// console.log("01");
// console.log("02");
// console.log("04");
//비동기 예시.
const thumbsList = document.querySelector(".thumbs-box ul");

const search = document.querySelector(".search");
search.addEventListener("keyup", (e) => {
  if (e.key === "Enter" || e.keyCode === 13) {
    const searchWord = search.value; //전지현
    searchImg(searchWord);
  }
});

//promise 홍대역 8번출구 맥도날드() fullfield 약속이 이행되면 / rejected 약속이 지켜지지 않음

const searchImg = (searchWord) => {
  const aa = fetch(`https://dapi.kakao.com/v2/search/image?query=${searchWord}`, {
    headers: {
      Authorization: "KakaoAK 5d7246f1af7602008f2529298ebdf6b5",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.meta.is_end);
      console.log(data);
      const imgList = data.documents;
      imgList.forEach(function (item, idx) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = item.thumbnail_url;
        li.append(img);
        thumbsList.append(li);
      });
    });
  console.log(aa);
};
