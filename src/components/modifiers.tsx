import {Box, IconButton, Typography} from "@mui/material";
import { useGlobalState } from "./global-state";
import React, {useEffect, useRef, useState} from "react";
import NumberFlow from '@number-flow/react';
import NoMove from '@mui/icons-material/DoNotTouch';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
const Modifiers = () => {
    const {
        effects, painMod, setEffects, globalMod, setGlobalMod
    } = useGlobalState();

    const prevPainMod = useRef(painMod);

    useEffect(() => {
        const diff = painMod - prevPainMod.current;
        if (diff !== 0) {
            setEffects(prev =>
                prev.map(e => {
                    if (e.id === 8) {
                        const newStage = Math.max(0, Math.min(4, e.stage + diff));
                        return { ...e, stage: newStage };
                    }
                    return e;
                })
            );
            prevPainMod.current = painMod;
        }
    }, [painMod, setEffects]);

    const incap =
        effects[2].stage === 4 ||
        effects[4].stage === 4 ||
        effects[6].stage === 4 ||
        effects[8].stage === 4 ||
        effects[9].stage === 4 ||
        effects[11].stage === 4;

    const [modMod, setModMod] = useState(0);

    const addModMod = () =>
    {
        setModMod(modMod+1);
    }

    const remModMod = () =>
    {
        setModMod(modMod-1);
    }
    const calculateGlobal = () => {
        let mod = 0;

        // Betäubung
        switch (effects[4].stage) {
            case 1: mod -= 1; break;
            case 2: mod -= 2; break;
            case 3: mod -= 3; break;
            case 4: mod -= 3; break;
        }

        // Furcht
        switch (effects[6].stage) {
            case 1: mod -= 1; break;
            case 2: mod -= 2; break;
            case 3: mod -= 3; break;
            case 4: mod -= 3; break;
        }

        // Schmerz
        switch (effects[8].stage) {
            case 1: mod -= 1; break;
            case 2: mod -= 2; break;
            case 3: mod -= 3; break;
            case 4: mod -= 4; break;
        }

        // Verwirrung
        switch (effects[11].stage) {
            case 1: mod -= 1; break;
            case 2: mod -= 2; break;
            case 3: mod -= 3; break;
            case 4: mod -= 3; break;
        }


        return mod+modMod;

    };

    setGlobalMod(calculateGlobal())

    return (
        <Box sx={{
            marginTop: '20%',
            display: 'flex',
            flexDirection: 'column',

        }}>
            {incap ? (
                <NoMove sx={{
                    color: 'rgb(141,0,0)',
                    transform: 'scale(3)',
                    stroke: 'black',
                    strokeWidth: '0.8'
                }} />
            ) : (

                <Box  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0,
                    margin: 0,
                    width: 'fit-content',
                    height: 'fit-content',
                    gap: 0.5,
                }}>
                    <Box sx={{transform: 'scale(4)', lineHeight: 1}}>
                        <Typography sx={{
                            color: (globalMod < 0) ? '#fd2424' : '#08bb21',
                            WebkitTextStroke: '0.5px black',
                            alignSelf: 'flex-end',
                        }}>
                            <NumberFlow
                                value={globalMod}
                                transformTiming={{ duration: 500, easing: 'ease-out' }}
                                trend={0}
                            />
                        </Typography>
                    </Box>

                    <Box sx={{justifySelf: 'space-between', marginTop: '30%'}}>
                        <IconButton onClick={remModMod}>
                            <RemoveIcon sx={{
                                color:'gray',
                                stroke: 'black',
                                strokeWidth: '0.8px',

                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    transform: 'scale(1.2)',
                                },

                                transition: 'transform 0.1s',
                                '&:active': {
                                    transform: 'scale(1.1)',
                                },

                            }}/>
                        </IconButton>
                        <IconButton onClick={addModMod}>
                            <AddIcon sx={{
                                color:'gray',
                                stroke: 'black',
                                strokeWidth: '0.8px',

                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    transform: 'scale(1.2)',
                                },

                                transition: 'transform 0.1s',
                                '&:active': {
                                    transform: 'scale(1.1)',
                                },
                                }}/>
                        </IconButton>
                    </Box>
                    <Typography sx={{fontStyle: 'italic', color: '#626883'}}>
                        {modMod}
                    </Typography>
                </Box>
            )}

        </Box>
    );
};

export default Modifiers;
