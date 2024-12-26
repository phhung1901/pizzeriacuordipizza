//var Contact = function (lat, lon, title) {

//    return {
        
//        //Map
//        initMap: function (lat, lon, title) {
//			var map;
//			$(document).ready(function(){
//			  map = new GMaps({
//				div: '#map',
//				lat: lat,
//				lng: lon
//			  });
//			   var marker = map.addMarker({
//					lat: lat,
//					lng: lon,
//					title: title
//		        });
//			});
//        }

//    };
//}();
var Contact = function (lat, lon, title, nomeDiv) {

    return {

        //Map
        initMap: function (lat, lon, title,nomeDiv) {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
			    div: '#' + nomeDiv,
			    scrollwheel: false,
				lat: lat,
				lng: lon
			    
			  });
			   var marker = map.addMarker({
					lat: lat,
					lng: lon,
					title: title
		        });
			});
        }

    };
}();