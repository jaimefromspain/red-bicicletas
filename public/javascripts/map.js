var mymap = L.map('mapid').setView([43.4296400,-3.8592900], 14);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiamFpbWV6YXJhdGUiLCJhIjoiY2tqdm11dXJoMDZsaDJwbWxneHBrM25tZiJ9.U5PXvwyV92DW0dJ_tRmiUg'
}).addTo(mymap);

$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success: function(result){
        console.log(result);
        result.bicicletas.forEach(function(bici){
            L.marker(bici.ubicacion, {title:bici.ubicacion}).addTo(mymap)
        });
    }
})