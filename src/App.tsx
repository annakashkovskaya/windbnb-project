import { useState, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Body from "./components/Body";
import { State, ActionKind, Action } from "./logic/types";

function App() {
  const initialState: State = { location: "", guests: 0 };
  function myReducer(state: State, action: Action): State {
    const { type, payload } = action;
    switch (type) {
      case ActionKind.Location:
        return { ...state, location: payload as string };
      case ActionKind.Guests:
        return { ...state, guests: payload as number };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(myReducer, initialState);
  const [header, setHeader] = useState(true);
  const showNav = () => {
    setHeader(false);
  };
  const hideNav = () => {
    setHeader(true);
  };
  return (
    <div>
      {header ? (
        <Header showNav={showNav} state={state} />
      ) : (
        <Nav setHeader={setHeader} dispatch={dispatch} />
      )}
      {header ? (
        <Body hideNav={hideNav} state={state} color={100} />
      ) : (
        <Body color={50} hideNav={hideNav} state={state} />
      )}
    </div>
  );
}

export default App;
