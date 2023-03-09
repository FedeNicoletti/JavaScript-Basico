let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: 39.60209592685429, 
        lng: 22.368998532507064,
      },
      map,
      title: "Grecia",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 41.94387724841763, 
        lng: 12.542089073060538,
      },
      map,
      title: "Roma",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: -40.152170356380566, 
        lng: -71.41534273814615,
      },
      map,
      title: "San Martin de los Andes",
    })
  );
}