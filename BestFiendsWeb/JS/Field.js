$(document).ready(function () {
    $(".Main-Field").on("contextmenu", false);
       
    //$('td').mouseover(function () {
    //    $(this).css("background-color", "#00FFFF");
    //});

    //$('td').mouseleave(function () {
    //    $(this).css("background-color", "#FFFFFF");
    //});

    //$("td").click(function () {
    //    $(this).css("background-color", "#FF0000");
    //});   

    var leftButtonDown = false;    

    $('td div').mousedown(function (e) {        
        // Left mouse button was pressed, set flag
        if (e.which === 1) leftButtonDown = true;

        $(this).css("background-color", "#FF0000");
    });
    $('td div').mouseup(function (e) {
        // Left mouse button was released, clear flag
        if (e.which === 1) leftButtonDown = false;

       // $(this).css("background-color", "#FFFFFF");
    });

    function tweakMouseMoveEvent(e) {
        var versionIe = getInternetExplorerVersion();
        // Check from jQuery UI for IE versions < 9
        if (versionIe > -1 && versionIe < 9 && !(document.documentMode >= 9) && !event.button) {
            leftButtonDown = false;
        }

        // If left button is not set, set which to 0
        // This indicates no buttons pressed
        if (e.which === 1 && !leftButtonDown) e.which = 0;
    }
   
    $('td div').mousemove(function (e) {
        tweakMouseMoveEvent(e);
        if (leftButtonDown) {
            $(this).css("background-color", "#FF0000");
        } else {
           // $(this).css("background-color", "#FFFFFF");
        }
    });

});

function getInternetExplorerVersion() {
    var rv = -1; // Return value assumes failure.

    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }

    return rv;
}
