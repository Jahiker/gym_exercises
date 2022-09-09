import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box mt={"80px"} bgcolor="#fff3f4">
      <Stack gap={"40px"} alignItems="center" px={"40px"} pt="24px">
        <img src={Logo} width="200px" height={"40px"} alt="Logo" />
        <Typography variant='h5' pb={"40px"} mt="20px">
          © All rights reserved - { year } - Jahiker Rojas
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer