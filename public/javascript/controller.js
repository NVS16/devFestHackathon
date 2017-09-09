$(document).ready(function () {
    require([
        "esri/Map",
        "esri/views/SceneView",
        "dojo/domReady!"
    ], function (Map, SceneView) {
        // Code to create the map and view will go here

        require([
            "esri/Map",
            "esri/views/SceneView",
            "dojo/domReady!"
        ], function (Map, SceneView) {

            var map = new Map({
                basemap: "hybrid",
                ground: "world-elevation"
            });

            var view = new SceneView({
                container: "viewDiv",
                map: map,
                scale: 10000,
                 /*  //  center: [-101.17, 21.78]
                   //  center : [20.95,85.09]
                     center : [85.09,20.95],
                     zoom : 13 */
            });

            view
                .then(function () {
                    // SceneView is now ready for display and can be used. Here we will
                    // use goTo to view a particular location at a given zoom level, camera
                    // heading and tilt.
                    view.goTo({
                        center: [85.7758, 20.2764],
                        zoom: 20,
                        heading: 30,
                        tilt: 0
                    })
                })
                .otherwise(function (err) {
                    // A rejected view indicates a fatal error making it unable to display,
                    // this usually means that WebGL is not available, or too old.
                    console.error("SceneView rejected:", err);
                });
        });
    });
});