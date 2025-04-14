import {
    Box,
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
import React, {useEffect} from "react";
import {useGlobalState} from "./global-state";

const StatusEffects = () => {
    const {
        effects, setEffects
    } = useGlobalState();

    // Calculate minimum required stage for effect 4 based on effects 3 and 10
    const getMinStageForEffect4 = () => {
        let minStage = 0;
        if (effects[3].stage === 4) minStage += 1;
        if (effects[10].stage === 4) minStage += 1;
        return minStage;
    };

    // Check and enforce minimum stage for effect 4 when effects 3 or 10 change
    useEffect(() => {
        const minRequiredStage = getMinStageForEffect4();

        if (effects[4].stage < minRequiredStage) {
            setEffects(prev =>
                prev.map(e =>
                    e.id === 4 ? { ...e, stage: minRequiredStage } : e
                )
            );
        }
    }, [effects[3].stage, effects[10].stage]);

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
    ];

    const handleSliderChange = (id:number) => (event: Event, newValue: number) => {
        // For effect 4, enforce minimum stage based on effects 3 and 10
        if (id === 4) {
            const minRequiredStage = getMinStageForEffect4();
            if (newValue < minRequiredStage) {
                newValue = minRequiredStage;
            }
        }

        setEffects((prev) =>
            prev.map((e) =>
                e.id === id ? { ...e, stage: newValue } : e
            )
        );
    };

    return (
        <TableContainer sx={{ width: 450, overflowX: 'hidden',  overflowY: 'auto',  maxHeight: 'calc(100vh - 300px)'}}>
            <Table size="small" sx={{width: 'fit-content', maxWidth: 500}}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" sx={{width: '1%', borderRight: '1px solid white'}}>
                            <Typography variant="h6">
                                Zustände
                            </Typography>
                        </TableCell>
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
                                        min={0}  // Always keep min at 0 to show full slider range
                                        step={null}
                                        onChange={handleSliderChange(effect.id)}
                                        sx={{
                                            minWidth: 0,
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