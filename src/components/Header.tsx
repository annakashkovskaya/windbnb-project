import "../styles/header.css";
import { BsFillTriangleFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const Header = (): JSX.Element => {
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
      <div className="header-content_nav">
        <div className="header-content_nav-place">
          <p>Helsinki,Finland</p>
        </div>
        <div className="line"></div>
        <div className="header-content_nav-guests">
          <p>Add guests</p>
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
