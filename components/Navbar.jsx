import React from 'react'
import styles from "../styles/Home.module.scss";
import Link from 'next/link'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Navbar() {
    return (
        <AppBar position="static" className={styles.appbar}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Fit Tool
                </Typography>
                <Button color="inherit"><Link href="/">Home</Link></Button>
                <Button color="inherit"><Link href="/about">About</Link></Button>
                <Button color="inherit"><Link href="/contact">Contact</Link></Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
