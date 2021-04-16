import { createContext } from "react";
import { PedalInfo } from "./pedalInfo";

export const PedalContext = createContext({
    list: [] as PedalInfo[],

});