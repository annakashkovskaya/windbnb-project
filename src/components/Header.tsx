import "../styles/header.css";
import { BsFillTriangleFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { State } from "../logic/types";

const Header = ({
  showNav,
  state,
}: {
  showNav: () => void;
  state: State;
}): JSX.Element => {
  return (
    <div className="header-content">
      <div className="header-content_logo">
        <div className="header-content_logo-picture">
          <BsFillTriangleFill />
        </div>
        <div className="header-content_logo-title">
          <p>windbnb</p>
        </div>
      </div>
      <div className="header-content_nav" onClick={showNav}>
        <div className="header-content_nav-place">
          <p>{state.location},Finland</p>
        </div>
        <div className="line"></div>
        <div className="header-content_nav-guests">
          {state.guests > 1 ? (
            <p>{state.guests} guests </p>
          ) : (
            <p>{state.guests} guest</p>
          )}
        </div>
        <div className="line"></div>
        <div className="header-content_nav-search">
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
};

export default Header;
