import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, TextField,
    Typography
} from "@mui/material";
import React from "react";
import AddIcon from '@mui/icons-material/Add';

const BattleOrder = () =>
{
    return (
        <TableContainer>
            <Table size="small" sx={{width: 'fit-content'}}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" sx={{width: '60%', borderRight: '1px solid white'}}>
                            <TextField label="Kämpfer" variant="outlined"/>
                        </TableCell>
                        <TableCell>
                            <AddIcon/>
                        </TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    );
}

export default BattleOrder;