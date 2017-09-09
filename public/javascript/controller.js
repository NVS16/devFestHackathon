$(document).ready(function () {

    $.getJSON("http://ip-api.com/json", function (pos) {
          navigateTo(pos.lon,pos.lat);
    });

    $("#goto").click(function () {
        navigateTo(85.7758 , 20.2764);
    });

   
    $("#1").click(function(){
        navigateTo(85.7801 , 20.2562); //  20.2562° N, 85.7801° E
    });

     $("#2").click(function(){
        navigateTo(85.8245 , 20.2960); // 
    });

     $("#3").click(function(){
        navigateTo(85.8338 , 20.2382); // 20.2382° N, 85.8338° E
    });

    function navigateTo(long , lat){
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
                });

                view
                    .then(function () {
                        view.goTo({
                            center: [long,lat],  // 85.7758 , 20.2764
                            zoom: 20,
                            heading: 30,
                            tilt: 0
                        })
                    })
                    .otherwise(function (err) {
                        console.error("SceneView rejected:", err);
                    });

            });
        });
    }
    
});