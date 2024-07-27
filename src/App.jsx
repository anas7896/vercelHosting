import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import car from './assets/car 1.jpg'

const App = () => {
  return (
    <div>
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    <br /><br /><br /><br />
      <img width={500} src={car} alt="" />
    </div>
  )
}

export default App