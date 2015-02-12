/*
  Javascript File for cp.html @ /showcase/cp.html
*/

/* Checks if Javascript works */
console.log("Javascript is working");

/* Check if Jquery works */
window.onload = function() {
    if (window.jQuery) {

        // jQuery is loaded
        console.log("jQuery has loaded successfully!");

    } else {

        // jQuery is not loaded
        console.log("Warning - jquery has not loaded somehow!");
    }

    /* Slides open website on load */
    console.log("Sliding out panel");
    $("#body").slideToggle("slow");

    $(function() {
        $(".rslides").responsiveSlides();
    });

    /* Goes to other pages on click */
    var clickwriter = function(element){
        console.log("click at " + element + "detected!");
        $(element).click(function(){
            /* Changes the info panel values here depending on what triggured */
            switch(element) {
            case "#a1":
                    $("#map-name").text("Axle");
                    $("#map-detailed-description").text("Welcome to the axle map!");
                break;

            case "#a2":

                break;

            default:
                console.log("A error has happened with clickwriter");
            }
        });
    }

    /* Increases text shadow function */
    var highlighter = function(shadowed) {
        /* Adds box shadow values to div on mouseover */
        $(shadowed).mouseover(function(){
            console.log("Mouseover detected at " + shadowed + "!");
            $(shadowed).css("box-shadow", "1px 2px 5px 0px #000000");
        });

        /* Removes box sahdow values (resets to default) when mouse leaves */
        $(shadowed).mouseout(function(){
            console.log("Mouseout detected at " + shadowed + "!");
            $(shadowed).css("box-shadow", "1px 1px 1px 0px #000000");
        });
    };

    /* showcase specific maphighlight caller */
    var map_highlighter = function() {

        /* id_array contains all the id identifiers that will be highlighted */
        var id_array = [
            "#a1",
            "#a2",
            "#a3",
            "#a4",
            "#a5",
            "#b1",
            "#b2",
            "#b3",
            "#b4",
            "#b5",
            "#c1",
            "#c2",
            "#c3",
            "#c4",
            "#c5",
            "#d1",
            "#d2",
            "#d3",
            "#d4",
            "#d5",
            "#e1",
            "#e2",
            "#e3",
            "#e4",
            "#e5",
            "#f1",
            "#f2",
            "#f3",
            "#f4",
            "#f5",
        ];
        var arrayLength = id_array.length;

        for (var i = 0; i < arrayLength; i++) {
            highlighter(id_array[i]);
        }
    }

    var clickwriter_caller = function() {
        /* id_array contains all the id identifiers that will be highlighted */
        var id_array = [
            "#a1",
            "#a2",
            "#a3",
            "#a4",
            "#a5",
            "#b1",
            "#b2",
            "#b3",
            "#b4",
            "#b5",
            "#c1",
            "#c2",
            "#c3",
            "#c4",
            "#c5",
            "#d1",
            "#d2",
            "#d3",
            "#d4",
            "#d5",
            "#e1",
            "#e2",
            "#e3",
            "#e4",
            "#e5",
            "#f1",
            "#f2",
            "#f3",
            "#f4",
            "#f5",
        ];
        var arrayLength = id_array.length;

        for (var i = 0; i < arrayLength; i++) {
            clickwriter(id_array[i]);
        }
    }

    /* Function caller calls all functions */
    var function_caller = function() {
        map_highlighter();
        clickwriter_caller();
    };

    function_caller();

}
