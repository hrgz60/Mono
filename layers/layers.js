var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_Municipio_Garcia_de_Hevia_Parroquia_Boca_de_GritaBoca_de_Grita_Centros_Poblados_0 = new ol.format.GeoJSON();
var features_Municipio_Garcia_de_Hevia_Parroquia_Boca_de_GritaBoca_de_Grita_Centros_Poblados_0 = format_Municipio_Garcia_de_Hevia_Parroquia_Boca_de_GritaBoca_de_Grita_Centros_Poblados_0.readFeatures(json_Municipio_Garcia_de_Hevia_Parroquia_Boca_de_GritaBoca_de_Grita_Centros_Poblados_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipio_Garcia_de_Hevia_Parroquia_Boca_de_GritaBoca_de_Grita_Centros_Poblados_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Municipio_Garcia_de_Hevia_Parroquia_Boca_de_GritaBoca_de_Grita_Centros_Poblados_0.addFeatures(features_Municipio_Garcia_de_Hevia_Parroquia_Boca_de_GritaBoca_de_Grita_Centros_Poblados_0);var lyr_Municipio_Garcia_de_Hevia_Parroquia_Boca_de_GritaBoca_de_Grita_Centros_Poblados_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipio_Garcia_de_Hevia_Parroquia_Boca_de_GritaBoca_de_Grita_Centros_Poblados_0, 
                style: style_Municipio_Garcia_de_Hevia_Parroquia_Boca_de_GritaBoca_de_Grita_Centros_Poblados_0,
    title: 'Municipio_Garcia_de_Hevia_Parroquia_Boca_de_Grita Boca_de_Grita_Centros_Poblados<br />\
    <img src="styles/legend/Municipio_Garcia_de_Hevia_Parroquia_Boca_de_GritaBoca_de_Grita_Centros_Poblados_0_0.png" /> Boca De Grita NOMBRES<br />\
    <img src="styles/legend/Municipio_Garcia_de_Hevia_Parroquia_Boca_de_GritaBoca_de_Grita_Centros_Poblados_0_1.png" /> Diamante NOMBRES<br />\
    <img src="styles/legend/Municipio_Garcia_de_Hevia_Parroquia_Boca_de_GritaBoca_de_Grita_Centros_Poblados_0_2.png" /> El Pueblito NOMBRES<br />\
    <img src="styles/legend/Municipio_Garcia_de_Hevia_Parroquia_Boca_de_GritaBoca_de_Grita_Centros_Poblados_0_3.png" /> Vuelta Del Mono NOMBRES<br />\
    <img src="styles/legend/Municipio_Garcia_de_Hevia_Parroquia_Boca_de_GritaBoca_de_Grita_Centros_Poblados_0_4.png" /> <br />'
        });

lyr_Municipio_Garcia_de_Hevia_Parroquia_Boca_de_GritaBoca_de_Grita_Centros_Poblados_0.setVisible(true);
var layersList = [baseLayer,lyr_Municipio_Garcia_de_Hevia_Parroquia_Boca_de_GritaBoca_de_Grita_Centros_Poblados_0];
lyr_Municipio_Garcia_de_Hevia_Parroquia_Boca_de_GritaBoca_de_Grita_Centros_Poblados_0.set('fieldAliases', {'id': 'id', 'código': 'código', 'código_est': 'código_est', 'estado': 'estado', 'capital_es': 'capital_es', 'código_mun': 'código_mun', 'municipio': 'municipio', 'capital_mu': 'capital_mu', 'código_par': 'código_par', 'parroquia': 'parroquia', 'capital_pa': 'capital_pa', 'nombre': 'nombre', 'descripció': 'descripció', 'fuente': 'URL', 'NOMBRES': 'NOMBRES', });
lyr_Municipio_Garcia_de_Hevia_Parroquia_Boca_de_GritaBoca_de_Grita_Centros_Poblados_0.set('fieldImages', {'id': 'TextEdit', 'código': 'TextEdit', 'código_est': 'TextEdit', 'estado': 'TextEdit', 'capital_es': 'TextEdit', 'código_mun': 'TextEdit', 'municipio': 'TextEdit', 'capital_mu': 'TextEdit', 'código_par': 'TextEdit', 'parroquia': 'TextEdit', 'capital_pa': 'TextEdit', 'nombre': 'Hidden', 'descripció': 'TextEdit', 'fuente': 'WebView', 'NOMBRES': 'TextEdit', });
lyr_Municipio_Garcia_de_Hevia_Parroquia_Boca_de_GritaBoca_de_Grita_Centros_Poblados_0.set('fieldLabels', {'id': 'no label', 'código': 'no label', 'código_est': 'no label', 'estado': 'no label', 'capital_es': 'no label', 'código_mun': 'no label', 'municipio': 'no label', 'capital_mu': 'no label', 'código_par': 'no label', 'parroquia': 'no label', 'capital_pa': 'no label', 'descripció': 'no label', 'fuente': 'no label', 'NOMBRES': 'no label', });
lyr_Municipio_Garcia_de_Hevia_Parroquia_Boca_de_GritaBoca_de_Grita_Centros_Poblados_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});