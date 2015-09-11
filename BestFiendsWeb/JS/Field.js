$(document).ready(function () {
    var listPressedCell = [];

    var leftButtonDown = false;

    InitCells();

    $(".Main-Field").on("contextmenu", false);

    $('td div').mousedown(function (e) {        
        // Left mouse button was pressed, set flag
        if (e.which === 1) leftButtonDown = true;

        $(this).css("background-color", "#FF0000");
    });

    $("BODY").mouseup(function (e) {
        // Left mouse button was released, clear flag
        if (e.which === 1) leftButtonDown = false;

        listPressedCell.forEach(function (item, i, listPressedCell) {
            $("#" + item).css("background-color", "#FFFFFF");
        });

        //listPressedCell.clear();
    });
   
    $('td div').mousemove(function (e) {
        tweakMouseMoveEvent(e);
        if (leftButtonDown) {
            $(this).css("background-color", "#FFFF00");
            if (!listPressedCell.contains($(this).attr("ID"))) {
                listPressedCell.push($(this).attr("ID"));
            }
        }
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
});

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

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

function InitCells() {

    $("'td div'").each(function() {
        var strIdList = $(this).attr("ID").split("_");
        if (.length > 2) {
            var strX  = 
        }
    });
    var c = new Cell()
}