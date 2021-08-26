# react-leaflet-vector-tile-layer

Vector tile layer for React Leaflet V3. Tested with both [Mapbox](https://mapbox.com) and [Maptiler](https://maptiler.com) vector tiles. Also works in conjunction with [React Leaflet Layers Control](https://react-leaflet.js.org/docs/example-layers-control).

## Mapbox

```
import { MapContainer } from 'react-leaflet';
import VectorTileLayer from 'react-leaflet-vector-tile-layer';

const App = () => {
  <MapContainer center={[47.5415, -122.393]} zoom={10} style={{ height: '100%' }}>
    <VectorTileLayer
      styleUrl="mapbox://styles/customstyles/ckpslkwor05q318mzmetjbv5z"
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
      styleUrl="https://api.maptiler.com/maps/outdoor/style.json?key=XXXX"
    />
  </MapContainer>
}
```

## Sponsors

[shademap.app](https://shademap.app) - Shadows cast across a map of the Earth in real-time
