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
import {useToasts} from 'react-toast-notifications';
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
    const [state, setState] = useState({loading: false, useLocation: false, query : ''});
    const [loading, setLoading] = useState(false);
    const {addToast} = useToasts();

    // functions
    const getAddressInput = async (e) => {
        await setState(prevState => ({
            ...prevState,
            loading: true
        }));
        
        e.preventDefault();
        if (e.keyCode === 13 && e.target.value.length > 4) {
            console.log(e.keyCode)
            await setState(prevState => ({
                ...prevState,
                query: e.target.value
            }));
            
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}q=${e.target.value}&key=${process.env.REACT_APP_OCD_API_KEY}&language=en&pretty=1`).then(data => data.json()).catch(e => console.log(e.message()));
            console.log(res);
            const results = res.results[0];
            console.log(results);
            if (results) {
                await setUserLocale({
                    latitude: results.geometry.lat, 
                    longitude: results.geometry.lng
                });
            } else {
                addToast('Fuck you guy', { appearance: 'success' });
            }
            

            setState(prevState => ({
                ...prevState,
                useLocation: true,
                loading : false
            }));
            
        }
        
    }

    const getLocation = async (q) => {
        q = 'Chicago Illinois' || q;
        
        setState(prevState => ({
            ...prevState,
            loading: true
        }));
        
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}q=${q}&key=${process.env.REACT_APP_OCD_API_KEY}&language=en&pretty=1`).then(data => data.json());
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
            <AddressList onkeyup={getAddressInput} onClick={getLocation} />
            {   
                // loading
                state.loading &&  <HashLoader css={override}/>
            }

            { 
                //map 
               !state.loading && state.useLocation && <MapContainer 
                center={[userLocale.latitude, userLocale.longitude]} 
                zoom={8}
                scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapComponent center={[userLocale.latitude, userLocale.longitude]} zoom={18}/>
                <Marker position={[userLocale.latitude, userLocale.longitude]}/>
            </MapContainer>
            }
            <Fragment>
                <Footer url='/' reference='mainMenu' message='Continue'/>
                <div className='ghost'></div>
            </Fragment>
        </div>
    )
}

export default Location
