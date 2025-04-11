import {Box, Typography} from "@mui/material";
import React from "react";
import {styled} from "@mui/material";

const Stats = () =>
{
    const StatBox = styled(Box)({
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    })

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
        }}>
            <StatBox>
                MU
                <Box sx={{
                border: 'solid 3px red',
                padding: '10px'
                }}>
                    10
                </Box>
            </StatBox>

            <StatBox>
                KL
                <Box sx={{
                    border: 'solid 3px purple',
                    padding: '10px'
                }}>
                    10
                </Box>
            </StatBox>

            <StatBox>
                IN
                <Box sx={{
                    border: 'solid 3px green',
                    padding: '10px'
                }}>
                    10
                </Box>
            </StatBox>

            <StatBox>
                CH
                <Box sx={{
                    border: 'solid 3px grey',
                    padding: '10px'
                }}>
                    10
                </Box>
            </StatBox>

            <StatBox>
                FF
                <Box sx={{
                    border: 'solid 3px yellow',
                    padding: '10px'
                }}>
                    10
                </Box>
            </StatBox>

            <StatBox>
                GE
                <Box sx={{
                    border: 'solid 3px blue',
                    padding: '10px'
                }}>
                    10
                </Box>
            </StatBox>

            <StatBox>
                KO
                <Box sx={{
                    border: 'solid 3px white',
                    padding: '10px'
                }}>
                    10
                </Box>
            </StatBox>

            <StatBox>
                KK
                <Box sx={{
                    border: 'solid 3px orange',
                    padding: '10px'
                }}>
                    10
                </Box>
            </StatBox>
        </Box>
    );
}

export default Stats;