import React from 'react';
import { Box, Container, Stack, Typography, useTheme } from '@mui/material'
import { flexbox } from '@mui/system';

import stack_image from './stack.svg';

function Introduction() {
    const theme = useTheme();

    return (
        <Box
            //sx={{ minHeight: '100%', minWidth: '100%', bgcolor: 'primary.light'}}
        >
            <Stack
                sx={{
                    py: 4
                }}
                direction="row"
                spacing={2}
                justifyContent="center"
            >
                <Box>
                    <Typography
                        component="h2"
                        variant="h2"
                        align="center"
                        color="text.primary"
                    >
                        Hello!
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Container
                        sx={{
                            flexGrow: 1,
                        }}
                    ></Container>
                    <Typography
                        variant="h5"
                        color="text.secondary"
                        paragraph
                    >
                        I'm Harry Kwon, a full-stack software developer.
                        <br />
                        Please take a look around!
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
}

export default Introduction;