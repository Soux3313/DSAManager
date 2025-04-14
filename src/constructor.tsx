import './App.css';
import {Box} from "@mui/material";
import {GlobalStateProvider} from "./components/global-state";
import React from "react";
import DiceTray from "./components/dicetray";
import Modifiers from "./components/modifiers";
import CharacterIMG from "./components/characterimg";
import Stats from "./components/stats";
import Notes from "./components/notes";
import BattleOrder from "./components/battleorder";
import Wallet from "./components/wallet";
import StatusEffects from "./components/statuseffects";

const Constructor = () =>
{
    return (
        <GlobalStateProvider>
            <Box sx={{
                backgroundColor: '#2d302e'
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    height: '100vh'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: '100%'
                    }}>
                        <Box sx={{
                            border: 'solid 2px black',
                            flexGrow: 1.5
                        }}>
                            <DiceTray />
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            border: 'solid 2px black',
                            flexDirection: 'column',
                            flexGrow: 0.2
                        }}>
                            <Box sx={{
                                flexGrow: 0.3,
                                margin: 'auto',
                                alignContent: 'center',
                            }}>
                                <Modifiers />
                            </Box>

                            <Box sx={{
                                border: 'solid 2px black',
                                flexGrow: 1
                            }}>
                                <CharacterIMG />
                            </Box>
                        </Box>

                        <Box sx={{
                            border: 'solid 2px black',
                            flexGrow: 1,
                            width: '10%'
                        }}>
                            <Stats />
                        </Box>
                    </Box>


                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: '100%'
                    }}>
                        <Box sx={{
                            border: 'solid 2px black',
                            flexGrow: 1.5,
                            overflow: 'hidden',
                        }}>
                            <Notes />
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            border: 'solid 2px black',
                            flexDirection: 'column',
                            flexGrow: 0.5
                        }}>
                            <Box sx={{
                                border: 'solid 2px black',
                                flexGrow: 1
                            }}>
                                <BattleOrder />
                            </Box>

                            <Box sx={{
                                border: 'solid 2px black',
                                flexGrow: 1
                            }}>
                                <Wallet/>
                            </Box>
                        </Box>

                        <Box sx={{
                            border: 'solid 2px black',
                            flexGrow: 1,
                            maxWidth: 'fit-content',
                            //margin: '0 auto',
                            height: '100%'
                        }}>
                            <StatusEffects />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </GlobalStateProvider>
    );
}

export default Constructor;
