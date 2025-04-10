import { Dispatch, SetStateAction } from "react";

export interface MessageContextInterface {
  message: string;
  changeMessage: (() => void) | Dispatch<SetStateAction<string>>;
}
