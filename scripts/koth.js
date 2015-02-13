/*
  Javascript File for koth.html @ /showcase/koth.html
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
    $(function() {
        $(".rslides").responsiveSlides();
    });

    /* Converts to sentence case */
    String.prototype.toProperCase = function () {
        return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

    /* Goes to other pages on click */
    var clickwriter = function(element){
        console.log("click at " + element + "detected!");
        $(element).click(function(){
            /* Changes the info panel values here depending on what triggured */
            switch(element) {
            case "#a1":
                    var currentmap = "axle"
                    var maptype = "cp"

                    $("#map-name").text(currentmap.toProperCase());
                    $("#map-detailed-description").text("Welcome to the axle map!");

                    /* Secrets and hints */
                    $("#li-1").text("First Secret");
                    $("#li-2").text("Second Secret");
                    $("#li-3").text("Third Secret");

                    /* Changes slideshow images */
                    for (var i = 1; i < 4; i++) {
                        console.log("Attempting to change image src for slideshow...")
                        var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                        console.log("current filepath equals " + filepath);
                        var identity = "#slideshow-" + i.toString();
                        console.log(identity);
                        $(identity).attr("src",filepath);
                    }
                break;

            case "#a2":
                    var currentmap = "beamvalley"
                    var maptype = "cp"

                    $("#map-name").text(currentmap.toProperCase());
                    $("#map-detailed-description").text("Welcome to the beamvalley map!");

                    /* Secrets and hints */
                    $("#li-1").text("First Secret");
                    $("#li-2").text("Second Secret");
                    $("#li-3").text("Third Secret");

                    /* Changes slideshow images */
                    for (var i = 1; i < 4; i++) {
                        console.log("Attempting to change image src for slideshow...")
                        var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                        console.log("current filepath equals " + filepath);
                        var identity = "#slideshow-" + i.toString();
                        console.log(identity);
                        $(identity).attr("src",filepath);
                    }
                break;

            case "#a3":
                    var currentmap = "croissant"
                    var maptype = "cp"

                    $("#map-name").text(currentmap.toProperCase());
                    $("#map-detailed-description").text("Welcome to the croissant map!");

                    /* Secrets and hints */
                    $("#li-1").text("First Secret");
                    $("#li-2").text("Second Secret");
                    $("#li-3").text("Third Secret");

                    /* Changes slideshow images */
                    for (var i = 1; i < 4; i++) {
                        console.log("Attempting to change image src for slideshow...")
                        var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                        console.log("current filepath equals " + filepath);
                        var identity = "#slideshow-" + i.toString();
                        console.log(identity);
                        $(identity).attr("src",filepath);
                    }
                break;

            case "#a4":
                    var currentmap = "desertfortress"
                    var maptype = "cp"

                    $("#map-name").text(currentmap.toProperCase());
                    $("#map-detailed-description").text("Welcome to the desertfortress map!");

                    /* Secrets and hints */
                    $("#li-1").text("First Secret");
                    $("#li-2").text("Second Secret");
                    $("#li-3").text("Third Secret");

                    /* Changes slideshow images */
                    for (var i = 1; i < 4; i++) {
                        console.log("Attempting to change image src for slideshow...")
                        var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                        console.log("current filepath equals " + filepath);
                        var identity = "#slideshow-" + i.toString();
                        console.log(identity);
                        $(identity).attr("src",filepath);
                    }
                break;

            case "#a5":
                    var currentmap = "desertion"
                    var maptype = "cp"

                    $("#map-name").text(currentmap.toProperCase());
                    $("#map-detailed-description").text("Welcome to the desertion map!");

                    /* Secrets and hints */
                    $("#li-1").text("First Secret");
                    $("#li-2").text("Second Secret");
                    $("#li-3").text("Third Secret");

                    /* Changes slideshow images */
                    for (var i = 1; i < 4; i++) {
                        console.log("Attempting to change image src for slideshow...")
                        var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                        console.log("current filepath equals " + filepath);
                        var identity = "#slideshow-" + i.toString();
                        console.log(identity);
                        $(identity).attr("src",filepath);
                    }


                break;
            case "#b1":
                    var currentmap = "dusk"
                    var maptype = "cp"

                    $("#map-name").text(currentmap.toProperCase());
                    $("#map-detailed-description").text("Welcome to the axle map!");

                    /* Secrets and hints */
                    $("#li-1").text("First Secret");
                    $("#li-2").text("Second Secret");
                    $("#li-3").text("Third Secret");

                    /* Changes slideshow images */
                    for (var i = 1; i < 4; i++) {
                        console.log("Attempting to change image src for slideshow...")
                        var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                        console.log("current filepath equals " + filepath);
                        var identity = "#slideshow-" + i.toString();
                        console.log(identity);
                        $(identity).attr("src",filepath);
                    }
                break;

            case "#b2":
                    var currentmap = "edifice"
                    var maptype = "cp"

                    $("#map-name").text(currentmap.toProperCase());
                    $("#map-detailed-description").text("Welcome to the beamvalley map!");

                    /* Secrets and hints */
                    $("#li-1").text("First Secret");
                    $("#li-2").text("Second Secret");
                    $("#li-3").text("Third Secret");

                    /* Changes slideshow images */
                    for (var i = 1; i < 4; i++) {
                        console.log("Attempting to change image src for slideshow...")
                        var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                        console.log("current filepath equals " + filepath);
                        var identity = "#slideshow-" + i.toString();
                        console.log(identity);
                        $(identity).attr("src",filepath);
                    }
                break;

            case "#b3":
                    var currentmap = "fallout"
                    var maptype = "cp"

                    $("#map-name").text(currentmap.toProperCase());
                    $("#map-detailed-description").text("Welcome to the croissant map!");

                    /* Secrets and hints */
                    $("#li-1").text("First Secret");
                    $("#li-2").text("Second Secret");
                    $("#li-3").text("Third Secret");

                    /* Changes slideshow images */
                    for (var i = 1; i < 4; i++) {
                        console.log("Attempting to change image src for slideshow...")
                        var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                        console.log("current filepath equals " + filepath);
                        var identity = "#slideshow-" + i.toString();
                        console.log(identity);
                        $(identity).attr("src",filepath);
                    }
                break;

            case "#b4":
                    var currentmap = "follower"
                    var maptype = "cp"

                    $("#map-name").text(currentmap.toProperCase());
                    $("#map-detailed-description").text("Welcome to the desertfortress map!");

                    /* Secrets and hints */
                    $("#li-1").text("First Secret");
                    $("#li-2").text("Second Secret");
                    $("#li-3").text("Third Secret");

                    /* Changes slideshow images */
                    for (var i = 1; i < 4; i++) {
                        console.log("Attempting to change image src for slideshow...")
                        var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                        console.log("current filepath equals " + filepath);
                        var identity = "#slideshow-" + i.toString();
                        console.log(identity);
                        $(identity).attr("src",filepath);
                    }
                break;

            case "#b5":
                    var currentmap = "freightyard"
                    var maptype = "cp"

                    $("#map-name").text(currentmap.toProperCase());
                    $("#map-detailed-description").text("Welcome to the desertion map!");

                    /* Secrets and hints */
                    $("#li-1").text("First Secret");
                    $("#li-2").text("Second Secret");
                    $("#li-3").text("Third Secret");

                    /* Changes slideshow images */
                    for (var i = 1; i < 4; i++) {
                        console.log("Attempting to change image src for slideshow...")
                        var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                        console.log("current filepath equals " + filepath);
                        var identity = "#slideshow-" + i.toString();
                        console.log(identity);
                        $(identity).attr("src",filepath);
                    }
                break;

                case "#c1":
                        var currentmap = "furnace"
                        var maptype = "cp"

                        $("#map-name").text(currentmap.toProperCase());
                        $("#map-detailed-description").text("Welcome to the axle map!");

                        /* Secrets and hints */
                        $("#li-1").text("First Secret");
                        $("#li-2").text("Second Secret");
                        $("#li-3").text("Third Secret");

                        /* Changes slideshow images */
                        for (var i = 1; i < 4; i++) {
                            console.log("Attempting to change image src for slideshow...")
                            var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                            console.log("current filepath equals " + filepath);
                            var identity = "#slideshow-" + i.toString();
                            console.log(identity);
                            $(identity).attr("src",filepath);
                        }
                    break;

                case "#c2":
                        var currentmap = "glacier"
                        var maptype = "cp"

                        $("#map-name").text(currentmap.toProperCase());
                        $("#map-detailed-description").text("Welcome to the beamvalley map!");

                        /* Secrets and hints */
                        $("#li-1").text("First Secret");
                        $("#li-2").text("Second Secret");
                        $("#li-3").text("Third Secret");

                        /* Changes slideshow images */
                        for (var i = 1; i < 4; i++) {
                            console.log("Attempting to change image src for slideshow...")
                            var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                            console.log("current filepath equals " + filepath);
                            var identity = "#slideshow-" + i.toString();
                            console.log(identity);
                            $(identity).attr("src",filepath);
                        }
                    break;

                case "#c3":
                        var currentmap = "glassworks"
                        var maptype = "cp"

                        $("#map-name").text(currentmap.toProperCase());
                        $("#map-detailed-description").text("Welcome to the croissant map!");

                        /* Secrets and hints */
                        $("#li-1").text("First Secret");
                        $("#li-2").text("Second Secret");
                        $("#li-3").text("Third Secret");

                        /* Changes slideshow images */
                        for (var i = 1; i < 4; i++) {
                            console.log("Attempting to change image src for slideshow...")
                            var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                            console.log("current filepath equals " + filepath);
                            var identity = "#slideshow-" + i.toString();
                            console.log(identity);
                            $(identity).attr("src",filepath);
                        }
                    break;

                case "#c4":
                        var currentmap = "grand canyon"
                        var maptype = "cp"

                        $("#map-name").text(currentmap.toProperCase());
                        $("#map-detailed-description").text("Welcome to the desertfortress map!");

                        /* Secrets and hints */
                        $("#li-1").text("First Secret");
                        $("#li-2").text("Second Secret");
                        $("#li-3").text("Third Secret");

                        /* Changes slideshow images */
                        for (var i = 1; i < 4; i++) {
                            console.log("Attempting to change image src for slideshow...")
                            var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                            console.log("current filepath equals " + filepath);
                            var identity = "#slideshow-" + i.toString();
                            console.log(identity);
                            $(identity).attr("src",filepath);
                        }
                    break;

                case "#c5":
                        var currentmap = "gydan"
                        var maptype = "cp"

                        $("#map-name").text(currentmap.toProperCase());
                        $("#map-detailed-description").text("Welcome to the desertion map!");

                        /* Secrets and hints */
                        $("#li-1").text("First Secret");
                        $("#li-2").text("Second Secret");
                        $("#li-3").text("Third Secret");

                        /* Changes slideshow images */
                        for (var i = 1; i < 4; i++) {
                            console.log("Attempting to change image src for slideshow...")
                            var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                            console.log("current filepath equals " + filepath);
                            var identity = "#slideshow-" + i.toString();
                            console.log(identity);
                            $(identity).attr("src",filepath);
                        }
                    break;

                case "#d1":
                        var currentmap = "indulge"
                        var maptype = "cp"

                        $("#map-name").text(currentmap.toProperCase());
                        $("#map-detailed-description").text("Welcome to the axle map!");

                        /* Secrets and hints */
                        $("#li-1").text("First Secret");
                        $("#li-2").text("Second Secret");
                        $("#li-3").text("Third Secret");

                        /* Changes slideshow images */
                        for (var i = 1; i < 4; i++) {
                            console.log("Attempting to change image src for slideshow...")
                            var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                            console.log("current filepath equals " + filepath);
                            var identity = "#slideshow-" + i.toString();
                            console.log(identity);
                            $(identity).attr("src",filepath);
                        }
                    break;

                case "#d2":
                        var currentmap = "keikoku"
                        var maptype = "cp"

                        $("#map-name").text(currentmap.toProperCase());
                        $("#map-detailed-description").text("Welcome to the beamvalley map!");

                        /* Secrets and hints */
                        $("#li-1").text("First Secret");
                        $("#li-2").text("Second Secret");
                        $("#li-3").text("Third Secret");

                        /* Changes slideshow images */
                        for (var i = 1; i < 4; i++) {
                            console.log("Attempting to change image src for slideshow...")
                            var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                            console.log("current filepath equals " + filepath);
                            var identity = "#slideshow-" + i.toString();
                            console.log(identity);
                            $(identity).attr("src",filepath);
                        }
                    break;

                case "#d3":
                        var currentmap = "labor"
                        var maptype = "cp"

                        $("#map-name").text(currentmap.toProperCase());
                        $("#map-detailed-description").text("Welcome to the croissant map!");

                        /* Secrets and hints */
                        $("#li-1").text("First Secret");
                        $("#li-2").text("Second Secret");
                        $("#li-3").text("Third Secret");

                        /* Changes slideshow images */
                        for (var i = 1; i < 4; i++) {
                            console.log("Attempting to change image src for slideshow...")
                            var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                            console.log("current filepath equals " + filepath);
                            var identity = "#slideshow-" + i.toString();
                            console.log(identity);
                            $(identity).attr("src",filepath);
                        }
                    break;

                case "#d4":
                        var currentmap = "logjam"
                        var maptype = "cp"

                        $("#map-name").text(currentmap.toProperCase());
                        $("#map-detailed-description").text("Welcome to the desertfortress map!");

                        /* Secrets and hints */
                        $("#li-1").text("First Secret");
                        $("#li-2").text("Second Secret");
                        $("#li-3").text("Third Secret");

                        /* Changes slideshow images */
                        for (var i = 1; i < 4; i++) {
                            console.log("Attempting to change image src for slideshow...")
                            var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                            console.log("current filepath equals " + filepath);
                            var identity = "#slideshow-" + i.toString();
                            console.log(identity);
                            $(identity).attr("src",filepath);
                        }
                    break;

                case "#d5":
                        var currentmap = "overflow"
                        var maptype = "cp"

                        $("#map-name").text(currentmap.toProperCase());
                        $("#map-detailed-description").text("Welcome to the desertion map!");

                        /* Secrets and hints */
                        $("#li-1").text("First Secret");
                        $("#li-2").text("Second Secret");
                        $("#li-3").text("Third Secret");

                        /* Changes slideshow images */
                        for (var i = 1; i < 4; i++) {
                            console.log("Attempting to change image src for slideshow...")
                            var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                            console.log("current filepath equals " + filepath);
                            var identity = "#slideshow-" + i.toString();
                            console.log(identity);
                            $(identity).attr("src",filepath);
                        }
                    break;

                case "#e1":
                        var currentmap = "redstone"
                        var maptype = "cp"

                        $("#map-name").text(currentmap.toProperCase());
                        $("#map-detailed-description").text("Welcome to the axle map!");

                        /* Secrets and hints */
                        $("#li-1").text("First Secret");
                        $("#li-2").text("Second Secret");
                        $("#li-3").text("Third Secret");

                        /* Changes slideshow images */
                        for (var i = 1; i < 4; i++) {
                            console.log("Attempting to change image src for slideshow...")
                            var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                            console.log("current filepath equals " + filepath);
                            var identity = "#slideshow-" + i.toString();
                            console.log(identity);
                            $(identity).attr("src",filepath);
                        }
                    break;

                case "#e2":
                        var currentmap = "silvertrail"
                        var maptype = "cp"

                        $("#map-name").text(currentmap.toProperCase());
                        $("#map-detailed-description").text("Welcome to the beamvalley map!");

                        /* Secrets and hints */
                        $("#li-1").text("First Secret");
                        $("#li-2").text("Second Secret");
                        $("#li-3").text("Third Secret");

                        /* Changes slideshow images */
                        for (var i = 1; i < 4; i++) {
                            console.log("Attempting to change image src for slideshow...")
                            var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                            console.log("current filepath equals " + filepath);
                            var identity = "#slideshow-" + i.toString();
                            console.log(identity);
                            $(identity).attr("src",filepath);
                        }
                    break;

                case "#e3":
                        var currentmap = "snowplow"
                        var maptype = "cp"

                        $("#map-name").text(currentmap.toProperCase());
                        $("#map-detailed-description").text("Welcome to the croissant map!");

                        /* Secrets and hints */
                        $("#li-1").text("First Secret");
                        $("#li-2").text("Second Secret");
                        $("#li-3").text("Third Secret");

                        /* Changes slideshow images */
                        for (var i = 1; i < 4; i++) {
                            console.log("Attempting to change image src for slideshow...")
                            var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                            console.log("current filepath equals " + filepath);
                            var identity = "#slideshow-" + i.toString();
                            console.log(identity);
                            $(identity).attr("src",filepath);
                        }
                    break;

                case "#e4":
                        var currentmap = "stoneyridge"
                        var maptype = "cp"

                        $("#map-name").text(currentmap.toProperCase());
                        $("#map-detailed-description").text("Welcome to the desertfortress map!");

                        /* Secrets and hints */
                        $("#li-1").text("First Secret");
                        $("#li-2").text("Second Secret");
                        $("#li-3").text("Third Secret");

                        /* Changes slideshow images */
                        for (var i = 1; i < 4; i++) {
                            console.log("Attempting to change image src for slideshow...")
                            var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                            console.log("current filepath equals " + filepath);
                            var identity = "#slideshow-" + i.toString();
                            console.log(identity);
                            $(identity).attr("src",filepath);
                        }
                    break;

                case "#e5":
                        var currentmap = "sunshine"
                        var maptype = "cp"

                        $("#map-name").text(currentmap.toProperCase());
                        $("#map-detailed-description").text("Welcome to the desertion map!");

                        /* Secrets and hints */
                        $("#li-1").text("First Secret");
                        $("#li-2").text("Second Secret");
                        $("#li-3").text("Third Secret");

                        /* Changes slideshow images */
                        for (var i = 1; i < 4; i++) {
                            console.log("Attempting to change image src for slideshow...")
                            var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                            console.log("current filepath equals " + filepath);
                            var identity = "#slideshow-" + i.toString();
                            console.log(identity);
                            $(identity).attr("src",filepath);
                        }
                    break;
                case "#f1":
                        var currentmap = "switchback"
                        var maptype = "cp"

                        $("#map-name").text(currentmap.toProperCase());
                        $("#map-detailed-description").text("Welcome to the axle map!");

                        /* Secrets and hints */
                        $("#li-1").text("First Secret");
                        $("#li-2").text("Second Secret");
                        $("#li-3").text("Third Secret");

                        /* Changes slideshow images */
                        for (var i = 1; i < 4; i++) {
                            console.log("Attempting to change image src for slideshow...")
                            var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                            console.log("current filepath equals " + filepath);
                            var identity = "#slideshow-" + i.toString();
                            console.log(identity);
                            $(identity).attr("src",filepath);
                        }
                    break;

                case "#f2":
                        var currentmap = "tidal"
                        var maptype = "cp"

                        $("#map-name").text(currentmap.toProperCase());
                        $("#map-detailed-description").text("Welcome to the beamvalley map!");

                        /* Secrets and hints */
                        $("#li-1").text("First Secret");
                        $("#li-2").text("Second Secret");
                        $("#li-3").text("Third Secret");

                        /* Changes slideshow images */
                        for (var i = 1; i < 4; i++) {
                            console.log("Attempting to change image src for slideshow...")
                            var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                            console.log("current filepath equals " + filepath);
                            var identity = "#slideshow-" + i.toString();
                            console.log(identity);
                            $(identity).attr("src",filepath);
                        }
                    break;

                case "#f3":
                        var currentmap = "upland"
                        var maptype = "cp"

                        $("#map-name").text(currentmap.toProperCase());
                        $("#map-detailed-description").text("Welcome to the croissant map!");

                        /* Secrets and hints */
                        $("#li-1").text("First Secret");
                        $("#li-2").text("Second Secret");
                        $("#li-3").text("Third Secret");

                        /* Changes slideshow images */
                        for (var i = 1; i < 4; i++) {
                            console.log("Attempting to change image src for slideshow...")
                            var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                            console.log("current filepath equals " + filepath);
                            var identity = "#slideshow-" + i.toString();
                            console.log(identity);
                            $(identity).attr("src",filepath);
                        }
                    break;

                case "#f4":
                        var currentmap = "vanguard"
                        var maptype = "cp"

                        $("#map-name").text(currentmap.toProperCase());
                        $("#map-detailed-description").text("Welcome to the desertfortress map!");

                        /* Secrets and hints */
                        $("#li-1").text("First Secret");
                        $("#li-2").text("Second Secret");
                        $("#li-3").text("Third Secret");

                        /* Changes slideshow images */
                        for (var i = 1; i < 4; i++) {
                            console.log("Attempting to change image src for slideshow...")
                            var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                            console.log("current filepath equals " + filepath);
                            var identity = "#slideshow-" + i.toString();
                            console.log(identity);
                            $(identity).attr("src",filepath);
                        }
                    break;

                case "#f5":
                        var currentmap = "zinkenite"
                        var maptype = "cp"

                        $("#map-name").text(currentmap.toProperCase());
                        $("#map-detailed-description").text("Welcome to the desertion map!");

                        /* Secrets and hints */
                        $("#li-1").text("First Secret");
                        $("#li-2").text("Second Secret");
                        $("#li-3").text("Third Secret");

                        /* Changes slideshow images */
                        for (var i = 1; i < 4; i++) {
                            console.log("Attempting to change image src for slideshow...")
                            var filepath = "../media/images/mapshowcase/" + maptype + "/" + maptype + " - " + currentmap + "/" + i.toString() + ".jpg";
                            console.log("current filepath equals " + filepath);
                            var identity = "#slideshow-" + i.toString();
                            console.log(identity);
                            $(identity).attr("src",filepath);
                        }
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




/* by shen zhou hong @ hong dot shenzhou at gmail dot com */
