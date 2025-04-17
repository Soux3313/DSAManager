import { Box, Button } from "@mui/material";
import {useGlobalState} from "./global-state";


interface AttrValue {
    id: string;
    value: number;
}

interface AttributeData {
    /*
        1: MU
        2: KL
        3: IN
        4: CH
        5: FF
        6: GE
        7: KO
        8: KK
     */
    values: AttrValue[];
    ae: number;
    kp: number;
    lp: number;
}

interface Purse {
    d: string; // Dukaten
    s: string; // Silber
    h: string; // Heller
    k: string; // Kreuzer
}

interface Belongings {
    purse: Purse;
}

interface HeroData {
    attr: AttributeData;
    belongings: Belongings;
}

const CharacterIMG = () => {
    const{
        setMU,
        setKL,
        setIN,
        setCH,
        setFF,
        setGE,
        setKO,
        setKK,
        setMaxHP, setMaxAK,
        setDukaten, setSilver, setHeller, setCopper
    }= useGlobalState()

    const handleFileChange = (event: Event) => {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const json = JSON.parse(e.target?.result as string);
                handleImport(json)
            } catch (err) {
                console.error("Invalid JSON file", err);
            }
        };
        reader.readAsText(file);
    };

    const handleImport = (json: HeroData) => {
        var dukaten: number = +json.belongings.purse.d
        setDukaten(dukaten)
    }

    const handleClick = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = ".json";
        input.onchange = handleFileChange;
        input.click();
    };

    return (
        <Box sx={{
            display: 'flex',
        }}>
            <Button
                onClick={handleClick}
                variant="contained"
                sx={{
                    color: '#ffffff',
                    backgroundColor: '#1976d2',
                    margin: 'auto',
                    marginTop: '20%'
                }}
            >
                Import Hero
            </Button>
        </Box>
    );
};

export default CharacterIMG;
