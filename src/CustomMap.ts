export interface Place {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(id: string) {
    this.googleMap = new google.maps.Map(document.getElementById(id), { zoom: 2, center: { lat: 0, lng: 0 } });
  }

  addMarker(place: Place): void {
    const marker = new google.maps.Marker({ 
      map: this.googleMap, 
      position: { lat: place.location.lat, lng: place.location.lng } 
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({ content: place.markerContent() });
      infoWindow.open(this.googleMap, marker);
    });
  }

  addInfoWindow(content: string): google.maps.InfoWindow {
    return new google.maps.InfoWindow({ content });
  }
}