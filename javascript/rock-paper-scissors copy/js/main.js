//1.computer li 2개중에 하나만 보이게 하기...
//2.밑에 human li에 이벤트 걸기
//3.computer li를 무작위로 나오게 setInterval 만들기
//4.human li 클릭했을때 멈추게 하기. clearInterval
//5.승패 확인하기...
const computerList = document.querySelectorAll(".computer ul li");
const humanList = document.querySelectorAll(".human ul li");
const resultList = document.querySelector(".result ul");
const appendItems = function (className) {
  const li = document.createElement("li");
  li.classList.add(className);
  li.textcontent = className.substring(0, 1);
  resultList.appendChild(li);
};
let computerChoice = 0;

const makeRandom = () => {
  computerList[0].style.display = "none";
  computerList[1].style.display = "none";
  computerList[2].style.display = "none"; //display none 처리해서 안보이게
  computerChoice = Math.floor(Math.random() * 3);
  computerList[computerChoice].style.display = "block";
};
const computerIdx = setInterval(makeRandom, 100);
makeRandom();
let count = 0;
let gameIdx = 0;
humanList.forEach((item, idx) => {
  item.addEventListener("click", () => {
    clearInterval(computerIdx);
    count++;
    if (count >= 3) {
      clearTimeout(gameIdx);
    } else {
      gameIdx = setTimeout(() => {
        computerIdx = setInterval(makeRandom, 50);
      }, 1000);
    }
    if (computerChoice === idx) {
      appendItems("draw");
    } else if ((computerChoice === 0 && idx === 1) || (computerChoice === 1 && idx === 2) || (computerChoice === 2 && idx === 0)) {
      appendItems("win");
    } else {
      appendItems("lose");
    }
  });
});

// humanList[0].addEventListener("click", function () {
//   clearInterval(computerIdx);
// }); 0 번 눌렀을때 멈춘다
// humanList[0].addEventListener("click", function () {
//   clearInterval(computerIdx);
//   if (computerChoice === 0) {
//     console.log("draw");
//   } else if (computerChoice === 1) {
//     console.log("lose");
//   } else {
//     console.log("win");
//   }
// });
const animals = ["lion", "dog", "rabbit"];
for (let i = 0; i < 3; i++) {
  console.log(animals[i]);
}

animals.forEach(function (item, idx) {
  console.log(idx + "===" + item);
});
