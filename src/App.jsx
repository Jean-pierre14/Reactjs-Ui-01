import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from "@material-ui/icons";


const App = () => {
    return(
        <>

            <CssBaseline/>
            <AppBar>
                <Toolbar>
                    <PhotoCamera/>
                    <Typography variant="h6">
                        Racine Studio
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Container>
                    <Typography variant="h1" align="center" gutterBottom>Welcome to Racine14</Typography>
                </Container>
            </main>
            <Container fixed>
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
            </Container>
        </>
    )
}
export default App