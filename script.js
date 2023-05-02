var map = L.map('map');

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

// visualização inicial do mapa baseado nos marcadores
var bounds = L.latLngBounds([-3.7319, -38.5267], [-4.1208, -38.4709]);
map.fitBounds(bounds);

// marker1
var marker1 = L.marker([-3.795764, -38.534455]).addTo(map);

var popupContent1 = '<div class="popup-content">' +
  '<img src="\FORTALEZA.jpg">' +
  '<p class="popup-text"><strong>SUB-BACIAS CE-07_08_09_ETE COCÓ</strong><br><br>CONTRATO: 048/2022<br>AVANÇO FÍSICO: 2,91%<br>AVANÇO FINANCEIRO: 7,87%<br><br>CLIQUE PARA MAIS INFORMAÇÕES...</p>' +
  '</div>';
  

marker1.bindPopup(popupContent1);

marker1.on('mouseover', function(e) {
  this.getElement().classList.add('marker-neon');
  this.openPopup();
});

marker1.on('mouseout', function(e) {
  this.getElement().classList.remove('marker-neon');
  this.closePopup();
});
marker1.on('click', function(e) {
  window.open('https://concrematcorp.sharepoint.com/sites/CAGECE/SitePages/CTR048-2022.aspx', '_blank');
});


// marker2
var marker2 = L.marker([-4.088785, -38.500393]).addTo(map);
marker2.bindPopup('<div class="popup-content"><img src="\HORIZONTE.jpg"><p class="popup-text"><strong>SAAI HORIZONTE, PACAJUS E CHOROZINHO </strong> <br><br> CONTRATO: 039/2022 <br> AVANÇO FÍSICO: 7,17% <br> AVANÇO FINANCEIRO: 17,26% <br><BR>CLIQUE PARA SABER MAIS...</p></div>');

marker2.on('mouseover', function(e) {
  this.getElement().classList.add('marker-neon');
    this.openPopup();
});
marker2.on('mouseout', function(e) {
  this.getElement().classList.remove('marker-neon');
    this.closePopup();
});

marker2.on('click', function(e) {
  window.open('https://concrematcorp.sharepoint.com/sites/CAGECE/SitePages/CTR039-2022.aspx', '_blank');
});

// botão de foco 1
var focusButton = L.control({position: 'topright'});
focusButton.onAdd = function(map) {
  var button = L.DomUtil.create('button', 'focus-button');
  button.innerHTML = 'SUB-BACIAS CE-07_08_09_ETE COCÓ';
  L.DomEvent.on(button, 'click', function() {
    map.flyTo([-3.795764, -38.534455], 17);
  });
  return button;
}
focusButton.addTo(map);

// botão de foco 2
var focusButton = L.control({position: 'topright'});
focusButton.onAdd = function(map) {
  var button = L.DomUtil.create('button', 'focus-button');
  button.innerHTML = 'SAAI HORIZONTE, PACAJUS E CHOROZINHO';
  L.DomEvent.on(button, 'click', function() {
    map.flyTo([-4.088785, -38.500393], 17);
  });
  return button;
}
focusButton.addTo(map);

// botão de foco 3
var focusButton = L.control({position: 'topright'});
focusButton.onAdd = function(map) {
  var button = L.DomUtil.create('button', 'focus-button');
  button.innerHTML = 'VISÃO GERAL';
  L.DomEvent.on(button, 'click', function() {
    var bounds = L.latLngBounds([[-3.795764, -38.534455], [-4.088785, -38.500393]]);
    map.fitBounds(bounds);
  });
  return button;
}
focusButton.addTo(map);


//polígono
var fortalezaCoords = [
  [-3.7949, -38.5971],
  [-3.7058, -38.5916],
  [-3.7237, -38.4879],
  [-3.7316, -38.455],
  [-3.7781, -38.4292],
  [-3.8528, -38.4419],
  [-3.8827, -38.4712],
  [-3.9033, -38.5168],
  [-3.8893, -38.5607],
  [-3.8433, -38.5946]
];

var horizonteCoords = [
  [-4.085596 + 0.03, -38.520245 + 0.05],
  [-4.085754 + 0.03, -38.514551 + 0.05],
  [-4.086406 + 0.03, -38.510033 + 0.05],
  [-4.088111 + 0.03, -38.504072 + 0.05],
  [-4.091345 + 0.03, -38.499554 + 0.05],
  [-4.096446 + 0.03, -38.496066 + 0.05],
  [-4.102200 + 0.03, -38.494269 + 0.05],
  [-4.105197 + 0.03, -38.493179 + 0.05],
  [-4.112045 + 0.03, -38.492259 + 0.05],
  [-4.116254, -38.493179 + 0.01],
  [-4.121355, -38.496981 + 0.01],
  [-4.126284, -38.504344 + 0.01],
  [-4.129040, -38.509774 + 0.01],
  [-4.129778, -38.514719 + 0.01],
  [-4.129748, -38.520227 + 0.01],
  [-4.128050, -38.525915 + 0.01],
  [-4.124732, -38.531078 + 0.01],
  [-4.121043, -38.534886 + 0.01],
  [-4.114751, -38.537810 + 0.01],
  [-4.109279, -38.538358 + 0.01],
  [-4.104295, -38.538252 + 0.01],
  [-4.099654 + 0.03, -38.537404 + 0.01],
  [-4.095265 + 0.03, -38.536184 + 0.01],
  [-4.091151 + 0.03, -38.533800 + 0.01],
  [-4.088234 + 0.03, -38.530429 + 0.01],
  [-4.086068 + 0.03, -38.526273 + 0.01],
  [-4.085596 + 0.03, -38.520245 + 0.01]
];

// Adiciona o polígono ao mapa
var fortalezaPolygon = L.polygon(fortalezaCoords, {color: 'blue'}).addTo(map);
fortalezaPolygon.on('mouseover', function (e) {
fortalezaPolygon.getElement().classList.add('white-border');
});
fortalezaPolygon.on('mouseout', function (e) {
fortalezaPolygon.getElement().classList.remove('white-border');
});


var horizontePolygon = L.polygon(horizonteCoords, { color: 'green' }).addTo(map);
horizontePolygon.on('mouseover', function (e) {
  horizontePolygon.getElement().classList.add('white-border');
});
horizontePolygon.on('mouseout', function (e) {
  horizontePolygon.getElement().classList.remove('white-border');
});

var fortalezaBounds = fortalezaPolygon.getBounds();
var fortalezaCenter = fortalezaBounds.getCenter();

L.marker(fortalezaCenter, {
icon: L.divIcon({
  className: 'city-label',
  html: 'Fortaleza',
  iconSize: [100, 40],
})
}).addTo(map);

