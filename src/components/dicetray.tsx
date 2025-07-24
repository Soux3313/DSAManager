import {Box, Button, IconButton, Typography} from "@mui/material";
import HistoryIcon from '@mui/icons-material/History';
import ClearIcon from '@mui/icons-material/Clear';
import {useState} from "react";
import React from "react";

var first = true
// DICE TYPES: d4, d6, d10, d12, d20, d100
const DiceTray = () =>
{
    const [rolls, setRolls] = useState<{ value: number, type: number }[]>([])
    const [added, setAdded] = useState(0)

    const rollDice = (type: number) => {
        const rolledNumber = Math.floor(Math.random() * type) + 1;
        setRolls(prev => [...prev, { value: rolledNumber, type }])
        setAdded(prev => prev + rolledNumber)
    }

    const reset = () => {
        first = true
        setAdded(0)
        setRolls([])
    }

    const getColor = (type: number) => {
        switch (type) {
            case 4:
                return '#de726a'
            case 6:
                return '#deaa6a'
            case 10:
                return '#dedc6a'
            case 12:
                return '#6ade70'
            case 20:
                return '#6acbde'
            case 100:
                return '#a46ade'
        }
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: 1
        }}>
            {/*RESULT AREA*/}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Typography variant="h6">
                    {rolls.length === 0 ? (
                        'Würfel rollen'
                    ) : (
                        rolls.map((roll, index) => (
                            <React.Fragment key={index}>
                                {index > 0 && <Typography component="span"> + </Typography>}
                                <Typography
                                    component="span"
                                    style={{ color: getColor(roll.type) }}
                                >
                                    {roll.value}
                                </Typography>
                            </React.Fragment>
                        ))
                    )}
                </Typography>
                <Typography sx={{fontStyle: 'italic', color: '#626883'}}>
                    = {added}
                </Typography>
            </Box>
            {/*SELECT AREA*/}
            <Box sx={{
                display:'flex',
                justifyContent: 'space-between'
            }}>
                <Button onClick={() => rollDice(4)}  sx={{color: '#de726a'}}>
                    D4
                </Button>
                <Button onClick={() => rollDice(6)} sx={{color: '#deaa6a'}}>
                    D6
                </Button>
                <Button onClick={() => rollDice(10)} sx={{color: '#dedc6a'}}>
                    D10
                </Button>
                <Button onClick={() => rollDice(12)} sx={{color: '#6ade70'}}>
                    D12
                </Button>
                <Button onClick={() => rollDice(20)} sx={{color: '#6acbde'}}>
                    D20
                </Button>
                <Button onClick={() => rollDice(100)} sx={{color: '#a46ade'}}>
                    D100
                </Button>
                <IconButton onClick={reset}>
                    <ClearIcon sx={{color: 'white'}}/>
                </IconButton>
                <IconButton>
                    <HistoryIcon sx={{color: 'white'}}/>
                </IconButton>
            </Box>
        </Box>
    );
}

export default DiceTray;