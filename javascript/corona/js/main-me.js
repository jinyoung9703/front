const cirinaList = document.querySelector(".coronaList ul");
const corona = await fetch(
  `http://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?serviceKey=hU7ZBPI%2Fu3dbFIRLZU3JIGjCM0cxCCyUyVGhXV8tpmoQdA692smC3%2FX0s0fkAR0OKZAoWTmc%2FeIY3T4V02XpZg%3D%3D&pageNo=1&numOfRows=500&apiType=JSON&std_day=${date}`
);
