var wms_layers = [];
var format_Fusioncopier_0 = new ol.format.GeoJSON();
var features_Fusioncopier_0 = format_Fusioncopier_0.readFeatures(json_Fusioncopier_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fusioncopier_0 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Fusioncopier_0.addFeatures(features_Fusioncopier_0);var lyr_Fusioncopier_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fusioncopier_0, 
                style: style_Fusioncopier_0,
                title: '<img src="styles/legend/Fusioncopier_0.png" /> Fusion copier'
            });var format_Fusion_1 = new ol.format.GeoJSON();
var features_Fusion_1 = format_Fusion_1.readFeatures(json_Fusion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fusion_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Fusion_1.addFeatures(features_Fusion_1);var lyr_Fusion_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fusion_1, 
                style: style_Fusion_1,
                title: '<img src="styles/legend/Fusion_1.png" /> Fusion'
            });

lyr_Fusioncopier_0.setVisible(true);lyr_Fusion_1.setVisible(true);
var layersList = [lyr_Fusioncopier_0,lyr_Fusion_1];
lyr_Fusioncopier_0.set('fieldAliases', {'ID': 'ID', 'PREC_PLANI': 'PREC_PLANI', 'NOM': 'NOM', 'CODE_INSEE': 'CODE_INSEE', 'STATUT': 'STATUT', 'ARRONDISST': 'ARRONDISST', 'DEPART': 'DEPART', 'REGION': 'REGION', 'POPUL': 'POPUL', });
lyr_Fusion_1.set('fieldAliases', {'ID': 'ID', 'PREC_PLANI': 'PREC_PLANI', 'NOM': 'NOM', 'CODE_INSEE': 'CODE_INSEE', 'STATUT': 'STATUT', 'ARRONDISST': 'ARRONDISST', 'DEPART': 'DEPART', 'REGION': 'REGION', 'POPUL': 'POPUL', });
lyr_Fusioncopier_0.set('fieldImages', {'ID': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'NOM': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'STATUT': 'TextEdit', 'ARRONDISST': 'TextEdit', 'DEPART': 'TextEdit', 'REGION': 'TextEdit', 'POPUL': 'Range', });
lyr_Fusion_1.set('fieldImages', {'ID': '', 'PREC_PLANI': '', 'NOM': '', 'CODE_INSEE': '', 'STATUT': '', 'ARRONDISST': '', 'DEPART': '', 'REGION': '', 'POPUL': '', });
lyr_Fusioncopier_0.set('fieldLabels', {'ID': 'no label', 'PREC_PLANI': 'no label', 'NOM': 'no label', 'CODE_INSEE': 'no label', 'STATUT': 'no label', 'ARRONDISST': 'no label', 'DEPART': 'no label', 'REGION': 'no label', 'POPUL': 'no label', });
lyr_Fusion_1.set('fieldLabels', {'ID': 'no label', 'PREC_PLANI': 'header label', 'NOM': 'no label', 'CODE_INSEE': 'no label', 'STATUT': 'no label', 'ARRONDISST': 'no label', 'DEPART': 'no label', 'REGION': 'no label', 'POPUL': 'no label', });
lyr_Fusion_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});