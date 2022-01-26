/* eslint-disable react/function-component-definition */
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import '../styles/components/Success.css';
// eslint-disable-next-line arrow-body-style
const Map = ()=>{


    const mapStyles={
        height:"50vh",
        with:"100%",    
    }
    const defaultCenter={
        lat:19.4268,
        lng:-99.17
    }

    return (
        <LoadScript googleMapsApiKey="AIzaSyCnsD9MdAW6VuZY4SCD6ww91KeyP9CXDoo">
            <GoogleMap
                mapContainerStyle={mapStyles}
                center={defaultCenter}
                zoom={9}
            >
                <Marker position={defaultCenter}/>
            </GoogleMap>
        </LoadScript>
    )
}
export default Map;