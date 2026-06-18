import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LOCATIONS = [
    { name: "Industrial Zones", lat: 21.1245, lng: 72.8520 },
    { name: "LH Road", lat: 21.1850, lng: 72.8280 },
    { name: "Sahara Darwaja", lat: 21.1905, lng: 72.8446 },
    { name: "Dumbhal", lat: 21.2151, lng: 72.8590 },
    { name: "Parvat", lat: 21.2204, lng: 72.8275 },
    { name: "Kadodara", lat: 21.1234, lng: 72.9234 },
    { name: "Limbayat", lat: 21.1547, lng: 72.8425 },
    { name: "Godadara", lat: 21.1700, lng: 72.8650 },
    { name: "Pandesara", lat: 21.1456, lng: 72.8261 },
    { name: "Dindoli", lat: 21.1490, lng: 72.8650 },
    { name: "Udhana", lat: 21.1597, lng: 72.8400 },
    { name: "Ganeshpura", lat: 21.2050, lng: 72.8350 },
    { name: "Kosad", lat: 21.1300, lng: 72.8550 },
    { name: "Amroli", lat: 21.2273, lng: 72.8650 },
    { name: "Ved Road", lat: 21.2200, lng: 72.8500 },
    { name: "Chhaprabhatha", lat: 21.1850, lng: 72.9100 },
    { name: "Katargam", lat: 21.2150, lng: 72.8200 },
    { name: "Lal Darwaja", lat: 21.2050, lng: 72.8408 },
    { name: "Delhi Gate", lat: 21.1980, lng: 72.8330 },
    { name: "Mithi Khadi", lat: 21.1900, lng: 72.8450 },
  ];

export default function CoverageMap() {
  return (
    <div className="rounded-2xl overflow-hidden ring-1 ring-[#e7e1d4] h-[300px]">
      <MapContainer
       center={[21.18, 72.85]} 
       zoom={12}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap &copy; CARTO'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        {LOCATIONS.map((loc) => (
          <CircleMarker
            key={loc.name}
            center={[loc.lat, loc.lng]}
            radius={7}
            pathOptions={{ color: "#336d2a", fillColor: "#ea8a2e", fillOpacity: 0.9, weight: 2 }}
          >
            <Popup>
              <span style={{ fontWeight: 600, color: "#1a3812" }}>{loc.name}</span>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}