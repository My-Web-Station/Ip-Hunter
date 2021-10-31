import React from "react";
import "./Maps.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Maps = (props) => {
  const lat = props.location.lat;
  const lng = props.location.lng;

  return (
    <div>
      <MapContainer
        center={[lat, lng]}
        zoom={15}
        scrollWheelZoom={true}
        position={[lat, lng]}
        doubleClickZoom={true}
        className="Maps"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[lat, lng]}>
          <Popup>You are here!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Maps;
