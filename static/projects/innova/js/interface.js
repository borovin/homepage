$(document).ready(function(){

    /*
     разукрашиваем таблицы
     */
    $("table tr:first-child").addClass("top");

    $("table tr:last").addClass("bottom");

    $("table tr:nth-child(even)").addClass("second");

    $("table tr th:first-child").addClass("first");

    $("table tr th:last-child").addClass("last");

    $("table tr th:nth-child(odd)").addClass("odd");

    $("table tr th:nth-child(even)").addClass("even");

    $("table tr td:last-child").addClass("last");

    $("table tr td:first-child").addClass("first");

    $("table tr td:nth-child(odd)").addClass("odd");

    $("table tr td:nth-child(even)").addClass("even");

	$("ul li:first-child").addClass("first");

    $("ul li:last-child").addClass("last");

	/*
     присваеваем класс active при клике на пункте меню
     */
    $("li").click(function(){
        $(this).addClass("active");
        $(this).siblings("li").removeClass("active");
    });

});
