import React, { useState, useContext, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from 'leaflet'
import Button from 'react-bootstrap/Button'
import "./MapIss.Styles.scss";
import { IssPositionContext } from "../../contexts/issposition.context"

const svgIcon = L.divIcon({
  html: `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>`,
  className: "svg-icon",
  iconSize: [60, 60],
});

export const MapIss = () => {
  
  const [focusState, setFocusState] = useState(false);
  const { issPosition } = useContext(IssPositionContext);

  useEffect(() => {
      if (focusState && issPosition.name) {
        setTimeout(() => {
          const { latitude, longitude } = issPosition;
          
        }, 1000); // wait for 1 second before updating the map center
      } else {
        
      }
    
  }, [ focusState, issPosition]);

  const Focus = () => {
    setFocusState(!focusState);
  };

  return (
    <div>
      <div className="test-map">
        <MapContainer
          
          center={[51.505, -0.09]}
          zoom={3}
          scrollWheelZoom={false}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {issPosition.latitude && issPosition.longitude && (
            <Marker key={issPosition.name} position={[issPosition.latitude, issPosition.longitude]} icon={svgIcon}>
              <Popup>Position of the ISS.</Popup>
            </Marker>
          )}
          
        </MapContainer>
      </div>
      <Button variant="primary" onClick={Focus}>Focus on ISS</Button>
    </div>
  );
};

