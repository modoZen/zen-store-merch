import { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";

const useGoogleAddress = address => {
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${config.googleMapsApiKey}`;

    useEffect(() => {
        async function handler() {
            const response = await axios(API);
            console.warn(response);
            setMap(response.data.results[0].geometry.location);
        }
        handler();
    }, []);
    return map;
};

export default useGoogleAddress;