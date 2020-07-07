import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'

export const Home = () => {
    return (
        <Container>
            <Grid mt="12" >
                {/* <Grid mt="3"></Grid> */}
                {/* <Grid mt="6"> */}
                    <Typography variant="h1">
                        Homepage
                    </Typography>
                {/* </Grid> */}
                {/* <Grid mt="3"></Grid> */}
            </Grid>
        </Container>
    )
}
