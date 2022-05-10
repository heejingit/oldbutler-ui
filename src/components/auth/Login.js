import React, { useState } from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import AuthForm from './AuthForm';
import AuthService from './service/AuthService';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <AuthForm rendering={
            <>
                <CardContent>
                    <Grid container justify="center" direction="column">
                    <h1>Sign In</h1>
                    <TextField
                        required
                        id="outlined-required"
                        label="Username"
                        onChange={e => setUsername(e.target.value)}
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
                            <Button variant="contained" onClick={e => AuthService.login(username, password)}>Sign In</Button>
                        </CardActions>
                    </Grid>
                </CardContent>
            </>
        } />
    );
}

export default Login;