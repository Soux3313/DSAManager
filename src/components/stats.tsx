import {Box, InputAdornment, TextField, Typography} from "@mui/material";
import React from "react";
import {styled} from "@mui/material";

const Stats = () =>
{
    const StatBox = styled(Box)({
        display: 'flex',
        marginBottom: "8px",
    })

    const StatField = (props: React.ComponentProps<typeof TextField>) => {
        return (
            <TextField
                variant="outlined"
                type="number"
                size="small"
                {...props}

                sx={{
                    ...(props.sx || {})
                }}
            />
        );
    };

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: "flex-start",
            flexWrap: 'wrap',
            marginTop: '3%',
        }}>
            <StatBox>
                <StatField label="MU" sx={{
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "darkred" }, // Default border color
                        "&:hover fieldset": { borderColor: "red" }, // Hover border
                        "&.Mui-focused fieldset": { borderColor: "red" }, // Focus border
                    },
                    "& .MuiInputLabel-root": { color: "red" }, // Label color
                    "& .MuiInputBase-input": { color: "white" }, // Input text color
                }}/>
            </StatBox>

            <StatBox>
                <StatField label="KL" sx={{
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "purple" }, // Default border color
                        "&:hover fieldset": { borderColor: "magenta" }, // Hover border
                        "&.Mui-focused fieldset": { borderColor: "magenta" }, // Focus border
                    },
                    "& .MuiInputLabel-root": { color: "magenta" }, // Label color
                    "& .MuiInputBase-input": { color: "white" }, // Input text color
                }}/>
            </StatBox>

            <StatBox>
                <StatField label="IN" sx={{
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "darkgreen" }, // Default border color
                        "&:hover fieldset": { borderColor: "green" }, // Hover border
                        "&.Mui-focused fieldset": { borderColor: "green" }, // Focus border
                    },
                    "& .MuiInputLabel-root": { color: "green" }, // Label color
                    "& .MuiInputBase-input": { color: "white" }, // Input text color
                }}/>
            </StatBox>

            <StatBox>
                <StatField label="CH" sx={{
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "gray" }, // Default border color
                        "&:hover fieldset": { borderColor: "darkgrey" }, // Hover border
                        "&.Mui-focused fieldset": { borderColor: "darkgrey" }, // Focus border
                    },
                    "& .MuiInputLabel-root": { color: "darkgrey" }, // Label color
                    "& .MuiInputBase-input": { color: "white" }, // Input text color
                }}/>
            </StatBox>

            <StatBox>
                <StatField label="FF" sx={{
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#bfb606" }, // Default border color
                        "&:hover fieldset": { borderColor: "yellow" }, // Hover border
                        "&.Mui-focused fieldset": { borderColor: "yellow" }, // Focus border
                    },
                    "& .MuiInputLabel-root": { color: "yellow" }, // Label color
                    "& .MuiInputBase-input": { color: "white" }, // Input text color
                }}/>
            </StatBox>

            <StatBox>
                <StatField label="GE" sx={{
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "blue" }, // Default border color
                        "&:hover fieldset": { borderColor: "#2a7dd1" }, // Hover border
                        "&.Mui-focused fieldset": { borderColor: "#2a7dd1" }, // Focus border
                    },
                    "& .MuiInputLabel-root": { color: "#2a7dd1" }, // Label color
                    "& .MuiInputBase-input": { color: "white" }, // Input text color
                }}/>
            </StatBox>

            <StatBox>
                <StatField label="KO" sx={{
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "gray" }, // Default border color
                        "&:hover fieldset": { borderColor: "white" }, // Hover border
                        "&.Mui-focused fieldset": { borderColor: "white" }, // Focus border
                    },
                    "& .MuiInputLabel-root": { color: "white" }, // Label color
                    "& .MuiInputBase-input": { color: "white" }, // Input text color
                }}/>
            </StatBox>

            <StatBox>
                <StatField label="KK" sx={{
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#a16118" }, // Default border color
                        "&:hover fieldset": { borderColor: "orange" }, // Hover border
                        "&.Mui-focused fieldset": { borderColor: "orange" }, // Focus border
                    },
                    "& .MuiInputLabel-root": { color: "orange" }, // Label color
                    "& .MuiInputBase-input": { color: "white" }, // Input text color
                }}/>
            </StatBox>
        </Box>
    );
}

export default Stats;