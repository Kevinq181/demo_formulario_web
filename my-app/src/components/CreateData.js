import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Button from '@mui/material/Button';

const API = process.env.REACT_APP_API;

const theme = createTheme();
export const CreateData = () => {

    //Variables para settear los textfields
    const [names, setNames] = useState("");
    const [lastNames, setLastNames] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    //Método para registrar los datos de las personas
    const createPersonas = async (e) => {
        e.preventDefault();
        await fetch(`${API}/personas`, {
            method: 'POST',
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
        alert("Registro correcto");
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        <form onSubmit={createPersonas}>
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
                                    <TextField required id="email" name="email" label="Correo Electrónico" fullWidth type="email" variant="standard"
                                        onChange={e => setEmail(e.target.value)}
                                        value={email} />
                                </Grid>

                                <Button variant="contained" onClick={createPersonas} className='formulario_boton' style={{ margin: '0 auto', display: "flex", marginTop: "3em" }}>Guardar</Button>

                            </Grid>
                        </form>
                    </Paper>
                </Container>
            </ThemeProvider>

        </>
    )
}
