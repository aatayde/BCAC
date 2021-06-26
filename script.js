function initMap() {
  const myLatLng = { lat: 33.858, lng: -118.391 };
  const map = new google.maps.Map(document.getElementById('googleMap'), {
    zoom: 14,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: 'Beach Cities Auto Clinic',
  });
}
