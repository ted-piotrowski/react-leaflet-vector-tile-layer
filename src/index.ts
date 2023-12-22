import _maplibreGL from '@maplibre/maplibre-gl-leaflet';
import {
    createTileLayerComponent, LayerProps, updateGridLayer
} from '@react-leaflet/core';
import L, { TileLayer as LeafletTileLayer, TileLayerOptions } from 'leaflet';

export interface VectorTileLayerProps extends TileLayerOptions, LayerProps {
    styleUrl: string
}

const VectorTileLayer = createTileLayerComponent<
    LeafletTileLayer,
    VectorTileLayerProps
>(function createTileLayer({ styleUrl, ...options }, context) {
    return {
        instance: new (L as any).maplibreGL({ style: styleUrl, ...options }),
        context,
    }
}, updateGridLayer)

export default VectorTileLayer;
