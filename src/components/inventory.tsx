import {
    Box,
    Button, Checkbox, Dialog, DialogTitle, FormControlLabel, IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, TextField, Tooltip,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import {useGlobalState} from "./global-state";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


interface ItemDialogProps {
    open: boolean;
    onClose: (value: string) => void;
}

type Item = {
    name: string;
    amount: number;
    price: number;
    weight: number;
    note: string;
}
function SimpleDialog(props: ItemDialogProps) {
    const {
        items, setItems, silver, setSilver
    } = useGlobalState();

    const { onClose, open} = props;

    const [name, setName] = useState("");
    const [note, setNote] = useState("");
    const [count, setCount] = useState(1);
    const [value, setValue] = useState(0);
    const [pay, setPay] = useState(false)
    const [weight, setWeight] = useState(0);

    const handleClose = () => {

        const newItem: Item = {
            name: name,
            amount: count,
            price: value,
            weight: weight,
            note: note,
        };

        setItems([...items, newItem])

        if(pay)
        {
            setSilver(silver-(value*count))
        }
    };

    const handleCloseCancel = () => {
        onClose("cancelled");
    }

    const changePay = () => {
        setPay(!pay)
    }

    return (
        <Dialog onClose={handleCloseCancel} open={open} >
            <Box gap={1} sx={{display: 'flex', flexDirection: 'column', backgroundColor: "#2a2927", padding: '10px', justifyContent:'space-between'}}>
                <DialogTitle >Füge einen neuen Gegenstand hinzu:</DialogTitle>
                <Box sx={{display: 'flex', justifyContent:'space-evenly', alignItems: 'center', }}>
                    <Typography>Name:</Typography>
                    <TextField value={name}
                               onChange={(e) => setName(e.target.value)}
                               variant="outlined"
                    />
                </Box>

                <Box sx={{display: 'flex', justifyContent:'space-evenly', alignItems: 'center', }}>
                    <Typography>Wert:</Typography>
                    <TextField
                        variant="outlined"
                        type="number"
                        size="small"
                        {...props}
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                        InputProps={{ inputProps: { min: 0} }}
                        sx={{
                            maxWidth: '100px',
                            minWidth: '65px',
                        }}
                    />

                    <Typography>Gewicht:</Typography>
                    <TextField
                        variant="outlined"
                        type="number"
                        size="small"
                        {...props}
                        value={weight}
                        onChange={(e) => setWeight(Number(e.target.value))}
                        InputProps={{ inputProps: { min: 0} }}
                        sx={{
                            maxWidth: '100px',
                            minWidth: '65px',
                        }}
                    />
                </Box>

                <Box sx={{display: 'flex', justifyContent:'space-evenly', alignItems: 'center', }}>
                    <Typography>Anzahl:</Typography>
                    <TextField
                        variant="outlined"
                        type="number"
                        size="small"
                        {...props}
                        value={count}
                        onChange={(e) => setCount(Number(e.target.value))}
                        InputProps={{ inputProps: { min: 0} }}
                        sx={{
                            maxWidth: '50px',
                            minWidth: '65px',
                        }}
                    />

                    <Typography>Notizen:</Typography>
                    <TextField value={note}
                               onChange={(e) => setNote(e.target.value)}
                               variant="outlined"

                               sx={{maxWidth: 150}}
                    />
                </Box>

                <FormControlLabel control={<Checkbox/>} onChange={changePay} label="Wert von Geld abziehen" />

                <Box sx={{display: 'flex', justifyContent:'space-evenly'}}>
                    <Button variant="contained" color="error" onClick={handleCloseCancel}>Abbrechen</Button>
                    <Button variant="contained" color="success" onClick={handleClose}>OK</Button>
                </Box>

            </Box>
        </Dialog>
    );
}
const Inventory = () =>
{
    const {
        KK,items, setItems
    } = useGlobalState();

    const [open, setOpen] = React.useState(false);

    const totalWeight = () => {
        let weight : number = 0;

        for(let i = 0; i < items.length; i++)
        {
            const itemWeight = Number(items[i].weight) || 0;
            const itemAmount = Number(items[i].amount) || 0;

            weight += itemWeight * itemAmount;
        }

        return Math.round(weight);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
    };

    const removeItem = (indexToRemove: number) => {
        const updatedItems = [...items];

        if (updatedItems[indexToRemove].amount > 1) {
            updatedItems[indexToRemove] = {
                ...updatedItems[indexToRemove],
                amount: updatedItems[indexToRemove].amount - 1
            };
            setItems(updatedItems);
        } else {
            setItems(items.filter((_, index) => index !== indexToRemove));
        }
    };

    const addItem = (indexToAdd: number) => {
        const updatedItems = [...items];

        updatedItems[indexToAdd] = {
            ...updatedItems[indexToAdd],
            amount: updatedItems[indexToAdd].amount + 1
        };
        setItems(updatedItems);

    };

    return (
        <TableContainer>
            <Table size="small" sx={{width: '100%'}}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{width: '60%', borderRight: '1px solid', borderColor: '#ecb54a'}}>Gegenstand</TableCell>
                        <TableCell sx={{width: '10%', borderRight: '1px solid', borderColor: '#ecb54a'}}>#</TableCell>
                        <TableCell sx={{width: '10%', borderRight: '1px solid', borderColor: '#ecb54a'}}>Wert</TableCell>
                        <TableCell sx={{width: '10%', borderRight: '1px solid', borderColor: '#ecb54a'}}>Gewicht</TableCell>
                        <TableCell sx={{width: '5%',borderColor: '#ecb54a'}}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((i, index) => {
                            return(
                                <TableRow>
                                    <TableCell sx={{width: '60%', borderRight: '1px solid', borderColor: '#ecb54a'}}>
                                        <Box sx={{display:'flex', justifyContent: 'space-between'}}>
                                            <Typography>
                                                {i.name}
                                            </Typography>

                                            {i.note?.trim() && (
                                                <Tooltip title={i.note}>
                                                    <InfoOutlineIcon sx={{"&:hover":{color: "gray"}}}/>
                                                </Tooltip>
                                            )}
                                        </Box>
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
                                    <TableCell sx={{width: '15%',  borderRight: '1px solid', borderColor: '#ecb54a'}}>
                                        <Typography>
                                            {i.weight}
                                        </Typography>
                                    </TableCell>
                                    <TableCell sx={{ borderColor: '#ecb54a'}}>
                                        <Box sx={{display: 'flex', flexGrow: 0.4}}>
                                            <IconButton onClick={() => removeItem(index)}>
                                                <HighlightOffIcon sx={{color:'red', scale: 0.8}}/>
                                            </IconButton>
                                            <IconButton onClick={() => addItem(index)}>
                                                <AddCircleOutlineIcon sx={{color:'green', scale: 0.8}}/>
                                            </IconButton>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    )}
                    <TableRow>
                        <TableCell align="center" colSpan={5} sx={{borderColor: '#ecb54a'}}>
                            <Button variant="contained" onClick={handleClickOpen}>
                                GEGENSTAND HINZUFÜGEN
                            </Button>
                            <SimpleDialog open={open}  onClose={handleClose}/>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell align="center" colSpan={5}  sx={{borderColor: '#ecb54a'}}>
                            <Box sx={{display:'flex', justifyContent: 'center'}}>
                                <Typography>Weight:{totalWeight()}/{KK*2}</Typography>
                            </Box>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Inventory;