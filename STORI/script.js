$(".categorize_on").hide();
$(".categorize_off,.categorize_on").on("click",function(){
  $(".categorize_off,.categorize_on").toggle()
  $(".panel_category").slideToggle("slow");
});

$(".search_on").hide();
$(".search_off,.search_on").on("click",function(){
  $(".search_off,.search_on").toggle()
  $(".panel_search").slideToggle("slow");
});
