import React from 'react'
import { isCompositeComponent } from 'react-dom/test-utils';
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";



function MapComponent(props) {
    const map = useMap();
    console.log(map);
    console.log('map center: ', map.getCenter());
    map.setView(props.center, props.zoom);
    return null;
}

export default MapComponent;
