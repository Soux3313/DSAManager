import {
    Box, Checkbox,
    Grid,
    Paper, Slider,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import {useGlobalState} from "./global-state";

const StatusEffects = () => {
    const {
        effects, setEffects
    } = useGlobalState();

    const stage = [
        {
            value: 0,
            label: "O"
        },
        {
            value: 1,
            label: "I"
        },
        {
            value: 2,
            label: "II"
        },
        {
            value: 3,
            label: "III"
        },
        {
            value: 4,
            label: "IV"
        },
    ]

    const handleSliderChange = (id:number) => (event: Event, newValue: number) => {
        setEffects((prev) =>
            prev.map((e) =>
                e.id === id ? { ...e, stage: newValue } : e
            )
        );
    };

    return (
        <TableContainer sx={{ width: 450, overflowX: 'hidden',  overflowY: 'auto',  maxHeight: 'calc(100vh - 300px)'}}>

            <Table size="small" sx={{width: 'fit-content', maxWidth: 500}}>

                <TableHead >

                    <TableRow>

                        <TableCell align="center" sx={{width: '1%', borderRight: '1px solid white'}}>
                            <Typography variant="h6">
                                Zustände
                            </Typography>
                        </TableCell>{/* Leere Spalte für Bild */}

                        <TableCell align="center" sx={{paddingLeft: 10, width: '99%',}}>
                            <Typography variant="h6">
                                Stufe
                            </Typography>
                        </TableCell>

                        <TableCell>

                        </TableCell>


                    </TableRow>

                </TableHead>

                <TableBody>

                    {effects.map((effect) => {
                        const IconComponent = effect.icon;

                        return (
                            <TableRow key={effect.id}>

                                {/* Name */}
                                <TableCell align="center" sx={{borderRight: '1px solid white'}}>
                                    <Typography variant="body2">
                                        {effect.name}
                                    </Typography>
                                </TableCell>

                                {/* Stage */}
                                <TableCell align="center" sx={{paddingRight:0}}>
                                    <Slider
                                        size="small"
                                        defaultValue={0}
                                        value={effect.stage}
                                        marks={stage}
                                        max={4}
                                        step={null}
                                        onChange={handleSliderChange(effect.id)}
                                        sx={{
                                            minWidth: 0,        // key: avoid forcing cell width
                                            width: '60%',
                                            marginLeft: '5%'
                                        }}
                                    />
                                </TableCell>

                                <TableCell>
                                    {IconComponent && <IconComponent />}
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