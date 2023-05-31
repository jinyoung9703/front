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
  const cities = [];
  const values = [];
  sortedItems.forEach((item, idx) => {
    cities.push(item.gubun);
    values.push(item.incDec);
  });
  makeChart(cities, values);
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
let myChart = null;
const makeChart = (cities, values) => {
  const ctx = document.querySelector(".chart");
  if (myChart !== null) myChart.destroy();
  myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: cities,
      datasets: [
        {
          label: "시도별 확진자수",
          data: values,
          borderWidth: 1,
          // backgroundColor: ["#9BD0F5", "#ff00cc", "#f12541"],
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};
