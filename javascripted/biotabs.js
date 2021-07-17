$(document).ready(function(){
    $("bio#toggles swoop").click(function(e){
        if (!$(this).hasClass("active")) {
            var toggleNum = $(this).index();
            var nthChild = toggleNum+1;
            $("bio#toggles swoop.active").removeClass("active");
            $(this).addClass("active");
            $("bio#toggle swoop.active").removeClass("active");
            $("bio#toggle swoop:nth-child("+nthChild+")").addClass("active");
        }
    });
});