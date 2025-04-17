import {Box, Grid, IconButton, Slider} from "@mui/material";
import React from "react";
import {useGlobalState} from "./global-state";
import HealthIcon from "@mui/icons-material/FavoriteBorder";
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

    const removeSil = () =>
    {
        setSilver(silver-1)
    }
    const addSil = () =>
    {
        setSilver(silver+1)
    }

    const removeHel = () =>
    {
        setHeller(heller-1)
    }
    const addHel = () =>
    {
        setHeller(heller+1)
    }

    const removeCop = () =>
    {
        setCopper(copper-1)
    }
    const addCop = () =>
    {
        setCopper(copper+1)
    }
    return (
        <Box>
            <Grid container spacing={5} sx={{ alignItems: 'center', marginLeft: '40px', marginTop: '50px',  width: 'calc(100% - 40px)'}}>
                <Grid size={{md: 1}}>
                    <IconButton onClick={removeDuk}>
                        <RemoveIcon sx={{color: 'white'}}/>
                    </IconButton>
                </Grid>
                <Grid size={{md: 8}}>
                    <Slider
                        defaultValue={0}
                        value={dukaten}
                        valueLabelDisplay="on"
                        min={0}
                        max={100}
                        onChange={handleSliderChangeDuk}
                        sx={{
                            margin: 'auto',
                            color:"#ffd717"
                        }}
                    />
                </Grid>
                <Grid  size={{md: 1}}>
                    <IconButton onClick={addDuk}>
                        <AddIcon sx={{color: 'white'}}/>
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container spacing={5} sx={{ alignItems: 'center', marginLeft: '40px', marginTop: '50px',  width: 'calc(100% - 40px)'}}>
                <Grid size={{xs:1 , md: 1}}>
                    <IconButton onClick={removeSil}>
                        <RemoveIcon sx={{color: 'white'}}/>
                    </IconButton>
                </Grid>
                <Grid size={{xs:7, md: 8}}>
                    <Slider
                        defaultValue={0}
                        value={silver}
                        valueLabelDisplay="on"
                        min={0}
                        max={100}
                        onChange={handleSliderChangeSil}
                        sx={{
                            margin: 'auto',
                            color:"#ababab"
                        }}
                    />
                </Grid>
                <Grid  size={{md: 1}}>
                    <IconButton onClick={addSil}>
                        <AddIcon sx={{color: 'white'}}/>
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container spacing={5} sx={{ alignItems: 'center', marginLeft: '40px', marginTop: '50px',  width: 'calc(100% - 40px)'}}>
                <Grid size={{xs:1 , md: 1}}>
                    <IconButton onClick={removeHel}>
                        <RemoveIcon sx={{color: 'white'}}/>
                    </IconButton>
                </Grid>
                <Grid size={{xs:7, md: 8}}>
                    <Slider
                        defaultValue={0}
                        value={heller}
                        valueLabelDisplay="on"
                        min={0}
                        max={100}
                        onChange={handleSliderChangeHel}
                        sx={{
                            margin: 'auto',
                            color:"#c4743d"
                        }}
                    />
                </Grid>
                <Grid  size={{md: 1}}>
                    <IconButton onClick={addHel}>
                        <AddIcon sx={{color: 'white'}}/>
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container spacing={5} sx={{ alignItems: 'center', marginLeft: '40px', marginTop: '50px',  width: 'calc(100% - 40px)'}}>
                <Grid size={{xs:1 , md: 1}}>
                    <IconButton onClick={removeCop}>
                        <RemoveIcon sx={{color: 'white'}}/>
                    </IconButton>
                </Grid>
                <Grid size={{xs:7, md: 8}}>
                    <Slider
                        defaultValue={0}
                        value={copper}
                        valueLabelDisplay="on"
                        min={0}
                        max={100}
                        onChange={handleSliderChangeCop}
                        sx={{
                            margin: 'auto',
                            color:"#7e5e4a"
                        }}
                    />
                </Grid>
                <Grid  size={{md: 1}}>
                    <IconButton onClick={addCop}>
                        <AddIcon sx={{color: 'white'}}/>
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Wallet;