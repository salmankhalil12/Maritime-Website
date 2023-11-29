
// alert("Jello")
// Slider
let swiper = new Swiper(".mySwiper", {
  autoplay:true,
  loop:true,
  spaceBetween: 30,
  effect: "fade",
  // delay:500,
  speed:1800,
    navigation: {
      
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      
    },
  });

//   Slider end

// TOP HEADER

$(document).on("scroll", function () {

  if ($(document).scrollTop() > 50) {
    $("#main_header").css({
      "position": "fixed",
      "z-index": "1000",
      "top": "0",
  
    });
    $(".border_bottom").css({
      "background": "rgba(255, 255, 255)",
    });
    $(".nav li a").css({
      "color": "black",
      "font-size":"16px"
    });
    
    $(".br_one,.icons").css({
      "color": "black"
    });
    
    $(".nav li ul.dropdwon li a").css({
      "color": "#666666"
    });
    
    $(".nav li:hover a").css({
      "color": "var(--lightBlue)",
      "font-size":"16px"
    });
    
    $(".header_img1").css({
      "display": "block"
    });
    $(".header_img").css({
      "display": "none"
    });
  }

  else {
    $("#main_header").css({
      "position": "unset",
      "top": "unset",
      "z-index": "unset",


    });
   $(".border_bottom").css({
      "background": "transparent",
    });

    $(".header_img1").css({
      "display": "none"
    });
    $(".header_img").css({
      "display": "block"
    });
    $(".nav li a").css({
      "color": "white"
    });
    $(".dropdwon li a").css({
      "color": "black"
    });
    
    $(".br_one,.icons").css({
      "color": "white"
    });
   
  }

});

// Slider Section 4
var swiper1 = new Swiper(".mySwiper1", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Tab Panel Id Get
// Show the first tab and hide the rest
// Tab panels
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}