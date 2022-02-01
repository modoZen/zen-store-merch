/* eslint-disable react/function-component-definition */
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import '../styles/components/Success.css';
import config from "../../config";
// eslint-disable-next-line arrow-body-style
const Map = ({data})=>{


    const mapStyles={
        height:"50vh",
        with:"100%",    
    }
    const defaultCenter={
        lat: parseFloat(data.lat),
        lng: parseFloat(data.lng)
    }

    return (
        <LoadScript googleMapsApiKey={config.googleMapsApiKey}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                center={defaultCenter}
                zoom={17}
            >
                <Marker position={defaultCenter}/>
            </GoogleMap>
        </LoadScript>
    )
}
export default Map;