var images = [
  "img/image1.jpg",
  "img/image2.jpg",
  "img/image3.jpg",
  "img/image4.jpg",
  "img/image5.jpg",
  "img/image6.jpg"
],
    i = 0,
    slider = document.getElementById("slider");

$(".fa-arrow-right").on("click", function(){
  i++;
  if(i > 5){
    i = 0;
  }
  slider.src = images[i];
});
$(".fa-arrow-left").on("click", function(){
  i--;
  if(i <= 0){
    i = 5;
  }
  slider.src = images[i];
});





