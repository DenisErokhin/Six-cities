import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';

import type {City, Location} from '../../types/types';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT } from '../../const';
import useMap from '../../hooks/useMap';

type MapProps = {
  city: City;
  locations: Location[];
  place?: 'cities' | 'property';
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map ({city, locations, place = 'cities'}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if(map) {
      locations.forEach(({latitude: lat, longitude: lng}) => {
        const marker = new Marker({
          lat,
          lng
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);
      });
    }

  }, [map, locations]);

  return <section className={`${place}__map map`} ref={mapRef} />;
}

export default Map;

