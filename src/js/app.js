import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const iconMenu = document.querySelector('.header__short-contacts');
if (iconMenu) {
   const menuBody = document.querySelector('.header__long-contacts');

   iconMenu.addEventListener("click", function(e) {
      menuBody.classList.toggle('active');
   });

   document.addEventListener('click', function(event) {
      const target = event.target;
      const isClickInsideMenu = menuBody.contains(target);
      const isClickInsideIcon = iconMenu.contains(target);

      if (!isClickInsideMenu && !isClickInsideIcon) {
         menuBody.classList.remove('active');
      }
   });
}

document.addEventListener("DOMContentLoaded", function() {
   $(document).ready(function() {

      $('.slider-carousel').owlCarousel({
         items: 1,
         loop: true,
         nav: false,
         dots: true,
         autoplay: false,
      });
         
      $('.slider__button').click(function() {
         var slideIndex = $(this).data('slide-index');
         $('.slider-carousel').trigger('to.owl.carousel', slideIndex);
      });
   });


document.getElementById("subscribeForm").addEventListener("submit", submitForm);

function submitForm(event) {
   event.preventDefault(); 

   const email = document.getElementById("email").value;
   const subscribeButton = document.getElementById("subscribeButton");
   $.ajax({
      url: "", 
      type: "POST",
      data: { email: email },
      dataType: "text",
      success: function(response) {
         subscribeButton.innerText = response;
         subscribeButton.style.backgroundColor = "green"; 
      },
      error: function(error) {

      }
   });
   subscribeButton.innerText = "Спасибо";
   document.getElementById("email").value = "";
}
});

Fancybox.bind("[data-fancybox]", {
});

 var owl = $('.questions__row');
 owl.owlCarousel({
   loop:true,
   margin: 30,
   autoWidth: true,
   lazyLoad: true,
   autoplay:true,
   autoplayTimeout:5000,
   smartSpeed: 1000,
   autoplayHoverPause:true,
 });
 $('.play').on('mousedown',function(){
   owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('mouseup',function(){
   owl.trigger('stop.owl.autoplay')
})


  