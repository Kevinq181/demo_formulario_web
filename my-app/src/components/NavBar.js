import *  as React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CreateIcon from '@mui/icons-material/Create';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import HomeIcon from '@mui/icons-material/Home';
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        }
    }
});
export const NavBar = () => {

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="absolute"

                    elevation={0}
                    sx={{
                        position: 'relative',
                        borderBottom: (t) => `1px solid ${t.palette.divider}`,
                    }}
                >
                    <Container maxWidth="sm"  >
                        <Toolbar disableGutters >
                            <LibraryBooksIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#fff' }} />
                            <Typography variant="h5" color="#fff" noWrap  >
                                Formulario Web
                            </Typography>

                            <Box sx={{ width: 330, marginLeft: "3%" }}>
                                <BottomNavigation
                                    showLabels
                                >
                                    <BottomNavigationAction sx={{ color: "#fff", bgcolor: "primary.main" }} label="Inicio" icon={<HomeIcon />} href="/" />
                                    <BottomNavigationAction sx={{ color: "#fff", bgcolor: "primary.main" }} label="Registrar Datos" icon={<CreateIcon />} href="/create" />
                                    <BottomNavigationAction sx={{ color: "#fff", bgcolor: "primary.main" }} label="Listar Datos" icon={<FactCheckIcon />} href="/read_data" />
                                </BottomNavigation>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>

            </ThemeProvider>

        </>
    )

}
