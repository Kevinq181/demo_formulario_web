import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Stack from '@mui/material/Stack';
const API = process.env.REACT_APP_API;

//Estilos de la modal
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const ReadData = () => {
    //Cambio de estado de la modal
    const [personas, setPersonas] = useState();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //Variables para los textfield
    const [id, setId] = useState("");
    const [names, setNames] = useState("");
    const [lastNames, setLastNames] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    //Forma para listar las personas
    const readPersonas = async () => {
        const response = await fetch(`${API}/personas`)
        const data = await response.json();
        setPersonas(data);
    }

    //Forma para establecer los campos del textfield dentro de la modal
    const update = async (id) => {
        const response = await fetch(`${API}/personas/${id}`);
        const data = await response.json();
        setId(id);
        setNames(data.names);
        setLastNames(data.lastNames);
        setAge(data.age);
        setAddress(data.address);
        setPhone(data.phone);
        setEmail(data.email);
    }

    //Peticion para la actulizacion de datos en la BDD
    const updatePersonas = async (e) => {
        e.preventDefault();
        console.log(id);
        await fetch(`${API}/personas/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                names,
                lastNames,
                age,
                address,
                phone,
                email
            })
        })
        await readPersonas();
        alert("Datos actualizados correctamente");
    }

    //Forma para eliminar las personas
    const deletePersonas = async (_id) => {
        const userResponse = window.confirm("¿Desea eliminar el registro?");
        if (userResponse) {
            await fetch(`${API}/personas/${_id}`, {
                method: 'DELETE'
            });
            await readPersonas();
        }
    }

    //Actulizar los campos de la tabla automaticamente
    useEffect(() => {
        readPersonas();
    }, [])

    return (
        <Container sx={{ marginLeft: "15%", marginTop: "5%" }}>
            <TableContainer component={Paper}>
                <Table sx={{ maxWidth: "lg" }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Nombres</TableCell>
                            <TableCell align="left">Apellidos</TableCell>
                            <TableCell align="left">Edad</TableCell>
                            <TableCell align="left">Direccion</TableCell>
                            <TableCell align="left">Telefono</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Operaciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {personas && personas.map(row => (
                            <TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                <TableCell component="th" scope="row">{row.names}</TableCell>
                                <TableCell align="left">{row.lastNames}</TableCell>
                                <TableCell align="left">{row.age}</TableCell>
                                <TableCell align="left">{row.address}</TableCell>
                                <TableCell align="left">{row.phone}</TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">
                                    <Button variant="contained" onClick={handleOpen} onMouseUp={e => update(row._id)} endIcon={<UpgradeIcon />}>Actualizar</Button>
                                    <Modal
                                        aria-labelledby="transition-modal-title"
                                        aria-describedby="transition-modal-description"
                                        open={open}
                                        onClose={handleClose}
                                        closeAfterTransition
                                        BackdropComponent={Backdrop}
                                        BackdropProps={{
                                            timeout: 500,
                                        }}
                                    >
                                        <Fade in={open}>
                                            <Box sx={style}>
                                                <Typography component="h1" variant="h4" align="center">
                                                    Datos personales <PersonAddAltIcon fontSize="large" ></PersonAddAltIcon>
                                                </Typography>
                                                <Grid container spacing={3}>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField required id="names" name="names" label="Nombres" fullWidth variant="standard"
                                                            onChange={e => setNames(e.target.value)}
                                                            value={names} />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField required id="lastNames" name="lastNames" label="Apellidos" fullWidth variant="standard" onChange={e => setLastNames(e.target.value)}
                                                            value={lastNames} />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField required id="age" name="age" label="Edad" fullWidth variant="standard"
                                                            onChange={e => setAge(e.target.value)}
                                                            value={age} />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField required id="address" name="address" label="Dirección" fullWidth variant="standard"
                                                            onChange={e => setAddress(e.target.value)}
                                                            value={address} />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField required id="phone" name="phone" label="Teléfono" fullWidth variant="standard"
                                                            onChange={e => setPhone(e.target.value)}
                                                            value={phone} />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField required id="email" name="email" label="email" fullWidth type="email" variant="standard"
                                                            onChange={e => setEmail(e.target.value)}
                                                            value={email} />
                                                    </Grid>
                                                    <Stack
                                                        sx={{ pt: 5, ml: 42 }}
                                                        direction="row"
                                                        spacing={6}
                                                        justifyContent="center"
                                                    >
                                                        <Button variant="contained" onClick={updatePersonas}>Actualizar</Button>
                                                        <Button variant="outlined" onClick={handleClose}>Cancelar</Button>
                                                    </Stack>
                                                </Grid>
                                            </Box>
                                        </Fade>
                                    </Modal>
                                    <Button sx={{ marginLeft: "4px" }} onClick={e => deletePersonas(row._id)} variant="outlined" startIcon={<DeleteIcon />}>
                                        Eliminar
                                    </Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );

}



