const ldsEllipsis = document.querySelector(".lds-ellipsis");
const coronaList = document.querySelector(".coronaList ul");
const removeItem = () => {
  const imgItem = document.querySelectorAll(".coronaList ul li");
  imgItem.forEach((item, idx) => {
    item.remove();
  });
};
const loadCoronaData = async (date) => {
  removeItem();
  ldsEllipsis.classList.remove("off");
  // item.sort();
  const corona = await fetch(
    `http://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?serviceKey=hU7ZBPI%2Fu3dbFIRLZU3JIGjCM0cxCCyUyVGhXV8tpmoQdA692smC3%2FX0s0fkAR0OKZAoWTmc%2FeIY3T4V02XpZg%3D%3D&pageNo=1&numOfRows=500&apiType=JSON&std_day=${date}`
  );
  const response = await corona.json();
  //.then((response) => response.json())
  const items = response.items;
  ldsEllipsis.classList.add("off");
  const sortedItems = _.sortBy(items, ["gubun"]); // 원본을 훼손하지 않는 metoe

  sortedItems.forEach((item, idx) => {
    console.log(item.gubun + "===" + item.incDec);
    const li = document.createElement("li");
    const region = document.createElement("span");
    region.classList.add("region");
    const incDec = document.createElement("span");
    incDec.classList.add("incDec");
    region.textContent = item.gubun;
    incDec.textContent = item.incDec;
    li.append(region);
    li.append(incDec);
    coronaList.append(li);
  });
  gsap.from(".coronaList ul li", { scale: 0, duration: 0.5, stagger: 0.02 });
};
const datePicker = new Lightpick({
  field: document.querySelector(".date-picker"),
  format: "YYYY-MM-DD",
  onSelect: function (date) {
    //console.log(date.format("YYYY-MM-DD"));
    loadCoronaData(date.format("YYYY-MM-DD"));
  },
});
datePicker.setDate(new Date());
//loadCoronaData("2023-05-30");

//정렬
const numbers = [1, 11, 2, 3, 4, 44, 5];
// console.log(
//   numbers.sort(function (a, b) {
//     console.log("반복");
// if (a > b) return 9090;
// if (a === b) return 0;
// if (a < b) return -909;
// 자바에서 sort를 사용할땐 비교함수를 넣어줘라
//     return b - a;
//   })
// );
// console.log(numbers.sort((a, b) => b - a));
// const chars = ["다", "나", "가", "라"];
// console.log(chars.sort((a, b) => a - b));

// if (a > b) return 9090;
// if (a === b) return 0;
// if (a < b) return -909;
// 자바에서 sort를 사용할땐 비교함수를 넣어줘라

const animals = ["chicken", "cat", "puppy"];
const myAnimals = [...animals]; // 배열 또는 객체의 원본을 훼손하지 않고 복사해갈때 많이 사용한다.
animals.push("camel");
console.log(myAnimals);
let a = 100;
let b = a;
a += 100;
console.log(b + "===" + a);
const person = { name: "정진영", age: 26 };
const person02 = { nickName: "라라", ...person }; //...spread operator
person.name = "장보고";
console.log(person02); // 얕은 복사 (shallow copy)

//원본에 변형을 가하는 매서드 원본에 변형을 가하지 않는 매서드
//원본에 변형을 가하지 않는게 좋다
