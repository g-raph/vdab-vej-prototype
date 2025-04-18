import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-draw';
import { MAP_CONFIG } from './map-config';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit {
  map: any;

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);  // Set initial map coordinates and zoom level

    // Add CartoDB Light Tile Layer (for base map)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap & CartoDB'
    }).addTo(this.map);

    // Add vector layers (GeoJSON for highways, water, etc.)
    this.addCustomLayers();
  }

  addCustomLayers(): void {
    // Example: GeoJSON for highways (just a sample)
    const highwaysGeoJSON: GeoJSON.FeatureCollection<GeoJSON.LineString> = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [
              [-0.09, 51.505],
              [-0.08, 51.505],
              [-0.07, 51.505],
            ],
          },
          properties: {
            name: "Example Highway",
          },
        },
      ],
    };

    // Example: GeoJSON for water bodies (just a sample)
    const waterGeoJSON: GeoJSON.FeatureCollection<GeoJSON.Polygon> = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [[
              [-0.09, 51.507],
              [-0.08, 51.507],
              [-0.08, 51.506],
              [-0.09, 51.506],
              [-0.09, 51.507] // must close the ring
            ]]
          },
          properties: {
            name: "Sample Water Body"
          }
        }
      ]
    };

    const forestGeoJSON: GeoJSON.FeatureCollection<GeoJSON.Polygon> = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [[
              [-0.091, 51.507],
              [-0.089, 51.507],
              [-0.089, 51.506],
              [-0.091, 51.506],
              [-0.091, 51.507]
            ]]
          },
          properties: {
            name: "Example Forest"
          }
        }
      ]
    };

    // Add highways (styled in purple) to the map
    L.geoJSON(highwaysGeoJSON, {
      style: function (feature) {
        return {
          color: 'purple',   // Set highway color to purple
          weight: 5,          // Set line thickness for highways
          opacity: 1          // Set line opacity
        };
      }
    }).addTo(this.map);

    // Add water bodies (styled in blue) to the map
    L.geoJSON(waterGeoJSON, {
      style: function (feature) {
        return {
          color: 'blue',      // Set water color to blue
          weight: 2,          // Set line thickness
          opacity: 0.5,       // Set opacity for water areas
          fillOpacity: 0.3    // Set fill opacity for water areas
        };
      }
    }).addTo(this.map);
    
    L.geoJSON(forestGeoJSON, {
      style: function (feature) {
        return {
          color: 'blue',      // Set water color to blue
          weight: 2,          // Set line thickness
          opacity: 0.5,       // Set opacity for water areas
          fillOpacity: 0.3    // Set fill opacity for water areas
        };
      }
    }).addTo(this.map);

    // You can add more vector layers for other elements like forests, roads, etc.
  }
}