import "../styles/body.css";
import Module from "./Module";
import stays from "../logic/stays.json";
import { State } from "../logic/types";

const Body = ({
  hideNav,
  state,
  color,
}: {
  hideNav: () => void;
  state: State;
  color: number;
}): JSX.Element => {
  let filteredStays = [];
  filteredStays = stays.filter((stay) => {
    return stay.city === state.location && stay.maxGuests >= state.guests;
  });
  return (
    <div
      className="body-content"
      onClick={hideNav}
      style={{ filter: `brightness(${color}%)` }}
    >
      <div className="body-content_title">
        <h2>Stays in Finland</h2>
        <p>{filteredStays.length} stays</p>
      </div>
      <div className="body-content_options">
        {filteredStays.map((stay, i) => {
          return (
            <Module
              key={i}
              img={stay.photo}
              superHost={stay.superHost}
              type={stay.type}
              rating={stay.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
