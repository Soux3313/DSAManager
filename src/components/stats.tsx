import {Box, Grid, IconButton, Input, Slider, TextField} from "@mui/material";
import React from "react";
import {styled} from "@mui/material";
import {useGlobalState} from "./global-state";
import HealthIcon from '@mui/icons-material/FavoriteBorder';
import MagicIcon from '@mui/icons-material/AutoAwesome';
import PainIcon from '@mui/icons-material/Healing';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Stats = () =>
{
    const {
        MU, setMU,
        KL, setKL,
        IN, setIN,
        CH, setCH,
        FF, setFF,
        GE, setGE,
        KO, setKO,
        KK, setKK,
        HP, setHP, maxHP, setMaxHP, AK, setAK, maxAK, setMaxAK,
        setPainMod
    } = useGlobalState();

    const StatBox = styled(Box)({
        display: 'flex',
        marginBottom: "8px",
        flex: '0 0 auto', // Prevent stretching
    })

    const StatField = (props: React.ComponentProps<typeof TextField>) => {
        return (
            <TextField
                variant="outlined"
                type="number"
                size="small"
                {...props}
                //ToDo: Find Alternative
                InputProps={{ inputProps: { min: 8, max: 20 } }}
                sx={{
                    width: '65px',
                    minWidth: '65px',
                    ...(props.sx || {})
                }}
            />
        );
    };


    const pain =[
        {
            value: maxHP * 0.75,
            label: <PainIcon/>
        },
        {
            value: maxHP * 0.5,
            label: <PainIcon/>
        },
        {
            value: maxHP * 0.25,
            label: <PainIcon/>
        },
        {
            value: 5,
            label: <PainIcon/>
        },
    ]

    // Calculates current levels of Pain Status-Effect based on current hp
    const calcPain = (newValue: number) =>
    {
        if (newValue <= pain[3].value) {
            setPainMod(4);
        } else if (newValue <= pain[2].value) {
            setPainMod(3);
        } else if (newValue <= pain[1].value) {
            setPainMod(2);
        } else if (newValue <= pain[0].value) {
            setPainMod(1);
        } else {
            setPainMod(0);
        }
    }

    const handleSliderChangeHP = (event: Event, newValue: number) => {
        setHP(newValue);
        calcPain(newValue)
    };

    const handleInputChangeHP = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxHP(event.target.value === '' ? 0 : Number(event.target.value));
    };

    const addHP = () => {
        calcPain(HP+1)
        setHP(HP+1)
    }

    const removeHP = () => {
        calcPain(HP-1)
        setHP(HP-1)
    }

    const handleSliderChangeAK = (event: Event, newValue: number) => {
        setAK(newValue);
    };

    const handleInputChangeAK = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxAK(event.target.value === '' ? 0 : Number(event.target.value));
    };

    const addAK = () => {
        setAK(AK+1)
    }

    const removeAK = () => {
        setAK(AK-1)
    }

    const handleBlur = () => {
        if (maxHP < 0) {
            setMaxHP(0);
        }
    };

    return (
        <Box>
            <Box sx={{
                display: 'flex',
                justifyContent: "space-evenly",
                flexWrap: 'wrap',
                marginTop: '3%',
            }}>
                <StatBox>
                    <StatField label="MU"
                               defaultValue={MU}
                               onChange={(e) => setMU(Number(e.target.value))}
                               sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "darkred" },
                            "&:hover fieldset": { borderColor: "red" },
                            "&.Mui-focused fieldset": { borderColor: "red" },
                        },
                        "& .MuiInputLabel-root": { color: "red" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "red" },
                        "& .MuiInputBase-input": { color: "white" },
                    }}/>
                </StatBox>

                <StatBox>
                    <StatField label="KL"
                               defaultValue={KL}
                               onChange={(e) => setKL(Number(e.target.value))}
                               sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "purple" },
                            "&:hover fieldset": { borderColor: "magenta" },
                            "&.Mui-focused fieldset": { borderColor: "magenta" },
                        },
                        "& .MuiInputLabel-root": { color: "magenta" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "magenta" },
                        "& .MuiInputBase-input": { color: "white" },
                    }}/>
                </StatBox>

                <StatBox>
                    <StatField label="IN"
                               defaultValue={IN}
                               onChange={(e) => setIN(Number(e.target.value))}
                               sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "darkgreen" },
                            "&:hover fieldset": { borderColor: "green" },
                            "&.Mui-focused fieldset": { borderColor: "green" },
                        },
                        "& .MuiInputLabel-root": { color: "green" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "green" },
                        "& .MuiInputBase-input": { color: "white" },
                    }}/>
                </StatBox>

                <StatBox>
                    <StatField label="CH"
                               defaultValue={CH}
                               onChange={(e) => setCH(Number(e.target.value))}
                               sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "gray" },
                            "&:hover fieldset": { borderColor: "darkgrey" },
                            "&.Mui-focused fieldset": { borderColor: "darkgrey" },
                        },
                        "& .MuiInputLabel-root": { color: "darkgrey" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "darkgrey" },
                        "& .MuiInputBase-input": { color: "white" },
                    }}/>
                </StatBox>

                <StatBox>
                    <StatField label="FF"
                               defaultValue={FF}
                               onChange={(e) => setFF(Number(e.target.value))}
                               sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "#bfb606" },
                            "&:hover fieldset": { borderColor: "yellow" },
                            "&.Mui-focused fieldset": { borderColor: "yellow" },
                        },
                        "& .MuiInputLabel-root": { color: "yellow" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "yellow" },
                        "& .MuiInputBase-input": { color: "white" },
                    }}/>
                </StatBox>

                <StatBox>
                    <StatField label="GE"
                               defaultValue={GE}
                               onChange={(e) => setGE(Number(e.target.value))}
                               sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "blue" },
                            "&:hover fieldset": { borderColor: "#2a7dd1" },
                            "&.Mui-focused fieldset": { borderColor: "#2a7dd1" },
                        },
                        "& .MuiInputLabel-root": { color: "#2a7dd1" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "#2a7dd1" },
                        "& .MuiInputBase-input": { color: "white" },
                    }}/>
                </StatBox>

                <StatBox>
                    <StatField label="KO"
                               defaultValue={KO}
                               onChange={(e) => setKO(Number(e.target.value))}
                               sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "gray" },
                            "&:hover fieldset": { borderColor: "white" },
                            "&.Mui-focused fieldset": { borderColor: "white" },
                        },
                        "& .MuiInputLabel-root": { color: "white" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "white" },
                        "& .MuiInputBase-input": { color: "white" },
                    }}/>
                </StatBox>

                <StatBox>
                    <StatField label="KK"
                               defaultValue={KK}
                               onChange={(e) => setKK(Number(e.target.value))}
                               sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "#a16118" },
                            "&:hover fieldset": { borderColor: "orange" },
                            "&.Mui-focused fieldset": { borderColor: "orange" },
                        },
                        "& .MuiInputLabel-root": { color: "orange" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "orange" },
                        "& .MuiInputBase-input": { color: "white" },
                    }}/>
                </StatBox>
            </Box>

            <Grid container spacing={5} sx={{ alignItems: 'center', marginLeft: '40px', marginTop: '50px',  width: 'calc(100% - 40px)'}}>
                <Grid size={{xs:1 , md: 1}}>
                    <HealthIcon/>
                </Grid>
                <Grid size={{md: 1}} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <IconButton onClick={removeHP}>
                        <RemoveIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Grid>
                <Grid  size={{xs:7, md: 6}}>
                    <Slider
                        defaultValue={maxHP}
                        value={HP}
                        valueLabelDisplay="on"
                        min={0}
                        max={maxHP}
                        marks={pain}
                        onChange={handleSliderChangeHP}
                        sx={{
                            marginLeft: '20px',
                            color:"#ec1e55"
                        }}
                    />
                </Grid>
                <Grid size={{md: 1}} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton onClick={addHP}>
                        <AddIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Grid>
                <Grid  size={{xs:4, md: 2}}>
                    <Input
                        value={maxHP}
                        size="small"
                        onChange={handleInputChangeHP}
                        onBlur={handleBlur}
                        inputProps={{
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                        sx={{
                            ':before': { borderBottomColor: '#850c3b' },
                            // underline when selected
                            ':after': { borderBottomColor: '#ff0074' },
                            '&.MuiInput-underline:hover:before': {borderColor: '#6236d0'},
                        }}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={5} sx={{ alignItems: 'center', marginLeft: '40px', marginTop: '50px',  width: 'calc(100% - 40px)'}}>
                <Grid size={{xs:1 , md: 1}}>
                    <MagicIcon/>
                </Grid>
                <Grid size={{md: 1}} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <IconButton onClick={removeAK}>
                        <RemoveIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Grid>
                <Grid  size={{xs:7, md: 6}}>
                    <Slider
                        defaultValue={maxAK}
                        value={AK}
                        valueLabelDisplay="on"
                        min={0}
                        max={maxAK}
                        onChange={handleSliderChangeAK}
                        sx={{
                            marginLeft: '20px',
                            color:"#0db985"
                        }}
                    />
                </Grid>
                <Grid size={{md: 1}} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton onClick={addAK}>
                        <AddIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Grid>
                <Grid  size={{xs:4, md: 2}}>
                    <Input
                        value={maxAK}
                        size="small"
                        onChange={handleInputChangeAK}
                        onBlur={handleBlur}
                        inputProps={{
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                        sx={{
                            ':before': { borderBottomColor: '#2a9f72' },
                            // underline when selected
                            ':after': { borderBottomColor: '#1eecd4' },
                            '&.MuiInput-underline:hover:before': {borderColor: '#3673d0'},
                        }}
                    />
                </Grid>
            </Grid>

        </Box>
    );
}

export default Stats;