import React, { useState, useEffect, Fragment, useRef } from 'react';
import Header from '../components/Header';
import HeadNav from '../components/HeadNav';
import AddressList from '../components/AddressList';
import Footer from '../components/Footer';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import PacmanLoader from "react-spinners/PacmanLoader";
import MapComponent from '../components/MapComponent';
import opencagedata from 'opencage-api-client';
import '../App.css';

function Location() {

  const override = css`
  display: block;
  margin: 0 auto;
  position: relative;
  border-color: red;
  height: 30rem;
`;

    const [userLocale, setUserLocale] = useState({latitude : 42.28, longitude: -83.1581});
    //  useEffect(() => {
    //     getLocation();
    // }, []);
    const [state, setState] = useState({loading: false, useLocation: false, query : ''});
    const [loading, setLoading] = useState(false);
    const getLocation = async () => {
        setState(prevState => ({
            ...prevState,
            loading: true
        }));
        console.log(loading);
        // (async function grab() {
        //     let res = await fetch('https://api.opencagedata.com/geocode/v1/json?q=Indianapolis%20Indiana&key=60cdc5bd701147d7a006992c264eafbc&language=en&pretty=1')
        //     .then(data => data.json().then(data => console.log(data.results[0].geometry)));
        //     return res;
            
        // }());
        
    const res = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=Indianapolis&key=${process.env.REACT_APP_OCD_API_KEY}&language=en&pretty=1`).then(data => data.json());
    const results = res.results;
    console.log(results)

    if (navigator.geolocation) {
        await navigator.geolocation.getCurrentPosition(position=>{
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
            setUserLocale({
                latitude: position.coords.latitude, 
                longitude: position.coords.longitude
            });
        });
        setState(prevState => ({
            ...prevState,
            useLocation: true,
            loading : false
        }));
        console.log(state.loading) 
    } else {
        console.log('Geolocation not available');
        }
    }

    return (
        <div className='location-container'>
            <Header showLogo={true} />
            <HeadNav header='Delivery Information' />
            <AddressList onClick={getLocation} />
            
            {   
                // loading
                state.loading &&  <HashLoader css={override}/>
            }

            { 
                //map 
                state.useLocation && <MapContainer 
                center={[userLocale.latitude, userLocale.longitude]} 
                zoom={8}
                scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapComponent center={[userLocale.latitude, userLocale.longitude]} zoom={14}/>
            </MapContainer>
            }
            <Fragment>
                <Footer url='/customer-info' reference='mainMenu' message='Continue'/>
                <div className='ghost'></div>
            </Fragment>
        </div>
    )
}

export default Location
