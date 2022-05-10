import * as React from 'react';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const AuthForm = props => {
    return (
        <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}>
            <Container maxWidth="sm">
                <Card sx={{ minWidth: 275 }}>
                    {props.rendering}
                </Card>
            </Container>    
        </Grid>
    );
}

export default AuthForm;