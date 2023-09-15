/*global google */
import { useEffect, useMemo, useState } from "react";
import { GoogleMap, MarkerF, CircleF, useLoadScript } from "@react-google-maps/api";
import { places } from "../../data/places";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest.js";
// eslint-disable-next-line react/prop-types
function CategoryFilter({ onSelectCategory }) {
  const uniqueCategories = [...new Set(places.map((place) => place.category))];

  return (
    <div className="p-2 bg-white rounded shadow">
      <select onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="">All</option>
        {uniqueCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
const Location = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"))
  const { isLoading, error, data } = useQuery({
    queryKey: ["markers"],
    queryFn: () =>
      newRequest.get(`incidents`).then((res) => {
        return res.data;
      }),
  });

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState("Loading...");


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setStatus(null);
          setLat(pos.coords.latitude);
          setLng(pos.coords.longitude);
        },
        () => setStatus("Unable to retrieve Location")
      );
    } else {
      setStatus("Not Supported");
    }
  }, []);
  const center = useMemo(() => ({ lat, lng }), [lat, lng]);

  const options = useMemo(() => ({
    mapId: "2d3fe941ae7149b5",
    disableDefaultUI: true,
    clickableIcons: false,
  }), [])

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });

  // const onLoad = useCallback((map) => (map.current = map), [])
  const onLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    places.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);

  };
  const [selectedCategory, setSelectedCategory] = useState("");
  const filteredPlaces = selectedCategory
    ? places.filter(place => place.category === selectedCategory)
    : places;

  return (
    <div className="flex w-full min-h-screen bg-blue-200">
      {/* Sidebar */}
      {/* <div className="flex px-2 flex-[0.1] flex-col gap-2 bg-blue-800">
        <p className="text-white">Latitude: {lat}</p>
        <p className="text-white">Longitude: {lng}</p>
        <div>
          <input className="p-1 rounded-lg" type="text" placeholder="Search Place" />
        </div>
      </div> */}
      {/* map */}
      <div className="flex flex-1 bg-white">
        
        {!isLoaded ? (
          <h1>{status}</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="w-full h-full"
            options={options}
            center={center}
            zoom={8}
            onLoad={onLoad}
          >
            <MarkerF
              position={center}
              icon={"http://maps.google.com/mapfiles/ms/micons/man.png"}
            />

            <CircleF radius={1500} center={center} options={{
              strokeOpacity: 0.5,
              fillOpacity: 0.2,
              fillColor: "red",
              strokeWeight: 2,
              clickable: false,
              draggable: false,
              editable: false,
              visible: true,
              strokeColor: "red"
            }} />
            
            {!isLoading && !error && data && data.length > 0 && (
              data
                .filter((incident) =>
                  selectedCategory ? incident.category === selectedCategory : true
                )
                .map((incident) => (
                  <MarkerF
                    key={incident._id}
                    position={{
                      lat: incident.latitude,
                      lng: incident.longitude,
                    }}
                    icon={{ url: incident.icon }}
                  />
                ))
            )}
          </GoogleMap>
        )}
      </div>
      <div className="fixed top-20 right-4 z-[150]">
          <CategoryFilter onSelectCategory={setSelectedCategory} />
        </div>
    </div>
  )
}

export default Location