import Button from 'react-bootstrap/Button'
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

export const FocusButton = ({ onClick }) => {
    const map = useMap();
  
    const handleClick = (event) => {
      onClick(event);
      map.invalidateSize();
    };
  
    return <Button onClick={handleClick}>Focus</Button>;
  };