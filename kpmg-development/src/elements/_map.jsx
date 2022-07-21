import { useEffect, useState, useRef } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import fetchLocations from '../api/_fetchLocations.jsx';

export default function Map() {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [viewport, setViewport] = useState({
        lat: 53,
        long: 0,
        height: '400',
        width: '600',
        zoom: 4.5
    });
    const [companyLocations, setCompanyLocations] = useState();


    useEffect(() => {
        const loadData = async () => {
            const locations = await fetchLocations();
            setCompanyLocations(locations);
            console.log("locations data", locations);
        }
        loadData();

    });

    return (
        <>
            <ReactMapGL
                initialViewState={{
                    longitude: 0,
                    latitude: 53,
                    zoom: 4
                }}
                style={{ width: 600, height: 400 }}
                mapboxAccessToken="pk.eyJ1IjoibWlyYXlocyIsImEiOiJja3k5eHcyeGYwMDN0Mm5yaTVhc2N5YXhsIn0.UYO7beAhrSrCTkEXJNhLMA"
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >

                {companyLocations &&
                    companyLocations.map(company => (
                        <Marker key={company.id}
                            latitude={company.location.latitude}
                            longitude={company.location.longitude}
                        >
                            <button className="map-marker">
                                <img src="\marker.png"
                                />
                            </button>
                        </Marker>
                    ))
                }
            </ReactMapGL>
        </>
    );
} 