$(document).ready(function(){
    $("hit#tabs click").click(function(e){
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $("hit#tabs click.active").removeClass("active");
            $(this).addClass("active");
            $("hit#tab click.active").removeClass("active");
            $("hit#tab click:nth-child("+nthChild+")").addClass("active");
        }
    });
});