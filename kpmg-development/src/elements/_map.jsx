import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import fetchLocations from '../api/_fetchLocations.jsx';

export default function Map(props) {

    const [companyLocations, setCompanyLocations] = useState(props.data);
    const [selectedCompany, setSelectedCompany] = useState(null);

    return (
        <>
            <ReactMapGL
                initialViewState={{
                    longitude: 0,
                    latitude: 53,
                    zoom: 4
                }}
                style={{ width: "90%", height: 500 }}
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
                        <div>
                            <p> Company: {selectedCompany.company ? selectedCompany.company : "Not available"} </p>
                            <p> Sector: {selectedCompany.sector ? selectedCompany.sector : "Not available" } </p>
                            <p> Address: {selectedCompany.address ? selectedCompany.address : "Not available"} </p>
                            <p> Fees: {selectedCompany.fees ? selectedCompany.fees.amount + " " + selectedCompany.fees.currency : "Not available"} </p>
                            <p> Stock Symbol: {selectedCompany.stockSymbol ? selectedCompany.stockSymbol : "Not available"} </p>

                        </div>
                    </Popup>
                ) : null}

            </ReactMapGL>
        </>
    );
}

Map.propTypes = {
    data: PropTypes.array.isRequired
}