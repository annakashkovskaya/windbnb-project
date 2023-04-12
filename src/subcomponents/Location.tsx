import { FaMapMarkerAlt } from "react-icons/fa";
import stays from "../logic/stays.json";
import "../styles/location.css";
import { useState, Dispatch, SetStateAction } from "react";

type Props = {
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
};
const Location = ({ location, setLocation }: Props): JSX.Element => {
  const cities: string[] = stays.map((stay) => stay.city);
  const result: string[] = cities.filter(
    (city, index) => cities.indexOf(city) === index
  );
  const [showOptions, setShowOptions] = useState(false);
  const hideCities = () => {
    setShowOptions(false);
  };
  const showCities = () => {
    setShowOptions(true);
  };

  return (
    <div className="nav-content_info-location">
      <div className="nav-content_info-location_header">
        <p>Location</p>
        <input
          onClick={showCities}
          placeholder="Helsinki,Finland"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      {showOptions && (
        <div onClick={hideCities}>
          <div className="nav-content_info-location_list">
            {result.map((city, i) => {
              return (
                <div
                  className="nav-content_info-location_list-item"
                  key={i}
                  onClick={() => {
                    setLocation(city);
                  }}
                >
                  <div>
                    <FaMapMarkerAlt />
                  </div>
                  <p>{city}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;
