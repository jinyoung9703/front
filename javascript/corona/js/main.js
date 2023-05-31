const coronaList = document.querySelector(".coronaList ul");
const loadCoronaData = async (date) => {
  const corona = await fetch(
    `http://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?serviceKey=hU7ZBPI%2Fu3dbFIRLZU3JIGjCM0cxCCyUyVGhXV8tpmoQdA692smC3%2FX0s0fkAR0OKZAoWTmc%2FeIY3T4V02XpZg%3D%3D&pageNo=1&numOfRows=500&apiType=JSON&std_day=${date}`
  );
  const response = await corona.json();
  //.then((response) => response.json())
  const items = response.items;
  // console.log(data);
  items.forEach((item, idx) => {
    console.log(item.gubun + "===" + item.incDec);
    const li = document.createElement("li");
    const region = document.createElement("span");
    region.classList.add("region");
    const incDec = document.createElement("span");
    incDec.classList.add("incDec");
    region.textContent = item.gubun; //글자한글
    incDec.textContent = item.incDec; //숫자
    li.append(region);
    li.append(incDec);
    coronaList.append(li);
  });
};
const datepicker = new Lightpick({
  field: document.querySelector(".dete-picker"),
  format: "YYYY-MM-DD",
  onSelect: function (date) {
    //console.log(date.format("YYYY-MM-DD"));
    loadCoronaData(date.format("YYYY-MM-DD"));
  },
});
datepicker.setDate(new Date());
// loadCoronaData("2023-05-30");
