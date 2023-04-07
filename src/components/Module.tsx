import "../styles/module.css";
import { AiFillStar } from "react-icons/ai";
type Props = {
  img: string;
  superHost: boolean;
  type: string;
  rating: number;
  key: number;
};

const Module = ({ img, superHost, type, rating, key }: Props): JSX.Element => {
  return (
    <div className="module-content">
      <div className="module-content_image">
        <img src={img} />
      </div>
      <div className="module-content_info">
        {superHost && (
          <div className="module-content_info-super">
            <p>super host</p>
          </div>
        )}
        <div className="module-content_info-type">{type}</div>
        <div className="module-content_info-rating">
          <span>
            <AiFillStar />
          </span>
          <p>{rating}</p>
        </div>
      </div>
      <div className="module-content_description"></div>
    </div>
  );
};

export default Module;
