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

    /* Unblurs */


    /* Opens map install panel on click */
    $("#mapinstall-header").click(function(){

        console.log("Panel Toggled");

        /* Slides open panel */
        $("#mapinstall-panel").slideToggle("fast");

    });
}
