import React from "react";
import { MapContainer, TileLayer,Marker,Popup } from "react-leaflet";
import { useContext } from "react"
import { IssPositionContext } from "../../contexts/issposition.context"
import L from 'leaflet'
import "./MapIss.Styles.scss";

const svgIcon = L.divIcon({
  html: `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>`,
  className: "svg-icon",
  iconSize: [60, 60],
  
});


export const MapIss =  () => {
  let positionMap = [51.505, -0.09]
  const { issPosition } =useContext(IssPositionContext)
  if(issPosition.name){
    positionMap = [issPosition.latitude,issPosition.longitude]
  }
  console.log(issPosition)
  const roundLat=Math.round(issPosition.latitude * 10) / 10
  const roundLon=Math.round(issPosition.longitude * 10) / 10
 
  
  return (
    <div className="test-map">
      <MapContainer 
      center={[51.505, -0.09]} 
      zoom={2.1} 
      scrollWheelZoom={false} 
      style={{ height: "400px", width: "100%" }}
      
      >

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker 
        key={`${roundLat}-${roundLon}`}
        position={positionMap}
        icon={svgIcon}
        >
          <Popup>
          Position of the ISS.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};