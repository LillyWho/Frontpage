/*
  Javascript File for cp.html @ /showcase/cp.html
*/

/* Checks if Javascript works */
console.log("Javascript is working");

/* Check if Jquery works */
window.onload = function() {

    /* Performs basic jquery checks */
    var checks = function() {
        if (window.jQuery) {

            // jQuery is loaded
            console.log("jQuery has loaded successfully!");

        } else {

            // jQuery is not loaded
            console.log("Warning - jquery has not loaded somehow!");
        }
    }

    /* Sliding function slides panel out (assuming display:none;) */
    var slideout = function(panel){
        console.log("Sliding out " + panel + "!");
        $(panel).slideToggle("slow");
    }

    /* Increases text shadow function */
    var highlighter = function(shadowed) {
        /* Adds box shadow values to div on mouseover */
        $(shadowed).mouseover(function(){
            console.log("Mouseover detected at " + shadowed + "!");
            $(shadowed).css("box-shadow", "1px 3px 5px 0px #000000");
        });

        /* Removes box sahdow values (resets to default) when mouse leaves */
        $(shadowed).mouseout(function(){
            console.log("Mouseout detected at " + shadowed + "!");
            $(shadowed).css("box-shadow", "1px 1px 1px 0px #000000");
        });
    };

    /* mapshowcase.html specific maphighlight caller */
    var map_highlighter = function() {

        /* id_array contains all the id identifiers that will be highlighted */
        var id_array = [
            "#mapinstall-header",
            "#control-point",
            "#capture-the-flag",
            "#king-of-the-hill",
            "#payload"
        ];
        var arrayLength = id_array.length;

        for (var i = 0; i < arrayLength; i++) {
            highlighter(id_array[i]);
        }
    }

    /* Opens map install panel on click */
    var map_install_clicker = function(){
        $("#mapinstall-header").click(function(){

            console.log("mapinstall panel toggled");
            slideout("#mapinstall-panel")

        });
    }

    /* Function caller calls all functions */
    var function_caller = function() {
        checks();
        slideout("#body");
        map_highlighter();
        map_install_clicker();
    };

    function_caller();
}
