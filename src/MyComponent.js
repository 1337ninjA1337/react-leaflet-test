import React from "react";
import LocationPicker from "react-leaflet-location-picker";
import { polygon, Circle, circle, control, Polygon, Popup } from "leaflet";

const MyComponent = () => {
  const polygonMode={
      banner: true,
  }
  
  const mapStyle={ 
    height: "90vh", 
    width: "auto" 
  }
  
  return <LocationPicker polygonMode={polygonMode} mapStyle={mapStyle}  />;
};

export default MyComponent;