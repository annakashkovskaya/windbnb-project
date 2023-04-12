import { Dispatch, useState, SetStateAction } from "react";
import "../styles/guests.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type PropsCounter = {
  group: string;
  age: string;
  guests: number;
  setGuests: Dispatch<SetStateAction<number>>;
};

type PropsGuests = {
  guests: number;
  setGuests: Dispatch<SetStateAction<number>>;
};
const Counter = ({
  group,
  age,
  guests,
  setGuests,
}: PropsCounter): JSX.Element => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-content">
      <div className="counter-content_age">
        <h4>{group}</h4>
        <p>{age}</p>
      </div>
      <div className="counter-content_buttons">
        <button
          className="btn-decrease"
          onClick={() => {
            setCount(count - 1);
            setGuests(guests - 1);
          }}
        >
          <AiOutlineMinus />
        </button>
        <div>{count >= 0 ? count : 0}</div>
        <button
          className="btn-increase"
          onClick={() => {
            setCount(count + 1);
            setGuests(guests + 1);
          }}
        >
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

const Guests = ({ guests, setGuests }: PropsGuests): JSX.Element => {
  const [counters, setCounters] = useState(false);
  const switchCounters = () => {
    setCounters(!counters);
  };
  return (
    <div className="guests-content">
      <div className="guests-content_header">
        <p>Guests</p>
        <input
          onClick={switchCounters}
          placeholder="0"
          type="text"
          value={guests}
          onChange={(e) => setGuests(+e.currentTarget.value)}
        />
      </div>
      {counters && (
        <div className="guests-content_counters">
          <Counter
            group="Adults"
            age="Ages 13 or above"
            guests={guests}
            setGuests={setGuests}
          />
          <Counter
            group="Children"
            age="Ages 2-12 "
            guests={guests}
            setGuests={setGuests}
          />
        </div>
      )}
    </div>
  );
};

export default Guests;
