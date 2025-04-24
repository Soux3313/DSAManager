import './App.css';
import { Box, MenuItem, Select } from "@mui/material";
import { GlobalStateProvider } from "./components/global-state";
import React, {useEffect, useState} from "react";
import DiceTray from "./components/dicetray";
import Modifiers from "./components/modifiers";
import Import from "./components/import";
import Stats from "./components/stats";
import Notes from "./components/notes";
import BattleOrder from "./components/battleorder";
import Wallet from "./components/wallet";
import StatusEffects from "./components/statuseffects";
import Inventory from "./components/inventory";

const COMPONENTS = {
    Notes,
    Stats,
    BattleOrder,
    DiceTray,
    Wallet,
    StatusEffects,
    Inventory
};

const COMPONENT_LABELS: { [key in ComponentKey]: string } = {
    Notes: "Notizen",
    Stats: "Eigenschaften",
    BattleOrder: "Kampf-Reihenfolge",
    DiceTray: "Würfel",
    Wallet: "Geld",
    StatusEffects: "Status Effekte",
    Inventory: "Inventar"
};


type ComponentKey = keyof typeof COMPONENTS;

const componentKeys = Object.keys(COMPONENTS) as ComponentKey[];

const BoxWithSelector = ({ selectedComponent, onComponentChange }: { selectedComponent: ComponentKey, onComponentChange: (newComponent: ComponentKey) => void }) => {
    const SelectedComponent = COMPONENTS[selectedComponent];

    return (
        <Box sx={{
            position: 'relative',
            border: '2px solid',
            borderColor: '#886e3e',
            flex: 1,
            margin: 1,
            backgroundColor: '#2a2927',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        }}>
            <Select
                value={selectedComponent}
                onChange={(e) => onComponentChange(e.target.value as ComponentKey)}
                sx={{
                    position: 'absolute',
                    top: 4,
                    right: 4,
                    zIndex: 10,
                    backgroundColor: '#333',
                    color: 'white',
                    fontSize: '0.75rem',
                    minWidth: 80
                }}
                size="small"
                MenuProps={{
                    PaperProps: {
                        sx: {
                            backgroundColor: '#2a2a2a', // dropdown bg
                            color: 'white' // dropdown text color
                        }
                    }
                }}
            >
                {componentKeys.map((key) => (
                    <MenuItem key={key} value={key}>{COMPONENT_LABELS[key]}</MenuItem>
                ))}
            </Select>
            <Box sx={{ flexGrow: 1, paddingTop: '2rem',overflowY: 'auto',overflowX: 'hidden',  maxHeight: 'calc(100vh - 350px)' }}>
                <SelectedComponent />
            </Box>
        </Box>
    );
};

const Constructor = () => {
    const savedBoxState = JSON.parse(localStorage.getItem('boxState') || '[]');

    // Define the state for each box, using the saved state or defaulting to 'Notes'
    const [boxStates, setBoxStates] = useState<Array<ComponentKey>>(savedBoxState.length > 0 ? savedBoxState : Array(6).fill('Stats'));

    useEffect(() => {
        localStorage.setItem('boxState', JSON.stringify(boxStates));
    }, [boxStates]);

    const handleComponentChange = (index: number, newComponent: ComponentKey) => {
        const updatedBoxStates = [...boxStates];
        updatedBoxStates[index] = newComponent;
        setBoxStates(updatedBoxStates);
    };


    return (
        <GlobalStateProvider>
            <Box sx={{
                backgroundColor: '#1e1c19',
                height: '100vh',
                padding: 2,
                boxSizing: 'border-box',
                overflow: 'auto'
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Modifiers/>
                    <Import/>
                </Box>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gridTemplateRows: 'repeat(2, 1fr)',
                    gap: 2,
                    height: '100%'
                }}>
                    {boxStates.map((selectedComponent, index) => (
                        <BoxWithSelector key={index} selectedComponent={selectedComponent} onComponentChange={(newComponent) => handleComponentChange(index, newComponent)} />
                    ))}
                </Box>
            </Box>
        </GlobalStateProvider>
    );
};

export default Constructor;
