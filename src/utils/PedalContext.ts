import { createContext } from "react";
import { PedalInfo } from "./pedalInfo";

export const PedalContext = createContext({
    pedalsOnBoard: [] as PedalInfo[],
    pedalsOnStock: [] as PedalInfo[],
    handleToStock: (id: number) => {

    },

    handleToBoard: (id: number) => {

    },
});