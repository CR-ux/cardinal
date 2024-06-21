import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { Autocomplete, TextField, Box, Button, ThemeProvider } from '@mui/material';
import tarotData from '../data/tarot.json';
import CustomPopper from './CustomPopper'; // Import the custom Popper component
import theme from '../theme';

const TarotForm = () => {
  const [tarotCards, setTarotCards] = useState([]);

  useEffect(() => {
    // Load the tarot data from the JSON file
    setTarotCards(tarotData.tarot);
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <Formik
      initialValues={{
        north: '',
        south: '',
        east: '',
        west: '',
        center: ''
      }}
      onSubmit={(values) => {
        console.log('Form Values:', values);
      }}
    >
      {({ handleSubmit, setFieldValue }) => (
        <Form onSubmit={handleSubmit}>
          <Box 
            sx={{ 
              position: 'relative', 
              minHeight: '180vh', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}
          >
            {/* North Input */}
            <Box 
              height={450}
              width={275} 
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={2}
              sx={{ 
                border: '2px solid grey', 
                position: 'absolute', 
                top: '0', 
                left: '50%', 
                transform: 'translate(-50%, 0)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            >
              <Autocomplete
                options={tarotCards}
                getOptionLabel={(option) => option.name}
                PopperComponent={CustomPopper} // Use the custom Popper component
                onChange={(event, value) => setFieldValue('north', value ? value.name : '')}
                renderInput={(params) => <TextField {...params} label="North" variant="outlined" fullWidth />}
              />
            </Box>

            {/* West Input */}
            <Box 
              height={450}
              width={230} 
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={2}
              sx={{ 
                border: '2px solid grey', 
                position: 'absolute', 
                top: '50%', 
                left: '0', 
                transform: 'translate(0, -50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            >
              <Autocomplete
                options={tarotCards}
                getOptionLabel={(option) => option.name}
                PopperComponent={CustomPopper} // Use the custom Popper component
                onChange={(event, value) => setFieldValue('west', value ? value.name : '')}
                renderInput={(params) => <TextField {...params} label="West" variant="outlined" fullWidth />}
              />
            </Box>

            {/* East Input */}
            <Box 
              height={450}
              width={230} 
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={2}
              sx={{ 
                border: '2px solid grey', 
                position: 'absolute', 
                top: '50%', 
                right: '0', 
                transform: 'translate(0, -50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            >
              <Autocomplete
                options={tarotCards}
                getOptionLabel={(option) => option.name}
                PopperComponent={CustomPopper} // Use the custom Popper component
                onChange={(event, value) => setFieldValue('east', value ? value.name : '')}
                renderInput={(params) => <TextField {...params} label="East" variant="outlined" fullWidth />}
              />
            </Box>

            {/* South Input */}
            <Box 
              height={450}
              width={275} 
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={2}
              sx={{ 
                border: '2px solid grey', 
                position: 'absolute', 
                bottom: '0', 
                left: '50%', 
                transform: 'translate(-50%, 0)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            >
              <Autocomplete
                options={tarotCards}
                getOptionLabel={(option) => option.name}
                PopperComponent={CustomPopper} // Use the custom Popper component
                onChange={(event, value) => setFieldValue('south', value ? value.name : '')}
                renderInput={(params) => <TextField {...params} label="South" variant="outlined" fullWidth />}
              />
            </Box>

            {/* Center Input */}
            <Box 
              height={450}
              width={275} 
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={2}
              sx={{ 
                border: '2px solid grey', 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            >
              <Autocomplete
              
                options={tarotCards}
                getOptionLabel={(option) => option.name}
                PopperComponent={CustomPopper} // Use the custom Popper component
                onChange={(event, value) => setFieldValue('center', value ? value.name : '')}
                renderInput={(params) => <TextField {...params} label="Center" variant="outlined" fullWidth />}
                
              />
            </Box>

            <Button 
              type="submit" 
              variant="text" 
              color="primary" 
              sx={{ 
                maxWidth: '300px', 
                maxHeight: '300px', 
                minWidth: '300px', 
                minHeight: '300px',
                borderRadius: 79,
                position: 'absolute',
                color: 'black',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              TEST
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
    </ThemeProvider>
  );
};

export default TarotForm;
