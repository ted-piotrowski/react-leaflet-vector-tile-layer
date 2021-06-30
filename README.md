# react-leaflet-vector-tile-layer

Vector tile layer for React Leaflet V3. Tested with both mapbox and maptiler vector tiles.

## Mapbox

```
const App = () => {
  <MapContainer center={position} zoom={13}>
    <VectorTileLayer
      style="mapbox://styles/customstyles/ckpslkwor05q318mzmetjbv5z"
      accessToken="XXXX"
    />
  </MapContainer>
}
```

## Maptiler

```
const App = () => {
  <MapContainer center={position} zoom={13}>
    <VectorTileLayer
      style="https://api.maptiler.com/maps/outdoor/style.json?key=XXXX"
    />
  </MapContainer>
}
```