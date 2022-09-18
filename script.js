const slidesContainer2 = document.getElementById("slides-container2");
const slide2 = document.querySelector(".slide2");
const prevButton2 = document.getElementById("slide-arrow-prev2");
const nextButton2 = document.getElementById("slide-arrow-next2");

  nextButton2.addEventListener("click", (event) => {
    const slideWidth = slide2.clientWidth;
      slidesContainer2.scrollLeft += slideWidth;
	  console.log(slidesContainer.scrollLeft)
  });

  prevButton2.addEventListener("click", () => {
    const slideWidth = slide2.clientWidth;
    slidesContainer2.scrollLeft -= slideWidth;
	console.log(slidesContainer.scrollLeft)
  });



  