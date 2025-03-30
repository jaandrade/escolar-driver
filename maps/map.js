
const MAPS_API_KEY = "AIzaSyCzR96PouwG1AMRKaLyuUWRhSxzn-0JP74";

function initMap() {
  const latitude = -23.4837;
  const longitude = -46.3916;
  const zoom = 16;
  const size = "800x600";
  
  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=${zoom}&size=${size}&markers=color:blue%7C${latitude},${longitude}&key=${MAPS_API_KEY}`;
  
  const mapContainer = document.getElementById('map');
  mapContainer.innerHTML = `<img src="${staticMapUrl}" alt="Mapa TransLegal" style="width:100%;max-width:800px;border-radius:10px;">`;
}

window.onload = initMap;
