///=<reference types="../@types/jquery" />
$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();
  let sectioTop = $("#about").offset().top;
  // console.log(sectioTop);
  if (scrollTop > sectioTop - 70) {
    $("nav").css("backgroundColor", "#161a28");
    $("#btnUp").fadeIn(500);
  } else {
    $("nav").css("backgroundColor", "transparent");
    $("#btnUp").fadeOut(500);
  }
});

$("a[href^= '#']").click(function (e) {
  targethref = $(e.target).attr("href");
  // console.log(targethref);
  sectionTarget = $(targethref).offset().top;
  // console.log(sectionTarget);
  $("html,body").animate(
    {
      scrollTop: sectionTarget,
    },
    1000
  );
});

$(function () {
  $("#loading").fadeOut(2000, function () {
    $("body").css("overflow", "auto");
    $("#loading").remove();
  });
});


$("#btnUp").click(function () {
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});


let colorBox = $(".color-box");
for (let i = 0; i < 5; i++) {
  let red = Math.floor(Math.random()*255) 
  let green = Math.floor(Math.random()*255)
  let blue = Math.floor(Math.random()*255)
  colorBox.eq(i).css("backgroundColor" , `rgb(${red},${green},${blue})`)
}
$(".color-box").click(function(e){
let color = $(e.target).css("backgroundColor")
$("h1,h4,h3 ,p").css("color" ,  color)
})

let sideWidth = $(".box").innerWidth()
$("#side-Bar").css("left" , -sideWidth )

$("#side-Bar i").click(function(){
  // let sideWidth = $(".box").innerWidth()
  if($("#side-Bar").css("left") == "0px"){
    $("#side-Bar").animate({left : -sideWidth})

  }else { 
    $("#side-Bar").animate({left : 0})
  }
});
