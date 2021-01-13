$(document).ready(function(){

  // $('.menu').hover(function(){
  //   $(this).children('.dropdown').toggleClass('active');
  //
  //
  //   $(this).find('i').toggleClass('active');
  // });





  $('.menu').click(function(){
    $(this).children('.dropdown').toggleClass('active');


    $(this).find('i').toggleClass('active');
  });
});
