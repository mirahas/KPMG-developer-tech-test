import { useEffect, useState, useRef } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import fetchLocations from '../api/_fetchLocations.jsx';

export default function Map() {

    const [companyLocations, setCompanyLocations] = useState();
    const [selectedCompany, setSelectedCompany] = useState(null);

    useEffect(() => {
        var mount = true;
        const loadData = async () => {
            const locations = await fetchLocations();

            if (mount) {
                setCompanyLocations(locations);
            }
        }
        loadData();
        return () => mount = false;
    }, []);

    return (
        <>
            <ReactMapGL
                initialViewState={{
                    longitude: 0,
                    latitude: 53,
                    zoom: 4
                }}
                style={{ width: "100%", height: 600 }}
                mapboxAccessToken="pk.eyJ1IjoibWlyYXlocyIsImEiOiJja3k5eHcyeGYwMDN0Mm5yaTVhc2N5YXhsIn0.UYO7beAhrSrCTkEXJNhLMA"
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >

                {companyLocations &&
                    companyLocations.map(company => (
                        <Marker key={company.id}
                            latitude={company.location.latitude}
                            longitude={company.location.longitude}
                        >

                            <button className="map-marker"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedCompany(company);
                                    console.log("POPUP", company);

                                }}
                            >
                                <img src="\marker.png"
                                />
                            </button>
                        </Marker>
                    ))
                }

                {selectedCompany ? (
                    <Popup
                        latitude={selectedCompany.location.latitude ? selectedCompany.location.latitude : "0"}
                        longitude={selectedCompany.location.longitude ? selectedCompany.location.longitude : "0"}
                        onClose={() => { setSelectedCompany(null) }}
                        closeButton={true}
                        closeOnClick={false}
                        anchor="top"
                    >
                        { console.log("popup company", selectedCompany)}
                        <div>
                            {selectedCompany.company}
                        </div>
                    </Popup>
                ) : null}

            </ReactMapGL>
        </>
    );
} 