import {Box, Typography} from "@mui/material";
import {useGlobalState} from "./global-state";
import React from "react";
import NumberFlow from '@number-flow/react'
import NoMove from '@mui/icons-material/DoNotTouch';

const Modifiers = () =>
{
    const {
        effects, painMod
    } = useGlobalState();

    let incap =
        //Belastung
        effects[2].stage === 4 ||
        //Betäubung
        effects[4].stage === 4 ||
        //Furcht
        effects[6].stage === 4 ||
        //Schmerz
        effects[8].stage === 4 ||
        //Trance
        effects[9].stage === 4 ||
        //Verwirrung
        effects[11].stage === 4;

    const calculateGlobal = () => {
        let mod = 0;

        // Betäubung
        switch(effects[4].stage){
            case 0:
                break;
            case 1:
                mod -= 1
                break;
            case 2:
                mod -= 2
                break;
            case 3:
                mod -= 3
                break;
            case 4:
                mod -= 3
                break;
        }

        // Furcht
        switch(effects[6].stage){
            case 0:
                break;
            case 1:
                mod -= 1
                break;
            case 2:
                mod -= 2
                break;
            case 3:
                mod -= 3
                break;
            case 4:
                mod -= 3
                break;
        }

        // Schmerz
        switch(effects[8].stage){
            case 0:
                break;
            case 1:
                mod -= 1
                break;
            case 2:
                mod -= 2
                break;
            case 3:
                mod -= 3
                break;
            case 4:
                mod -= 4
                break;
        }
        effects[8].stage += painMod;

        // Verwirrung
        switch(effects[11].stage){
            case 0:
                break;
            case 1:
                mod -= 1
                break;
            case 2:
                mod -= 2
                break;
            case 3:
                mod -= 3
                break;
            case 4:
                mod -= 3
                break;
        }

        return mod;
    }

    return (
        <Box sx={{marginTop:'auto'}}>
            {incap ? (
                <NoMove sx={{
                    color: 'rgb(141,0,0)',
                    transform: 'scale(3)',
                    stroke: 'black',
                    strokeWidth: '0.8'
                }}/>
            ):(
                <Typography sx={{
                    transform: 'scale(4)',
                    color: '#fd2424',
                    WebkitTextStroke: '0.5px black',
                }}>
                    <NumberFlow
                        value={calculateGlobal()}
                        transformTiming={{ duration: 500, easing: 'ease-out' }}
                        trend={0}
                    />
                </Typography>
            )}
        </Box>
    );
}

export default Modifiers;