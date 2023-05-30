// ajax (asynchronous javascript and xml)
// setTimeout(() => {
//   console.log("03");
// }, 0);
// console.log("01");
// console.log("02");
// console.log("04");
//비동기 예시.

const search = document.querySelector(".search");
search.addEventListener("keyup", (e) => {
  if (e.key === "Enter" || e.keyCode === 13) {
    const searchWord = search.value; //전지현
    searchImg(searchWord);
  }
});

//promise 홍대역 8번출구 맥도날드() fullfield 약속이 이행되면 / rejected 약속이 지켜지지 않음

// const searchImg = (searchWord) => {
//   const aa = fetch(`https://dapi.kakao.com/v2/search/image?query=${searchWord}`, {
//     headers: {
//       Authorization: "KakaoAK 5d7246f1af7602008f2529298ebdf6b5",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       // console.log(data.meta.is_end);
//       console.log(data);
//       const imgList = data.documents;
//       imgList.forEach(function (item, idx) {
//         const li = document.createElement("li");
//         const img = document.createElement("img");
//         img.src = item.thumbnail_url;
//         li.append(img);
//         thumbsList.append(li);
//       });
//     });
//   console.log(aa);
// };

// 이미지

const imgbt = document.querySelector(".imgbt");
const video = document.querySelector(".video");
const thumbsList = document.querySelector(".thumbs-box ul");

imgbt.addEventListener("click", function () {
  const removeItem = () => {
    const imgItem = document.querySelectorAll(".thumbs-box ul li");
    imgItem.forEach((item, idx) => {
      item.remove();
    });
  };

  const searchImg = async (searchWord) => {
    removeItem();

    const imgResponse = await fetch(`https://dapi.kakao.com/v2/search/image?query=${searchWord}`, {
      headers: {
        Authorization: "KakaoAK 5d7246f1af7602008f2529298ebdf6b5",
      },
    });

    const imgJson = await imgResponse.json();
    const imgList = imgJson.documents;

    imgList.forEach(function (item, idx) {
      const li = document.createElement("li");
      const img = document.createElement("img");
      const a = document.createElement("a");

      img.src = item.thumbnail_url;
      a.href = item.image_url;
      a.setAttribute("data-fancybox", "gallery");
      a.append(img);
      li.append(a);
      thumbsList.append(li);
    });

    gsap.from(".thumbsList li", { scale: 0, duration: 1, stagger: 0.02 });

    Fancybox.bind("[data-fancybox]", {
      // 필요한 옵션 설정
    });
  };

  searchImg(`https://dapi.kakao.com/v2/search/image?query=${searchWord}`); // 검색어를 원하는 키워드로 변경해주세요
  alert("딸깍");
});

video.addEventListener("click", function () {
  const removeItem = () => {
    const imgItem = document.querySelectorAll(".thumbs-box ul li");
    imgItem.forEach((item, idx) => {
      item.remove();
    });
  };

  const searchVideo = async (searchWord) => {
    removeItem();

    const imgResponse = await fetch(`https://dapi.kakao.com/v2/search/vclip?query=${searchWord}&size=30`, {
      headers: {
        Authorization: "KakaoAK 5d7246f1af7602008f2529298ebdf6b5",
      },
    });

    const imgJson = await imgResponse.json();
    const imgList = imgJson.documents;

    imgList.forEach(function (item, idx) {
      const li = document.createElement("li");
      const img = document.createElement("img");
      const a = document.createElement("a");

      img.src = item.thumbnail;
      a.href = item.url;
      a.setAttribute("data-fancybox", "gallery");
      a.append(img);
      li.append(a);
      thumbsList.append(li);
    });

    gsap.from(".thumbsList li", { scale: 0, duration: 1, stagger: 0.02 });

    Fancybox.bind("[data-fancybox]", {
      // 필요한 옵션 설정
    });
  };

  const thumbsList = prompt("검색어를 입력하세요"); // 검색어 입력 받기

  if (searchInput) {
    searchVideo(searchInput);
    alert("딸깍");
  } else {
    alert("검색어를 입력하지 않았습니다.");
  }
});
