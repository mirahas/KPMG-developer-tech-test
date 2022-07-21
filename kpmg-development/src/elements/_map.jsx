import { useEffect, useState, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import fetchLocations from './api/_fetchLocations.jsx';

export default function Map() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWlyYXlocyIsImEiOiJja3k5eHcyeGYwMDN0Mm5yaTVhc2N5YXhsIn0.UYO7beAhrSrCTkEXJNhLMA';

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; 
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });



    return (
        <>
            <div>
                <div ref={mapContainer} className="map-container" />
            </div>
        </>
    );
} 