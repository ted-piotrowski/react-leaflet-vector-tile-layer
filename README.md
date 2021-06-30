# react-leaflet-canvas-overlay

![react-leaflet-canvas-overlay in practice](https://shademap.app/og-image.jpg)

**Demo:** [https://shademap.app](https://shademap.app)

React Leaflet component similar to ImageOverlay and VideoOverlay

```
const canvas = document.createElement('canvas');
const p1 = L.point(10, 10);
const p2 = L.point(40, 60);
const bounds = L.bounds(p1, p2);

const App = () => {
  <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <CanvasOverlay
        canvas={canvas}
        bounds={bounds}
        width={300}
        height={300} 
    />
  </MapContainer>
}
```
