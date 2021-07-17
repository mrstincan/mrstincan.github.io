
$(document).ready(function(){ 
$(".drop_body").hide(); 
$(".drop_title").click(function(){ 
$(this).next(".drop_body").slideToggle('fast'); 
}); });     