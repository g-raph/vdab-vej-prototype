import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import * as maplibregl from 'maplibre-gl';
import MaplibreDraw from 'maplibre-gl-draw';
// import overrides from '../../../assets/mapstyle.json';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { circle } from 'leaflet';



@Component({
  selector: 'app-mapgl',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './mapgl.component.html',
  styleUrl: './mapgl.component.scss'
})
export class MapglComponent implements OnInit {
  @ViewChild('map', { static: true }) mapElement!: ElementRef;

  map!: maplibregl.Map;
  currentOverrides: any = {};
  defaultOverrides: any = {};

  openStyleSettings = false;

  layerColors = {
    water: '#99ddff',
    roads_highway: '#ffffff',
    roads_major: '#ffffff',
    roads_minor: '#ffffff',
    landuse_park: '#b8ebad',
    pois: '#7e94a9'
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.map = new maplibregl.Map({
      container: 'map',
      style: 'https://api.protomaps.com/styles/v5/light/en.json?key=83eae6c2f59df427',
      center: [4.35, 50.84],
      zoom: 12
    });

    this.map.on('load', () => {
      const style = this.map.getStyle();
      console.log('All layers:', style.layers.map(layer => {return {id: layer.id, paint: layer.paint}}));
      this.http.get<any>('assets/mapstyle.json').subscribe(overrides => {
        this.defaultOverrides = JSON.parse(JSON.stringify(overrides)); // deep clone
        this.currentOverrides = JSON.parse(JSON.stringify(overrides));
        this.applyOverrides(this.currentOverrides);
      });
    });

    const markers = [
      {
        "id": 1,
        "name": "Vacature 1",
        "description": "Beschrijving van Job nr 1",
        "coordinates": [4.42, 50.8479]
      },
      {
        "id": 2,
        "name": "Vacature 2",
        "description": "Beschrijving van Job 2",
        "coordinates": [4.27, 50.84]
      }
    ];
    
    // Voeg de markers toe aan de kaart
    markers.forEach(marker => {
      const popup = new maplibregl.Popup({ offset: 25 }) // Popup-instellingen
        .setHTML(`
          <h3>${marker.name}</h3>
          <p>${marker.description}</p>
          <b>Locatie:</b><br>Lng: ${marker.coordinates[0].toFixed(4)}<br>Lat: ${marker.coordinates[1].toFixed(4)}
        `);
    
      new maplibregl.Marker()
          // @ts-ignore
        .setLngLat(marker.coordinates)  // Zet de marker op de juiste coördinaten
        .setPopup(popup)  // Koppel de popup aan de marker
        .addTo(this.map);  // Voeg de marker toe aan de kaart
    });

    // draw
    const draw = new (MaplibreDraw as any)({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        sphere: true,
        line_string: true,
        trash: true,
        point: true
      },
      styles: [
        {
          'id': 'gl-draw-polygon-fill',
          'type': 'fill',
          'paint': {
            'fill-color': '#ffff00', // Red color for polygons
            'fill-opacity': 0.4
          }
        },
        {
          'id': 'gl-draw-polygon-stroke',
          'type': 'line',
          'paint': {
            'line-color': '#ff0000', // Red stroke for polygons
            'line-width': 2
          }
        },
        {
          'id': 'gl-draw-line',
          'type': 'line',
          'paint': {
            'line-color': '#00ff00', // Green color for lines
            'line-width': 2
          }
        },
        {
          'id': 'gl-draw-point',
          'type': 'symbol',
          'layout': {
            'icon-image': 'marker-15'
          },
          'paint': {
            'icon-color': '#0000ff' // Blue color for points
          }
        }
      ]
    });

    this.map.addControl(draw);
    this.map.on('draw.create', (e) => {
      console.log('Nieuw object getekend:', e.features);
    });
    this.map.on('draw.create', (e) => {
      const data = draw.getAll();
      console.log('Created geometry:', data);
    });
    
    this.map.on('draw.update', (e) => {
      const data = draw.getAll();
      console.log('Updated geometry:', data);
    });
  }

  applyOverrides(overrides: any) {
    overrides.layers.forEach((layer: any) => {
      for (const [prop, val] of Object.entries(layer.paint)) {
        if (this.map.getLayer(layer.id)) {
          try {
            this.map.setPaintProperty(layer.id, prop, val);
          } catch (err) {
            console.warn(`Cannot apply ${prop} to ${layer.id}`, err);
          }
        }
      }
    });
  }

  updateLayerColor(layerId: string, paintProp: string, newColor: string) {
    if (this.map.getLayer(layerId)) {
      this.map.setPaintProperty(layerId, paintProp, newColor);

      const existing = this.currentOverrides.layers.find((l: any) => l.id === layerId);
      if (existing) {
        existing.paint[paintProp] = newColor;
      } else {
        this.currentOverrides.layers.push({
          id: layerId,
          paint: { [paintProp]: newColor }
        });
      }
    }
  }

  resetStyles() {
    this.currentOverrides = JSON.parse(JSON.stringify(this.defaultOverrides));
    this.applyOverrides(this.currentOverrides);

    // Also reset UI-bound colors
    for (const layer of this.defaultOverrides.layers) {
      if (layer.id === 'water') this.layerColors.water = layer.paint['fill-color'];
      if (layer.id === 'roads_highway') this.layerColors.roads_highway = layer.paint['line-color'];
      if (layer.id === 'roads_major') this.layerColors.roads_major = layer.paint['line-color'];
      if (layer.id === 'roads_minor') this.layerColors.roads_minor = layer.paint['line-color'];
      if (layer.id === 'landuse_park') this.layerColors.landuse_park = layer.paint['fill-color'];
      if (layer.id === 'pois') this.layerColors.pois = layer.paint['text-color'];
    }
  }

  saveStyles() {
    const blob = new Blob([JSON.stringify(this.currentOverrides, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'map-style-overrides.json';
    a.click();
  }

  toggleMapStyle() {
    this.openStyleSettings = !this.openStyleSettings;
  }

}
