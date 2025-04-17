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
    r: string;
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

        // purse
        var dukaten: number = +json.belongings.purse.d
        setDukaten(dukaten)
        var silver: number = +json.belongings.purse.s
        setSilver(silver)
        var heller: number = +json.belongings.purse.h
        setHeller(heller)
        var copper: number = +json.belongings.purse.k
        setCopper(copper)

        // default all attributes to 8
        let tempMU = 8, tempKL = 8, tempIN = 8, tempCH = 8;
        let tempFF = 8, tempGE = 8, tempKO = 8, tempKK = 8;
        //attr
        for(let i = 0; i < json.attr.values.length; i++)
        {
            var current = json.attr.values[i]
            switch(current.id)
            {
                //MU
                case("ATTR_1"): tempMU = current.value; break;
                //KL
                case("ATTR_2"): tempKL = current.value; break;
                //IN
                case("ATTR_3"): tempIN = current.value; break;
                //CH
                case("ATTR_4"): tempCH = current.value; break;
                //FF
                case("ATTR_5"): tempFF = current.value; break;
                //GE
                case("ATTR_6"): tempGE = current.value; break;
                //KO
                case("ATTR_7"): tempKO = current.value; break;
                //KK
                case("ATTR_8"): tempKK = current.value; break;
            }
        }


        // hp
        switch(json.r)
        {
            //Human
            case("R_1"):
                setMaxHP(5+tempKO+tempKO+json.attr.lp)
                break;
            //Elf
            case("R_2"):
                setMaxHP(2+tempKO+tempKO+json.attr.lp)
                break;
            //Halfelf
            case("R_3"):
                setMaxHP(5+tempKO+tempKO+json.attr.lp)
                break;
            //Dwarf
            case("R_4"):
                setMaxHP(8+tempKO+tempKO+json.attr.lp)
                break;
        }

        // ae
        let ae = json.attr.ae;
        let kp = json.attr.kp;
        setMaxAK(20+tempIN+ae+kp)


        setMU(tempMU);
        setKL(tempKL);
        setIN(tempIN);
        setCH(tempCH);
        setFF(tempFF);
        setGE(tempGE);
        setKO(tempKO);
        setKK(tempKK);
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
