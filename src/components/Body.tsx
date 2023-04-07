import "../styles/body.css";
import Module from "./Module";
import stays from "../logic/stays.json";

const Body = (): JSX.Element => {
  return (
    <div className="body-content">
      <div className="body-content_title">
        <h2>Stays in Finland</h2>
        <p>8+ stays</p>
      </div>
      <div className="body-content_options">
        {stays.slice(0, 6).map((stay, i) => {
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
