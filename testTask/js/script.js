function initMap() {
    var elem = document.getElementById('map');
    var options = {
        zoom: 17,
        center: {lat: 49.979614, lng:36.309140}
    };

    var Mymap = new google.maps.Map(elem, options);
    var marker = new google.maps.Marker({
      position: {lat: 49.979614, lng:36.309140},
      map: Mymap,
});
    marker.setIcon("./img/map_icon.png");
}