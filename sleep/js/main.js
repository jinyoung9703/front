const gnbList = document.querySelectorAll(".gnb .list ");
const header = document.querySelector(".header");
gnbList.forEach((item, idx) => {
  item.addEventListener("mouseenter", () => {
    header.classList.add("on");
  });
});
header.addEventListener("mouseleave", () => {
  header.classList.remove("on");
});

new Swiper(".media .mask", {
  slidesPerView: "auto", // 보여지는 갯수 ,크기
  centeredSlides: true,
  spaceBetween: 20, //간격
  loop: true,
});
