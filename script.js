







var slideImg = document.getElementById("slideImg");

var img = new Array(
    "img/bus-img.jpg",
    "img/road-img.jpg",
    "img/transport-img.jpg",
    "img/travel-img.jpg"
  );
 var len = img.length;
 var i = 0;
 function slider(){
      if(i > len-1){
          i = 0;
      }
      slideImg.src = img[i];
      i++;
      setTimeout('slider()',3000);
  }






//owl carousel
$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:3000
});