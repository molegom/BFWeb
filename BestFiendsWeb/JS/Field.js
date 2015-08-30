$(window).load(function () {
    $("td").dblclick(function () {
        $(this).css("background-color", "#00FF00");

    });
    $("td").click(function () {
        $(this).css("background-color", "#FF0000");
    });
});