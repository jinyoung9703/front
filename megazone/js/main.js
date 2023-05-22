/*const menu01 = document.querySelector(".master-piec .menu li:nth-child(1)");
const menu02 = document.querySelector(".master-piec .menu li:nth-child(2)");
const menu03 = document.querySelector(".master-piec .menu li:nth-child(3)");

menu01.addEventListener("click", function () {
  alert("menu01을 눌렀습니다.");
});
menu02.addEventListener("click", callFunc);

//사용자가 이벤트를 발생시켰을때 나중에 호출된다. callback
function callFunc() {
  console.log("함수를 실행합니다.");
}
//callFunc();
*/

const header = document.querySelector(".header");
const menu = document.querySelectorAll(".master-piece .menu li");

const gnbList = document.querySelectorAll(".gnb .list > li");
console.log(gnbList);
gnbList.forEach(function (item, idx) {
  item.addEventListener("mouseenter", function () {
    console.log("dddd");
    header.classList.add("on");
  });
  item.addEventListener("mouseleave", function () {
    header.classList.remove("on");
  });
});
// 진짜 배열은 아님.. 그러므로 배열의 메서드는 쓸 수 없음.
// for (let i = 0; i < menu.length; i++) {
//   menu[i].addEventListener("click", function () {
//     alert(i + "번째 입니다.");
//   });
//}

//일급 객체
//함수를 변수에 할당할 수 있다.
//다른 함수를 인자(argument)로 전달 받을 수 있다.
//다른 함수의 결과 로서 리턴 가능하다.

//bb(); 실행은 하는데 선언되지않음 화살표 함수는 익명에만 쓸 수있다

// const bb = () => {
//   console.log("함수 선언문입니다.");
// };
// //한줄일떈 중괄호 안써도됨 리턴도 생략 가능
// const aa = () => console.log("함수 표현식입니다.");
// bb();
// aa();

// const sum = (a, b) => a + b;
// console.log(sum(100, 100));

// //prettier-ignore
// const double = num => num * 2;

// const contentsList = document.querySelectorAll(".master-piece .contents li");

// menu.forEach((item, idx) => {
//   item.addEventListener("mouseenter", () => {
//     //   console.log(idx + "번째 입니다.");
//     contentsList.forEach((item02, idx02) => {
//       item02.classList.remove("on");
//     });
//     const target = document.querySelector(`.master-piece .contents li:nth-child(${idx + 1})`);
//     console.log(target);
//     target.classList.add("on");
//   });
//   item.addEventListener("mouseleave", () => {
//     contentsList.forEach((item02, idx02) => {
//       item02.classList.remove("on");
//     });
//   });
// });

//화살표 함수 위랑 같은거다 fat arrow function

// menu.forEach( (item, idx) =>{
//   item.addEventListener("click", ()=> {
//     console.log(idx + "번째 입니다.");
//   });
// });

const mainSwiper = new Swiper(".main-visual .mask", {
  speed: 600,
  loop: true,
  //effect: "cube",
  effect: "fade",
  navigation: {
    nextEl: ".main-visual .btns .btn-next",
    prevEl: ".main-visual .btns .btn-prev",
  },
  pagination: {
    el: ".main-visual .pagination",
    type: "fraction",
  },
});

//const fruits = ["apple", "melon", "peach"];
const swiper = new Swiper(".social .mask", {
  speed: 600,
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  // loopedslides: 10,
  navigation: {
    nextEl: ".social .btns .btn-next",
    prevEl: ".social .btns .btn-prev",
  },
  pagination: {
    el: ".social .pagination .inner",
    type: "progressbar",
  },
  //centeredSlides:true
});
