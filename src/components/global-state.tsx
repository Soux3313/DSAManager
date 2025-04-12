import {createContext, ReactNode, useContext, useState, useRef, useEffect, useCallback} from "react";
import { SvgIconComponent } from '@mui/icons-material';
import Anonymous from '@mui/icons-material/VisibilityOff';
import Lust from '@mui/icons-material/VolunteerActivism';
import Burden from '@mui/icons-material/Hiking';
import Drunk from '@mui/icons-material/Liquor';
import Stunned from '@mui/icons-material/SportsHandball';
import ChurchIcon from '@mui/icons-material/Church';
import Scared from '@mui/icons-material/MoodBad';
import BoltIcon from '@mui/icons-material/Bolt';
import HealingIcon from '@mui/icons-material/Healing';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import Kick from '@mui/icons-material/SportsMartialArts';
import Confusion from '@mui/icons-material/PsychologyAlt';

enum Stage {
    none,
    one,
    two,
    three,
    four,
}

// Create a map of icon names to icon components
const iconMap: Record<string, SvgIconComponent> = {
    'Anonymous': Anonymous,
    'Lust': Lust,
    'Burden': Burden,
    'Drunk': Drunk,
    'Stunned': Stunned,
    'ChurchIcon': ChurchIcon,
    'Scared': Scared,
    'BoltIcon': BoltIcon,
    'HealingIcon': HealingIcon,
    'BedtimeIcon': BedtimeIcon,
    'Kick': Kick,
    'Confusion': Confusion,
};

// Modified Effect type - store icon name instead of component
type Effect = {
    id: number;
    name: string;
    stage: Stage;
    iconName: string; // Store the name of the icon, not the component itself
};

// Extended Effect type for internal use that includes the icon component
type EffectWithIcon = Effect & {
    icon: SvgIconComponent;
};

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

    effects: EffectWithIcon[]; // Use the extended type that includes icons
    setEffects: React.Dispatch<React.SetStateAction<EffectWithIcon[]>>;
}

const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

// Debounce function to delay localStorage updates
const useDebounce = (fn: Function, delay: number) => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    return useCallback((...args: any[]) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            fn(...args);
        }, delay);
    }, [fn, delay]);
};

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
    // Safely get stored value with error handling
    const getStoredValue = (key: string, defaultValue: any) => {
        try {
            const storedValue = localStorage.getItem(key);
            if (storedValue === null) {
                return defaultValue;
            }
            return JSON.parse(storedValue);
        } catch (error) {
            console.error(`Error parsing stored value for ${key}:`, error);
            return defaultValue;
        }
    };

    // Standard numeric state values with their setters
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

    // Define the default effects array (with icon names instead of components)
    const effectsOpt: Effect[] = [
        {id: 0, name: 'Animosität', stage: Stage.none, iconName: 'Anonymous'},
        {id: 1, name: 'Begehren', stage: Stage.none, iconName: 'Lust'},
        {id: 2, name: 'Belastung', stage: Stage.none, iconName: 'Burden'},
        {id: 3, name: 'Berauscht', stage: Stage.none, iconName: 'Drunk'},
        {id: 4, name: 'Betäubung', stage: Stage.none, iconName: 'Stunned'},
        {id: 5, name: 'Entrückung', stage: Stage.none, iconName: 'ChurchIcon'},
        {id: 6, name: 'Furcht', stage: Stage.none, iconName: 'Scared'},
        {id: 7, name: 'Paralyse', stage: Stage.none, iconName: 'BoltIcon'},
        {id: 8, name: 'Schmerz', stage: Stage.none, iconName: 'HealingIcon'},
        {id: 9, name: 'Trance', stage: Stage.none, iconName: 'BedtimeIcon'},
        {id: 10, name: 'Überanstrengung', stage: Stage.none, iconName: 'Kick'},
        {id: 11, name: 'Verwirrung', stage: Stage.none, iconName: 'Confusion'},
    ];

    // Function to add icon components to effects from storage
    const addIconsToEffects = (effects: Effect[]): EffectWithIcon[] => {
        return effects.map(effect => ({
            ...effect,
            icon: iconMap[effect.iconName] || Anonymous // Fallback to Anonymous if icon not found
        }));
    };

    // Use the default effects array if nothing is stored
    const [effects, setEffectsState] = useState<EffectWithIcon[]>(() => {
        try {
            const stored = getStoredValue('effects', null);

            if (stored !== null) {
                // This is where we handle existing stored effects that might not have iconName
                const validatedEffects = stored.map((effect: any, index: number) => {
                    // If the effect has an iconName property, use it
                    if (effect.iconName && iconMap[effect.iconName]) {
                        return {
                            id: effect.id !== undefined ? effect.id : index,
                            name: effect.name || 'Unknown',
                            stage: effect.stage !== undefined ? effect.stage : Stage.none,
                            iconName: effect.iconName
                        };
                    }

                    // Otherwise, use the default effect for this index or create a placeholder
                    const defaultEffect = effectsOpt[index] || {
                        id: index,
                        name: 'Unknown',
                        stage: Stage.none,
                        iconName: 'Anonymous'
                    };

                    return {
                        ...defaultEffect,
                        // Preserve the stage if it exists
                        stage: effect.stage !== undefined ? effect.stage : defaultEffect.stage
                    };
                });

                return addIconsToEffects(validatedEffects);
            }
            return addIconsToEffects(effectsOpt);
        } catch (error) {
            console.error('Error loading effects:', error);
            return addIconsToEffects(effectsOpt);
        }
    });

    const [globalMod, setGlobalMod] = useState(getStoredValue('globalmod', 0));

    // Helper function for localStorage saving with error handling
    const saveToLocalStorage = (key: string, value: any) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Error saving to localStorage for key ${key}:`, error);
        }
    };

    // Prepare effects for storage by removing icon components
    const prepareEffectsForStorage = (effects: EffectWithIcon[]): Effect[] => {
        return effects.map(({ icon, ...rest }) => rest);
    };

    // Create a debounced version of the save function for effects
    const debouncedSaveEffects = useDebounce((value: EffectWithIcon[]) => {
        const storageEffects = prepareEffectsForStorage(value);
        saveToLocalStorage('effects', storageEffects);
    }, 300); // 300ms debounce

    // Wrapper for setEffectsState that manages the icon components
    const setEffects = useCallback((action: React.SetStateAction<EffectWithIcon[]>) => {
        setEffectsState(prevEffects => {
            // Handle the functional update case
            const newEffects = typeof action === 'function'
                ? action(prevEffects)
                : action;

            // Schedule saving to localStorage
            debouncedSaveEffects(newEffects);

            return newEffects;
        });
    }, [debouncedSaveEffects]);

    // Standard setter that also saves to localStorage immediately
    const setValue = (key: string, setter: React.Dispatch<React.SetStateAction<number>>) => (value: number) => {
        setter(value);
        saveToLocalStorage(key, value);
    };

    // Create all the setter functions
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

    // Pain management functions
    const setPainVal = setValue('pain', setPain);
    const addPain = () => {
        setPainVal(pain + 1);
    };
    const removePain = () => {
        setPainVal(Math.max(0, pain - 1)); // Ensure pain doesn't go below 0
    };

    // Global modifier management
    const setGlobalModVal = setValue('globalmod', setGlobalMod);
    const addMod = () => {
        setGlobalModVal(globalMod + 1);
    };
    const removeMod = () => {
        setGlobalModVal(globalMod - 1);
    };

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
            effects, setEffects,
            pain, addPain, removePain
        }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error("useGlobalState must be used within a GlobalStateProvider");
    }
    return context;
};