import "../styles/nav.css";
import Location from "../subcomponents/Location";
import Guests from "../subcomponents/Guests";
import { AiOutlineSearch } from "react-icons/ai";
import { useState, Dispatch, SetStateAction } from "react";
import { Action, ActionKind } from "../logic/types";

type Props = {
  setHeader: Dispatch<SetStateAction<boolean>>;
  dispatch: Dispatch<Action>;
};
const Nav = ({ setHeader, dispatch }: Props): JSX.Element => {
  const [location, setLocation] = useState<string>("Helsinki");
  const [guests, setGuests] = useState(0);
  return (
    <div className="nav-content">
      <div className="nav-content_info">
        <div className="nav-content_info-location">
          <Location location={location} setLocation={setLocation} />
        </div>
        <div className="nav-content_info-guests">
          <Guests guests={guests} setGuests={setGuests} />
        </div>
        <div
          className="nav-content_info-search"
          onClick={() => {
            dispatch({ type: ActionKind.Guests, payload: guests });
            dispatch({ type: ActionKind.Location, payload: location });
            setHeader(true);
          }}
        >
          <div>
            <AiOutlineSearch />
          </div>
          <p>search</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
