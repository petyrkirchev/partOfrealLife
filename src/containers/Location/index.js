/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Editable from '../../components/Editable';
import iconPin from '../../images/icon__pin.png';

const google = window.google;

class Location extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: props.address,
      position: props.position,
    };

    this.createMarker = this.createMarker.bind(this);
    this.getCurrentPosition = this.getCurrentPosition.bind(this);
    this.geocodeAddress = this.geocodeAddress.bind(this);
    this.onMarkerDragged = this.onMarkerDragged.bind(this);
    this.onAddressFieldBlur = this.onAddressFieldBlur.bind(this);
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapContainer, {
      center: this.state.position,
      zoom: 15,
    });
    this.geocoder = new google.maps.Geocoder;
    this.infoWindow = new google.maps.InfoWindow();

    if (navigator.geolocation) {
      if (!this.state.address || !this.state.position) {
        this.getCurrentPosition();
        return;
      }

      this.createMarker(this.state.position);
    } else {
      // Browser doesn't support Geolocation
      this.handleLocationError(false, this.infoWindow, this.map.getCenter());
    }
  }

  handleLocationError(browserHasGeolocation, infoWindow, pos) { // eslint-disable-line
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }

  createMarker(pos) {
    this.marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      icon: iconPin,
      draggable: true,
    });

    this.marker.setPosition(pos);

    google.maps.event.addListener(this.marker, 'dragend', this.onMarkerDragged);
  }

  getCurrentPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      this.geocoder.geocode({location: pos}, (results, status) => {
        if (status === 'OK') {
          if (results[1]) {
            this.map.setZoom(15);

            if (!this.marker) {
              this.createMarker(pos);
            }

            // Set address value to editable component state
            this.addressField.setValue(results[1].formatted_address);

            this.setState({
              address: results[1].formatted_address,
              position: pos,
            });
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      });

      this.infoWindow.setPosition(pos);
      this.map.setCenter(pos);
    }, () => {
      this.handleLocationError(true, this.infoWindow, this.map.getCenter());
    });
  }

  geocodeAddress(address, geocoder, resultsMap) {
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);

        const pos = results[0].geometry.location;

        if (!this.marker) {
          this.createMarker(pos);
        } else {
          this.marker.setPosition(pos);
        }

        this.setState({
          position: pos,
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  onMarkerDragged() {
    this.setState({
      position: {
        lat: this.marker.getPosition().lat(),
        lng: this.marker.getPosition().lng(),
      },
    });
  }

  onAddressFieldBlur(address) {
    this.geocodeAddress(address, this.geocoder, this.map);
  }

  renderField(children, onBlur, reference) {
    const { editable } = this.props;

    if (editable) {
      return (
        <Editable ref={(item) => { this[reference] = item; }} type="light" onBlur={onBlur}>
          { children }
        </Editable>
      );
    }

    return children;
  }

  render() {
    return (
      <div className="location">
        <div className="row">
          <div className="col-xs-12 col-md-7">
            <div className="location__content">
              <h4 className="location__content__title text--uppercase">Адрес на събитието</h4>
              <p className="location__content__address">{ this.renderField(this.state.address, this.onAddressFieldBlur, 'addressField') }</p>
              <p className="location__content__address">{ this.renderField('Hill tower business center, et. 3, Залата на Brain Trust') }</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-5">
            <div className="location__map" ref={(item) => { this.mapContainer = item; }} />
          </div>
        </div>
      </div>
    );
  }
}

Location.propTypes = {
  editable: PropTypes.bool,
  address: PropTypes.string,
  description: PropTypes.string,
  position: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
};

Location.defaultProps = {
  editable: false,
  address: '',
  description: '',
  position: {
    lat: -34.397, lng: 150.644,
  },
};

export default Location;
