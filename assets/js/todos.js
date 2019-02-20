//on 은 지금 존재하지 않지만 나중에 생설될 요소들에도 적용됨
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  //stopping even burbling
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  // key event 13 = enter
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    //append , html 요소 삽입
    $("ul").append("<li><span>X</span> " + todoText + "</li>");
  }
});
