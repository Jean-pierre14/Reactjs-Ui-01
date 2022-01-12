import React from "react";
import {
  Typography,
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Racine Studio</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h1" align="center" gutterBottom>
          Welcome to Racine14
        </Typography>
        <Box color="text.primary" m={1}>
          <Button color="success">Button</Button>
        </Box>
      </Container>
      <Container fixed>
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        />
      </Container>
    </>
  );
};
export default App;
