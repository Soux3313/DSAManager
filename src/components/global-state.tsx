import {createContext, ReactNode, useContext, useState} from "react";

interface GlobalState {
    MU: number;
    setMU: (value: number) => void;

    KL: number;
    setKL: (value: number) => void;

    IN: number;
    setIN: (value: number) => void;

    CH: number;
    setCH: (value: number) => void;

    FF: number;
    setFF: (value: number) => void;

    GE: number;
    setGE: (value: number) => void;

    KO: number;
    setKO: (value: number) => void;

    KK: number;
    setKK: (value: number) => void;

    maxHP: number;
    setMaxHP: (value: number) => void;

    HP: number;
    setHP: (value: number) => void;

    maxAK: number;
    setMaxAK: (value: number) => void;

    AK: number;
    setAK: (value: number) => void;

    dukaten: number;
    setDukaten: (value: number) => void;

    silver: number;
    setSilver: (value: number) => void;

    heller: number;
    setHeller: (value: number) => void;

    copper: number;
    setCopper: (value: number) => void;
    pain: number;
    addPain: () => void;
    removePain: () => void;
}


const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
    const getStoredValue = (key: string, defaultValue: number) => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : defaultValue;
    };

    const [MU, setMU] = useState(getStoredValue('MU', 10));
    const [KL, setKL] = useState(getStoredValue('KL', 10));
    const [IN, setIN] = useState(getStoredValue('IN', 10));
    const [CH, setCH] = useState(getStoredValue('CH', 10));
    const [FF, setFF] = useState(getStoredValue('FF', 10));
    const [GE, setGE] = useState(getStoredValue('GE', 10));
    const [KO, setKO] = useState(getStoredValue('KO', 10));
    const [KK, setKK] = useState(getStoredValue('KK', 10));
    const [maxHP, setMaxHP] = useState(getStoredValue('maxHP', 30));
    const [HP, setHP] = useState(getStoredValue('HP', 30));
    const [maxAK, setMaxAK] = useState(getStoredValue('maxAK', 20));
    const [AK, setAK] = useState(getStoredValue('AK', 20));
    const [dukaten, setDukaten] = useState(getStoredValue('dukaten', 0));
    const [silver, setSilver] = useState(getStoredValue('silver', 0));
    const [heller, setHeller] = useState(getStoredValue('heller', 0));
    const [copper, setCopper] = useState(getStoredValue('copper', 0));

    const [pain, setPain] = useState(getStoredValue('pain', 0));

    const [globalMod, setGlobalMod] = useState(getStoredValue('globalmod', 0));

    // Helper function to save values in localStorage and update state
    const saveToLocalStorage = (key: string, value: number) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    // Shortened setter functions
    const setValue = (key: string, setter: React.Dispatch<React.SetStateAction<number>>) => (value: number) => {
        setter(value);
        saveToLocalStorage(key, value);
    };

    const setMUVal = setValue('MU', setMU);
    const setKLVal = setValue('KL', setKL);
    const setINVal = setValue('IN', setIN);
    const setCHVal = setValue('CH', setCH);
    const setFFVal = setValue('FF', setFF);
    const setGEVal = setValue('GE', setGE);
    const setKOVal = setValue('KO', setKO);
    const setKKVal = setValue('KK', setKK);
    const setMaxHPVal = setValue('maxHP', setMaxHP);
    const setHPVal = setValue('HP', setHP);
    const setMaxAKVal = setValue('maxAK', setMaxAK);
    const setAKVal = setValue('AK', setAK);
    const setDukatenVal = setValue('dukaten', setDukaten);
    const setSilverVal = setValue('silver', setSilver);
    const setHellerVal = setValue('heller', setHeller);
    const setCopperVal = setValue('copper', setCopper);
    const setPainVal = setValue('pain', setPain);
    const addPain =()  =>
    {
        setPainVal(pain+1);
    }
    const removePain = () =>
    {
        setPainVal(pain-1)
    }

    const setGlobalModVal = setValue('globalmod', setGlobalMod);

    const addMod =()  =>
    {
        setGlobalModVal(globalMod+1);
    }
    const removeMod = () =>
    {
        setGlobalModVal(globalMod-1)
    }


    return (
        <GlobalStateContext.Provider value={{
            MU, setMU: setMUVal,
            KL, setKL: setKLVal,
            IN, setIN: setINVal,
            CH, setCH: setCHVal,
            FF, setFF: setFFVal,
            GE, setGE: setGEVal,
            KO, setKO: setKOVal,
            KK, setKK: setKKVal,
            maxHP, setMaxHP: setMaxHPVal,
            HP, setHP: setHPVal,
            maxAK, setMaxAK: setMaxAKVal,
            AK, setAK: setAKVal,
            dukaten, setDukaten: setDukatenVal,
            silver, setSilver: setSilverVal,
            heller, setHeller: setHellerVal,
            copper, setCopper: setCopperVal,
            pain, addPain, removePain
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