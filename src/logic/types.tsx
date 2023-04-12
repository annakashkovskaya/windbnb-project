export type State = {
  location: string;
  guests: number;
};
export enum ActionKind {
  Location = "LOCATION",
  Guests = "GUESTS",
}

export type Action = {
  type: ActionKind;
  payload: number | string;
};
