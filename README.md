# react-leaflet-vector-tile-layer

Vector tile layer for React Leaflet V3. This is a wrapper around [@maplibre/maplibre-gl-leaflet](https://www.npmjs.com/package/@maplibre/maplibre-gl-leaflet). Tested with both [Mapbox](https://mapbox.com), [Maptiler](https://maptiler.com) and self hosted vector tiles.

Vector tile layer can be nested inside [React Leaflet Layers Control](https://react-leaflet.js.org/docs/example-layers-control).

## Mapbox

```
import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import VectorTileLayer from "react-leaflet-vector-tile-layer";

function App() {
  return (
    <MapContainer center={[50.5, 30.5]} zoom={3} style={{ height: "100vh" }}>
      <VectorTileLayer
        styleUrl="mapbox://styles/customstyles/ckpslkwor05q318mzmetjbv5z"
        accessToken="XXXX"
      />
    </MapContainer>
  );
}

export default App;
```

## Maptiler

```
import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import VectorTileLayer from "react-leaflet-vector-tile-layer";

function App() {
  return (
    <MapContainer center={[50.5, 30.5]} zoom={3} style={{ height: "100vh" }}>
      <VectorTileLayer
        styleUrl="https://demotiles.maplibre.org/style.json"
      />
    </MapContainer>
  );
}

export default App;
```

## Sponsors

[shademap.app](https://shademap.app) - Year-round world map of sun and shadow

