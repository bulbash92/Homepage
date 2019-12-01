const { selectSlide } = (function () {
    function selectSlide ({ currentTarget }) {
      if (currentTarget.classList.contains("slider__item--hidden")) {
        const slidesParent = currentTarget.parentElement;
        const dots = slidesParent.nextElementSibling;
  
        Array.from(dots.children).forEach((element) => {
          if (element.classList.contains("slider__dot--active")) {
            element.classList.remove("slider__dot--active");
          }
        });
  
        Array.from(slidesParent.children).forEach((element) => {
          if (!element.classList.contains("slider__item--hidden")) {
            element.classList.add("slider__item--hidden");
          }
        });
  
        if (currentTarget.offsetLeft === 0) {
          slidesParent.style.left = "0";
        } else {
          slidesParent.style.left = `-${currentTarget.offsetLeft - 15}px`;
        }
  
        const currentTargetIndex = Array.from(slidesParent.children).findIndex(el => el === currentTarget);
  
        dots.children.item(currentTargetIndex).classList.add("slider__dot--active");
        currentTarget.classList.remove("slider__item--hidden");
      }
    }
  
    return { selectSlide };
  })();
  