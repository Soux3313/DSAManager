import {Box, Grid, IconButton, Input, Slider} from "@mui/material";
import React from "react";
import {useGlobalState} from "./global-state";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Wallet = () =>
{
    const {
        dukaten, setDukaten,
        silver, setSilver,
        heller, setHeller,
        copper, setCopper
    } = useGlobalState();

    const handleSliderChangeDuk = (event: Event, newValue: number) => {
        setDukaten(newValue);
    };
    const handleSliderChangeSil = (event: Event, newValue: number) => {
        setSilver(newValue);
    };
    const handleSliderChangeHel = (event: Event, newValue: number) => {
        setHeller(newValue);
    };
    const handleSliderChangeCop = (event: Event, newValue: number) => {
        setCopper(newValue);
    };


    function removeDuk()
    {
        setDukaten(dukaten-1)
    }
    const addDuk = () =>
    {
        setDukaten(dukaten+1)
    }
    const handleInputChangeDuk = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDukaten(event.target.value === '' ? 0 : Number(event.target.value));
    };

    const removeSil = () =>
    {
        setSilver(silver-1)
    }
    const addSil = () =>
    {
        setSilver(silver+1)
    }
    const handleInputChangeSil = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSilver(event.target.value === '' ? 0 : Number(event.target.value));
    };

    const removeHel = () =>
    {
        setHeller(heller-1)
    }
    const addHel = () =>
    {
        setHeller(heller+1)
    }
    const handleInputChangeHel = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHeller(event.target.value === '' ? 0 : Number(event.target.value));
    };

    const removeCop = () =>
    {
        setCopper(copper-1)
    }
    const addCop = () =>
    {
        setCopper(copper+1)
    };
    const handleInputChangeCop = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCopper(event.target.value === '' ? 0 : Number(event.target.value));
    };
    return (
        <Box>
            <Grid container columnSpacing={2} sx={{ alignItems: 'center', marginLeft: '40px', marginTop: '30px', width: 'calc(100% - 40px)' }}>
                <Grid size={{md: 1}} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <IconButton onClick={removeDuk}>
                        <RemoveIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Grid>
                <Grid size={{md: 6}}>
                    <Slider
                        value={Math.min(dukaten, 150)}
                        valueLabelDisplay="on"
                        valueLabelFormat={() => dukaten}
                        min={0}
                        max={150}
                        onChange={handleSliderChangeDuk}
                        sx={{ color: "#ffd717" }}
                    />
                </Grid>
                <Grid size={{md: 1}} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton onClick={addDuk}>
                        <AddIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Grid>
                <Grid size={{md: 3}}>
                    <Input
                        value={dukaten}
                        size="small"
                        onChange={handleInputChangeDuk}
                        inputProps={{
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                        sx={{
                            ':before': { borderBottomColor: '#816d1d' },
                            ':after': { borderBottomColor: '#ffd600' },
                            '&.MuiInput-underline:hover:before': { borderColor: '#ead191' },
                        }}
                    />
                </Grid>
            </Grid>

            <Grid container columnSpacing={2} sx={{ alignItems: 'center', marginLeft: '40px', marginTop: '30px', width: 'calc(100% - 40px)' }}>
                <Grid size={{md: 1}} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <IconButton onClick={removeSil}>
                        <RemoveIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Grid>
                <Grid size={{md: 6}}>
                    <Slider
                        value={silver}
                        valueLabelDisplay="on"
                        min={0}
                        max={100}
                        onChange={handleSliderChangeSil}
                        sx={{ color: "#ababab" }}
                    />
                </Grid>
                <Grid size={{md: 1}} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton onClick={addSil}>
                        <AddIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Grid>
                <Grid size={{md: 3}}>
                    <Input
                        value={silver}
                        size="small"
                        onChange={handleInputChangeSil}
                        inputProps={{
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                        sx={{
                            ':before': { borderBottomColor: '#5d5d5d' },
                            ':after': { borderBottomColor: '#ffffff' },
                            '&.MuiInput-underline:hover:before': { borderColor: '#858585' },
                        }}
                    />
                </Grid>
            </Grid>

            <Grid container columnSpacing={2} sx={{ alignItems: 'center', marginLeft: '40px', marginTop: '30px', width: 'calc(100% - 40px)' }}>
                <Grid size={{md: 1}} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <IconButton onClick={removeHel}>
                        <RemoveIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Grid>
                <Grid size={{md: 6}}>
                    <Slider
                        value={heller}
                        valueLabelDisplay="on"
                        min={0}
                        max={100}
                        onChange={handleSliderChangeHel}
                        sx={{ color: "#c4743d" }}
                    />
                </Grid>
                <Grid size={{md: 1}} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton onClick={addHel}>
                        <AddIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Grid>
                <Grid size={{md: 3}}>
                    <Input
                        value={heller}
                        size="small"
                        onChange={handleInputChangeHel}
                        inputProps={{
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                        sx={{
                            ':before': { borderBottomColor: '#733406' },
                            ':after': { borderBottomColor: '#ec6816' },
                            '&.MuiInput-underline:hover:before': { borderColor: '#ad7948' },
                        }}
                    />
                </Grid>
            </Grid>

            <Grid container columnSpacing={2} sx={{ alignItems: 'center', marginLeft: '40px', marginTop: '30px', width: 'calc(100% - 40px)' }}>
                <Grid size={{md: 1}} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <IconButton onClick={removeCop}>
                        <RemoveIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Grid>
                <Grid size={{md: 6}}>
                    <Slider
                        value={copper}
                        valueLabelDisplay="on"
                        min={0}
                        max={100}
                        onChange={handleSliderChangeCop}
                        sx={{ color: "#7e5e4a" }}
                    />
                </Grid>
                <Grid size={{md: 1}} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton onClick={addCop}>
                        <AddIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Grid>
                <Grid size={{md: 3}}>
                    <Input
                        value={copper}
                        size="small"
                        onChange={handleInputChangeCop}
                        inputProps={{
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                        sx={{
                            ':before': { borderBottomColor: '#644e48' },
                            ':after': { borderBottomColor: '#eab691' },
                            '&.MuiInput-underline:hover:before': { borderColor: '#b08b79' },
                        }}
                    />
                </Grid>
            </Grid>
        </Box>

    );
}

export default Wallet;