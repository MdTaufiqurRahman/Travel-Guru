import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '600px',
  height: '480px'
};

const location = {
  lat: 23.816286,
  lng: 90.428201
};
const onLoad = marker => {
    console.log('marker: ', marker)
  }

function Map() {
  return (
    <LoadScript
      googleMapsApiKey='AIzaSyCeJmp6hPdxfP1YnJZWJqPLNqVw554ZM_w'
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={15}
      >
           <Marker
      onLoad={onLoad}
      position={location}
    />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)