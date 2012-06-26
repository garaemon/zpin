function initialize() {
  var latlng = new google.maps.LatLng(35.711552, 139.731444);
  var myOptions = {
    zoom: 10,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"),
                                myOptions);
  var image = 'zpin.png';
  var center_lat = 35.711552;
  var center_lon = 139.731444;
  var latd = 0.5;
  var lond = 1.5;
  var res = 20;
  for (var i = 0; i < res; i++) {
    var lat_diff = latd / res * (i - res / 2);
    for (var j = 0; j < res; j++) {
      var lon_diff = lond / res * (j - res / 2);
      var myLatLng = new google.maps.LatLng(center_lat + lat_diff,
                                            center_lon + lon_diff);
      var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
      });
    }
  }
}
