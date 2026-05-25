import { useNavigate } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import type { LeafletMouseEvent } from "leaflet";
import { useGeolocation } from "../hooks/useGeolocation";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Button from "./Button";
import styles from "./Map.module.css";
import useCities from "../features/cities/useCities";

function Map() {
  const { cities } = useCities();
  // custom hook to get url params
  const [mapLat, mapLng] = useUrlPosition();
  // custom hook to get my position
  const {
    position: geolocationPosition,
    isLoading: isLoadingPosition,
    getPosition,
  } = useGeolocation();
  // syncronization 2 and 2
  const mapPosition: [number, number] = geolocationPosition
    ? [geolocationPosition?.lat, geolocationPosition?.lng]
    : mapLat != null && mapLng != null
      ? [Number(mapLat), Number(mapLng)]
      : [40, 0];

  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading..." : "Use your position"}
        </Button>
      )}
      <MapContainer
        className={styles.map}
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {cities?.map((city) => (
          <Marker key={city.id} position={[city.lat, city.lng]}>
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        {/* because attr center alone is not syncronous */}
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }: { position: [number, number] }) {
  const map = useMap(); // instance of the map
  map.setView(position, 6);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  // change url => change lat,lng => change center
  useMapEvent("click", (e: LeafletMouseEvent) => {
    navigate(`/form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
  });

  return null;
}

export default Map;
