import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, TextField,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const BattleOrder = () =>
{
    const [fighter, setFighter] = useState<String>("");

    const [fighters, setFighters] = useState<String[]>([]);


    const addFighter = () => {
        console.log("Before adding:", fighters);
        let tempfighter:String = ""
        if(fighter === "")
        {
            tempfighter = "Unbekannt"
        }
        else{
            tempfighter = fighter
        }
        const updatedFighters = [...fighters, tempfighter];
        setFighters(updatedFighters);
        console.log("After adding:", updatedFighters);
        setFighter(""); // optional: clear input
    };

    const removeFighter = (i: number) => {
        const updatedFighters = fighters.filter((_, index) => index !== i);
        setFighters(updatedFighters);
        console.log("After removal:", updatedFighters);
    };


    const moveUp = (f: String) => {
        const index = fighters.indexOf(f);
        if (index > 0) {
            const updatedFighters = [...fighters];
            [updatedFighters[index - 1], updatedFighters[index]] = [updatedFighters[index], updatedFighters[index - 1]];
            setFighters(updatedFighters);
        }
    };

    const moveDown = (f: String) => {
        const index = fighters.indexOf(f);
        if (index >= 0 && index < fighters.length - 1) {
            const updatedFighters = [...fighters];
            [updatedFighters[index], updatedFighters[index + 1]] = [updatedFighters[index + 1], updatedFighters[index]];
            setFighters(updatedFighters);
        }
    };


    return (
        <TableContainer>
            <Table size="small" sx={{width: '100%'}}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{borderColor: '#ecb54a'}}/>
                        <TableCell sx={{borderColor: '#ecb54a'}}/>
                        <TableCell align="center" sx={{width: '90%', borderColor: '#ecb54a'}}>
                            <TextField label="Kämpfer" value={fighter}
                                       onChange={(e) => setFighter(e.target.value)}
                                       variant="outlined"
                                       onKeyDown={(e) => {
                                           if (e.key === 'Enter') {
                                               addFighter();
                                           }
                                       }}
                            />
                        </TableCell>
                        <TableCell sx={{ borderRight: '1px solid white', borderColor: '#ecb54a'}}/>
                        <TableCell  sx={{borderColor: '#ecb54a'}}>
                            <IconButton onClick={addFighter}>
                                <AddIcon sx={{color:'white'}}/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {fighters.map((f, index) => {
                            return(
                                <TableRow>
                                    <TableCell sx={{borderColor: '#ecb54a'}}>
                                        <Typography>
                                            {index+1}.
                                        </Typography>
                                    </TableCell>
                                    <TableCell sx={{width: '10%', borderColor: '#ecb54a'}}>
                                        <IconButton onClick={()=>moveUp(f)} sx={{color:'white'}}>
                                            <KeyboardArrowUpIcon/>
                                        </IconButton>
                                    </TableCell>
                                    <TableCell align="center" sx={{width: '60%', borderColor: '#ecb54a'}}>
                                       <TextField value={f}/>
                                    </TableCell>
                                    <TableCell sx={{width: '10%',  borderRight: '1px solid', borderColor: '#ecb54a'}}>
                                        <IconButton onClick={()=>moveDown(f)} sx={{color:'white'}}>
                                            <KeyboardArrowDownIcon/>
                                        </IconButton>
                                    </TableCell>
                                    <TableCell sx={{borderColor: '#ecb54a'}}>
                                        <IconButton onClick={()=>removeFighter(index)}>
                                            <DeleteForeverIcon sx={{color:'white'}}/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BattleOrder;