import {Box, TextField} from "@mui/material";

const Notes = () =>
{
    return (
        <Box sx={{
          marginTop: '2%'
        }}>
            <TextField
                label="Notizen"
                multiline
                maxRows={999}
                sx={{
                    width: '100%',
                    height: '100%',
            }}
            />
        </Box>
    );
}

export default Notes;