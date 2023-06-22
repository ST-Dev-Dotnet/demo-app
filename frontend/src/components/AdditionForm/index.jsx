import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function AdditionForm() {
  const [result, setResult] = React.useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
        firstNumber: data.get('firstNumber'),
        secondNumber: data.get('secondNumber'),
    };
    try {
        if(!payload?.firstNumber || !payload?.secondNumber) {
            return setResult("Both number fields are required")
        }
        const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_API}/add`, payload);
        console.log({ data });
        setResult(`Total Sum: ${data}`);
    } catch (error) {
        console.log(error)
    }

  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Demo Addition App
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="first"
              label="First Number"
              name="firstNumber"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="secondNumber"
              label="Second Number"
              type="number"
              id="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            {
                result &&
                <Typography color={"green"}>{result}</Typography>
            }
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}