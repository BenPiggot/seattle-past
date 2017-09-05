import React, { Component }  from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class SeattleMap extends Component {
  constructor() {
    super()
    this.state = {
      lat: 47.6062,
      lng: -122.3321,
      zoom: 13
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map style={{height: '700px'}} center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default SeattleMap;