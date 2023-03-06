import React from "react";
import { MapContainer, TileLayer,Marker } from "react-leaflet";
import { useContext } from "react"
import { IssPositionContext } from "../../contexts/issposition.context"
import "./MapIss.Styles.scss";

export const MapIss = () => {
  const { issPosition } = useContext(IssPositionContext)

  console.log(issPosition)
  return (
    <div className="test-map">
      <MapContainer center={[51.505, -0.09]} zoom={2.1} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51,7,-112]}>
      
        </Marker>
      </MapContainer>
    </div>
  );
};