import React, { useState, useEffect, Fragment, useRef } from 'react';
import Header from '../components/Header';
import HeadNav from '../components/HeadNav';
import AddressList from '../components/AddressList';
import Footer from '../components/Footer';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import {Icon} from 'leaflet';
import L from 'leaflet';
import '../App.css';

function Location() {

    

    const [userLocale, setUserLocale] = useState({latitude : 39.7684, longitude: 86.1581});
     useEffect(() => {
        getLocation();
    }, []);
    const getLocation = async () => {
    if (navigator.geolocation) {
        console.log('sal')
        await navigator.geolocation.getCurrentPosition(position=>{
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
            setUserLocale({
                latitude: position.coords.latitude, 
                longitude: position.coords.longitude
            });
            console.log()
        }) 
    } else {
        console.log('Geolocation not available');
        }
    }

    const mapRef = useRef();
    mapRef.current = L.map('map', {
        center: userLocale
    })
    console.log(mapRef);

    return (
        <div className='location-container'>
            <Header showLogo={true} />
            <HeadNav header='Delivery Information' />
            <AddressList />
            <MapContainer center={[ userLocale.latitude, userLocale.longitude ]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
            
            <button onClick={getLocation} className='lobster purple-btn map-button'>
                Proceed to Payment
            </button>
        </div>
    )
}

export default Location
