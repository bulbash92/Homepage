
var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  
})

let openList = document.querySelectorAll(".navigation-link--open");
let listContent = document.querySelector(".container");
let close = document.querySelectorAll(".navigation-link--close");

openList.forEach(function (link) {
    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        listContent.classList.add("visible");
       
    
    });
});

openList.forEach(function (link) {
    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        openList.classList.add("navigation-link--close");
       
    
    });
});

close.forEach(function (link) {
    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        listContent.classList.remove("visible");
    
    });
});