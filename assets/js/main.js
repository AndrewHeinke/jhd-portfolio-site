$(document).ready(function(){
  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
  });

  var modalWrapper = $('#modal-wrapper');
  $('#modal-btn').click(function() {
    $(modalWrapper).toggleClass("popup-slides");
  });
  $('#close-btn').click(function() {
    $(modalWrapper).toggleClass("popup-slides");
  });
});
