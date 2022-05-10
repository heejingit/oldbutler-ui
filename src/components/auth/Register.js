import React, { useState } from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import AuthForm from './AuthForm';
import AuthService from './service/AuthService';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <AuthForm rendering={
            <>
                <CardContent>
                    <Grid container justify="center" direction="column">
                    <h1>Sign Up</h1>
                    <TextField
                        required
                        id="outlined-required"
                        label="Username"
                        onChange={e => setUsername(e.target.value)}
                    />
                    <br />
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <br />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <br />
                    </Grid>
                    <Grid container justifyContent="flex-end">
                        <CardActions>
                            <Button variant="contained" onClick={e => AuthService.register(username, email, password)}>Sign Up</Button>
                        </CardActions>
                    </Grid>
                </CardContent>
            </>
        } />
    );
}

export default Register;