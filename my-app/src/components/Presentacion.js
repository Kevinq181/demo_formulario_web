import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export const Presentacion = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="md">
                        <Typography
                            component="h1"
                            variant="h4"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Demo de formulario web para registro de personas
                        </Typography>
                        <Typography fontSize={25} align="justify" color="text.secondary" paragraph>
                            <br>
                            </br>
                            Formulario web para la Creación, Modificación y Eliminación de Personas. Desarrollado en REACT, y la parte del BACK-END en el lenguaje PYTHON con la integracion de la libreria de Flask. El repositorio de datos esta creado en MongoDB Cloud.

                            <br>
                            </br>

                        </Typography>
                        <h3>
                            Repositorio de datos (BACK-END): <a href='https://github.com/public-apis/public-apis'>datos</a>
                        </h3>

                        <h3>
                            Repositorio de datos (FRONT-END): <a href='https://github.com/public-apis/public-apis'>datos</a>
                        </h3>
                    </Container>
                </Box>

            </main>

        </ThemeProvider>
    );
}
