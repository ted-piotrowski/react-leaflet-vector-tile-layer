# react-leaflet-vector-tile-layer

Vector tile layer for React Leaflet V3. This is a wrapper around [@maplibre/maplibre-gl-leaflet](https://www.npmjs.com/package/@maplibre/maplibre-gl-leaflet). Tested with both [Mapbox](https://mapbox.com), [Maptiler](https://maptiler.com) and self hosted vector tiles.

Vector tile layer can be nested inside [React Leaflet Layers Control](https://react-leaflet.js.org/docs/example-layers-control).

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

[shademap.app](https://shademap.app) - Year-round world map of sun and shadow

