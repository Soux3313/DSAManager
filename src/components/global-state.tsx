import {createContext, ReactNode, useContext, useState} from "react";

interface GlobalState {
    MU: number;
    KL: number;
    IN: number;
    CH: number;
    FF: number;
    GE: number;
    KO: number;
    KK: number;
    HP: number;
    AE: number;
    KE: number;
    dukaten: number;
    silver: number;
    heller: number;
    copper: number;

}

const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
    const [MU, setMU] = useState(10);
    const [KL, setKL] = useState(10);
    const [IN, setIN] = useState(10);
    const [CH, setCH] = useState(10);
    const [FF, setFF] = useState(10);
    const [GE, setGE] = useState(10);
    const [KO, setKO] = useState(10);
    const [KK, setKK] = useState(10);
    const [HP, setHP] = useState(10);
    const [AE, setAE] = useState(10);
    const [KE, setKE] = useState(10);
    const [dukaten, setDukaten] = useState(0);
    const [silver, setSilver] = useState(0);
    const [heller, setHeller] = useState(0);
    const [copper, setCopper] = useState(0);




    return (
        <GlobalStateContext.Provider value={{MU, KL, IN, CH, FF, GE, KO, KK, HP, AE, KE, dukaten, silver, heller, copper
        }}>
            {children}
        </GlobalStateContext.Provider>
    );
}

export const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error("useGlobalState must be used within a GlobalStateProvider");
    }
    return context;
};