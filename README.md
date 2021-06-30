# react-leaflet-vector-tile-layer

Vector tile layer for React Leaflet V3. Tested with both mapbox and maptiler vector tiles.

## Mapbox

```
import { MapContainer } from 'react-leaflet';
import VectorTileLayer from 'react-leaflet-vector-tile-layer';

const App = () => {
  <MapContainer center={[47.5415, -122.393]} zoom={10} style={{ height: '100%' }}>
    <VectorTileLayer
      style="mapbox://styles/customstyles/ckpslkwor05q318mzmetjbv5z"
      accessToken="XXXX"
    />
  </MapContainer>
}
```

## Maptiler

```
import { MapContainer } from 'react-leaflet';
import VectorTileLayer from 'react-leaflet-vector-tile-layer';

const App = () => {
  <MapContainer center={position} zoom={13}>
    <VectorTileLayer
      style="https://api.maptiler.com/maps/outdoor/style.json?key=XXXX"
    />
  </MapContainer>
}
```