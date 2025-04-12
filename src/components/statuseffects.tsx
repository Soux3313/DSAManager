import {
    Box, Checkbox,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import React from "react";

const StatusEffects = () => {
    enum Stage {
        none,
        one,
        two,
        three,
        four,
    }

    type Effect = {
        id: number;
        name: string;
        stage: Stage;

    };

    const effects: Effect[] = [
        {id: 0, name: 'Animosität', stage: Stage.none},
        {id: 1, name: 'Begehren', stage: Stage.none},
        {id: 2, name: 'Belastung', stage: Stage.none},
        {id: 3, name: 'Berauscht', stage: Stage.none},
        {id: 4, name: 'Betäubung', stage: Stage.none},
        {id: 5, name: 'Entrückung', stage: Stage.none},
        {id: 6, name: 'Furcht', stage: Stage.none},
        {id: 7, name: 'Paralyse', stage: Stage.none},
        {id: 8, name: 'Schmerz', stage: Stage.none},
        {id: 9, name: 'Trance', stage: Stage.none},
        {id: 10, name: 'Überanstrengung', stage: Stage.none},
        {id: 11, name: 'Verwirrung', stage: Stage.none},
    ];

    return (
        <TableContainer sx={{ width: '100%', margin:0, padding:0,  maxWidth: '700px', overflowX: 'auto', overflowY: 'auto',  maxHeight: 'calc(100vh - 300px)' }}>

            <Table size="small" sx={{width: '100%', tableLayout: 'auto'}}>

                <TableHead >

                    <TableRow>

                        <TableCell align="right" sx={{padding:1}}>
                            <Typography variant="h6">
                                Zustände
                            </Typography>
                        </TableCell>{/* Leere Spalte für Bild */}

                        <TableCell align="center" sx={{width: '5%'}}>I</TableCell>

                        <TableCell align="center" sx={{width: '5%'}}>II</TableCell>

                        <TableCell align="center" sx={{width: '5%'}}>III</TableCell>

                        <TableCell align="center" sx={{width: '5%'}}>IV</TableCell>


                    </TableRow>

                </TableHead>

                <TableBody>

                    {effects.map((effect) =>{

                        return (


                            <TableRow key={effect.id}
                                      sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>

                                {/* Name */}
                                <TableCell align="right" sx={{padding:0.5}}>
                                    <Typography variant="body2">
                                        {effect.name}
                                    </Typography>
                                </TableCell>

                                {/* I */}
                                <TableCell align="center" sx={{padding:0.5}}>
                                    <Checkbox/>
                                </TableCell>

                                {/* II */}
                                <TableCell align="center" sx={{padding:0.5}}>
                                    <Checkbox/>
                                </TableCell>

                                {/* III */}
                                <TableCell align="center" sx={{padding:0.5}}>
                                    <Checkbox/>
                                </TableCell>

                                {/* IV */}
                                <TableCell align="center" sx={{padding:0.5}}>
                                    <Checkbox/>
                                </TableCell>

                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default StatusEffects;