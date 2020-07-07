import React from 'react'
import { Container, Grid,Typography, Box, Divider } from '@material-ui/core'

export const About = () => {
    return (
        <Container>
            <Grid container direction="row" justify="center" xt="12">
                <Typography variant="h3">
                    About Us
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum is latin, slightly jumbled, the remnants of a passage from Cicero's 'De finibus 
                    bonorum et malorum' 1.10.32, which begins 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                </Typography>

                <Typography variant="body1">
                    Lorem ipsum is latin, slightly jumbled, the remnants of a passage from Cicero's 'De finibus 
                    bonorum et malorum' 1.10.32, which begins 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum is latin, slightly jumbled, the remnants of a passage from Cicero's 'De finibus 
                    bonorum et malorum' 1.10.32, which begins 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum is latin, slightly jumbled, the remnants of a passage from Cicero's 'De finibus 
                    bonorum et malorum' 1.10.32, which begins 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum is latin, slightly jumbled, the remnants of a passage from Cicero's 'De finibus 
                    bonorum et malorum' 1.10.32, which begins 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum is latin, slightly jumbled, the remnants of a passage from Cicero's 'De finibus 
                    bonorum et malorum' 1.10.32, which begins 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum is latin, slightly jumbled, the remnants of a passage from Cicero's 'De finibus 
                    bonorum et malorum' 1.10.32, which begins 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                </Typography>

            </Grid>
            
            <Divider />
            <Box mt="8">
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}
                        Husnain Ahmed
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Box>
        </Container>
    )
}
