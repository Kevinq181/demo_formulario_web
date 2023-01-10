import React from 'react'
import '../App.css';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center" marginTop={"3%"}>
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/Kevinq181">
                Demo de formulario web 2023.
            </Link>
            
        </Typography>
    );
}


export const Copy = () => {
    return (
        <Copyright>

        </Copyright>
    )
}
