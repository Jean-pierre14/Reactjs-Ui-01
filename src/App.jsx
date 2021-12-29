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
        </>
    )
}
export default App