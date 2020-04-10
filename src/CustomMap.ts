interface Place {
  description: string;
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(id: string) {
    this.googleMap = new google.maps.Map(document.getElementById(id), { zoom: 2, center: { lat: 0, lng: 0 } });
  }

  addMarker(place: Place): void {
    new google.maps.Marker({ 
      map: this.googleMap, 
      position: { lat: place.location.lat, lng: place.location.lng } 
    });
  }

  addInfoWindow(content: string): google.maps.InfoWindow {
    return new google.maps.InfoWindow({ content });
  }
}