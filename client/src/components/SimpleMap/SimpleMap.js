import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div style ={{    
color: 'white', 
background: 'grey',
padding: '15px 10px',
display: 'inline-flex',
textAlign: 'center',
alignItems: 'center',
justifyContent: 'center',
borderRadius: '100%',
transform: 'translate(-50%, -50%)'
}}>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 38.987,
      lng: -76.940972
    },
    zoom: 14
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '25vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyBVgHVcfpH9d701ClDVa33ZRZZhTGpFTfU'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          layerTypes={['TrafficLayer', 'TransitLayer']}
        >
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text={'University of Maryalnd'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;