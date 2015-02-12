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

    /* Fogs out (blurs) any element that is moused over */
    var mouseover_fogger = function(mousedover){
        console.log("Starting to fog out");

        /* Adds fog out effect to item moused over */
        $(mousedover).mouseover(function() {
            console.log("Fogging out mouseover'ed element at " + mousedover + "!");
            $(mousedover).foggy();
        });

        /* Removes fog out effect when mouse leaves */
        $(mousedover).mouseout(function() {
            console.log("restoring mouseout'ed element at " + mousedover + "!");
            $(mousedover).foggy(false);
        });

    }

    /* Goes to other pages on click */
    var clickerlink = function(link, element){
        console.log("Attempting to open " + link + " at " + element + "!");
        $(element).click(function(){
            window.location.href = link;
        });
    }


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

    /* mapshowcase.html specific caller for blurouts*/
    var map_blur = function(){
        /* id_array contains all id identifiers that will be blurred out */
        var id_array = [
            "#control-point-image",
            "#capture-the-flag-image",
            "#king-of-the-hill-image",
            "#payload-image"
        ];
        var arrayLength = id_array.length;

        for (var i = 0; i < arrayLength; i++) {
            mouseover_fogger(id_array[i]);
        }
    }

    /* mapshowcase.html specific caller for link go's */
    var map_goes = function(){
        /* id_array contains all id identifiers that will be blurred out */
        var id_array = [
            "#control-point-image",
            "#capture-the-flag-image",
            "#king-of-the-hill-image",
            "#payload-image"
        ];

        /* link_array contains all the different links that will be opened */
        var link_array = [
            "showcase/cp.html",
            "showcase/ctf.html",
            "showcase/koth.html",
            "showcase/pl.html"
        ];

        var idLength = id_array.length;
        var linkLength = link_array.length;

        for (var i = 0; i < idLength; i++) {
            clickerlink(link_array[i], id_array[i]);
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
        map_blur();
        map_goes();
    };

    function_caller();
}
