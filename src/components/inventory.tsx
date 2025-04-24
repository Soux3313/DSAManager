import {
    Box,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField, Typography
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/esm/KeyboardArrowDown";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React from "react";
import {useGlobalState} from "./global-state";

const Inventory = () =>
{
    const {
        items, setItems
    } = useGlobalState();

    return (
        <TableContainer>
            <Table size="small" sx={{width: '100%'}}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{width: '60%', borderRight: '1px solid', borderColor: '#ecb54a'}}>Gegenstand</TableCell>
                        <TableCell sx={{width: '10%', borderRight: '1px solid', borderColor: '#ecb54a'}}>#</TableCell>
                        <TableCell sx={{width: '10%', borderRight: '1px solid', borderColor: '#ecb54a'}}>Wert</TableCell>
                        <TableCell sx={{width: '10%', borderColor: '#ecb54a'}}>Gewicht</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((i) => {
                            return(
                                <TableRow>
                                    <TableCell sx={{width: '60%', borderRight: '1px solid', borderColor: '#ecb54a'}}>
                                        <Typography>
                                            {i.name}
                                        </Typography>
                                    </TableCell>
                                    <TableCell sx={{width: '10%', borderRight: '1px solid', borderColor: '#ecb54a'}}>
                                        <Typography>
                                            {i.amount}
                                        </Typography>
                                    </TableCell>
                                    <TableCell sx={{width: '15%', borderRight: '1px solid', borderColor: '#ecb54a'}}>
                                        <Typography>
                                            {i.price}
                                        </Typography>
                                    </TableCell>
                                    <TableCell sx={{width: '15%', borderColor: '#ecb54a'}}>
                                        <Typography>
                                            {i.weight}
                                        </Typography>
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

export default Inventory;