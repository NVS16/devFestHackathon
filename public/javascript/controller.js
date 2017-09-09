$(document).ready(function () {

    $.getJSON("http://ip-api.com/json", function (pos) {
          navigateTo(pos.lon,pos.lat);
    });


   
    $("#1").click(function(){
        navigateTo(85.7847 , 20.2625); //  20.2562° N, 85.7801° E Khandagiri Caves
    });

     $("#2").click(function(){
        navigateTo(85.8260 , 20.3958); // Nandan Kanan
    });

     $("#3").click(function(){
        navigateTo(85.8338 , 20.2382); // 20.2382° N, 85.8338° E Lingaraj
    });

    $("#4").click(function(){
        navigateTo(85.8435 , 20.2435); // 20.2382° N, 85.8338° E Lingaraj
    });

    $("#5").click(function(){
        navigateTo(85.8411 , 20.2563); // 20.2382° N, 85.8338° E Lingaraj
    });
    $("#6").click(function(){
        navigateTo(85.8399 , 20.1912); // 20.2382° N, 85.8338° E Lingaraj
    });
    $("#7").click(function(){
        navigateTo(85.8428 , 20.2777); // 20.2382° N, 85.8338° E Lingaraj
    });
    $("#8").click(function(){
        navigateTo(85.8391 , 20.2432); // 20.2382° N, 85.8338° E Lingaraj
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
                            zoom: 18,
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