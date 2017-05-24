import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
destination: any = '';
myLocation: any;

  constructor(public navCtrl: NavController) {
  }

      calculateAndDisplayRoute() 
      {
        let that = this;
        let directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer;
        const map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: {lat: -33.97, lng: 151.15}
        });
        directionsDisplay.setMap(map);
        
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            map.setCenter(pos);
            this.myLocation = new google.maps.LatLong(pos);
          }, function() {
          });
        } else {
          // Browser doesn't support Geolocation    
        }


        directionsService.route({
          origin: this.myLocation,
          destination: this.destination,
          travelMode: 'DRIVING'}, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }
}
