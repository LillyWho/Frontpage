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

    /* Converts to sentence case */
    String.prototype.toProperCase = function () {
        return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

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
                    var currentmap = "axle"
                    var maptype = "cp"

                    $("#map-name").text(currentmap.toProperCase());
                    $("#map-detailed-description").text("The cp axle is a 5 point CP map that is designed for hours of fun - both teams have to capture all control points in order to win, and the map's iconic design makes it not only a refreshing choice for the aspiring player, but also a challenging one. Teams must fight in variable terrain all the way from rocky outcrops to the interior of an air conditioned base!");

                    /* Secrets and hints */
                    $("#li-1").text("Tight corners and darke edges makes this the perfect map for a sneaky pyro!");
                    $("#li-2").text("The best places for a sentry camp are usually at the last control point in this map");
                    $("#li-3").text("Alternative routes makes it easy for enemy spies to infiltrate your base, so watch out!");

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
                    $("#map-detailed-description").text("Welcome to the beamvalley map, where players would be fighting under a gigantic laser beam! In this map there are both wide open spaces and narrow corridors, so every class can play to it's best, and hidden sniper spots makes it easy to practice some headhunting as well. Texturing is also quite well done as well, with fantastic superweapons setting the backdrop for this conflict");

                    /* Secrets and hints */
                    $("#li-1").text("This map is assymmetric, and divided into three areas - two outdoor zones and a indoor arena.");
                    $("#li-2").text("Many props and corners makes it easy to hide around the map");
                    $("#li-3").text("Only the first two areas are good for close ranged combat - the last stretch has wide open spaces!");

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
                    $("#map-detailed-description").text("Croissant is the de facto staple of professional team fortress 2 players, and it's quality can be still seen today in the careful arrangement of control points that it exhibits. The map is symmetic across the vertical axis rather then the horizontal axis, so it may be disorientating for newer players...");

                    /* Secrets and hints */
                    $("#li-1").text("This map is curved - shaped literally like a croissant! Keep that in mind when navigating.");
                    $("#li-2").text("Spies can use the underground back passage to directly go into the enemy base to sap sentries.");
                    $("#li-3").text("Engineers take care when setting up sentries for the last point - you need to cover the 4 entryways!");

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
                    $("#map-detailed-description").text("This map may be loosly textured and not as appealing as the other maps, but don't let it's appearance fool you. It's a fantastic soldier spamfest, and although players might not like it for it's competitive merits, dessertfortress is fantastic fun for almost everyone involved! the map contains 3 capture points and a huge potential for fun!");

                    /* Secrets and hints */
                    $("#li-1").text("Being soldier is often the best bet since the spaces are too open for pyros but too small for snipers");
                    $("#li-2").text("At the beginning, scouts can cooperate together to quickcap the first point for a slight advantage.");
                    $("#li-3").text("Sentries can be set up on the walkways above the control points - to a great effect!");

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
