import { Box, Button, TextField, Typography } from '@mui/material';
import React, { FunctionComponent, useCallback, useState } from 'react';

const CreateTeamPage: FunctionComponent = () => {
  const [loading, isLoading] = useState(false);
  const [name, setName] = useState('');
  const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const handleClick = useCallback(async () => {}, []);

  return (
    <Box sx={{ marginTop: '15px' }}>
      <Typography variant="h5">Create a Team</Typography>
      <Box sx={{ margin: '1em 0' }}>
        <TextField label="Name" defaultValue={name} onChange={handleNameChange} required />
      </Box>
      <Button variant="contained" onClick={handleClick} disabled={loading}>
        Create Team
      </Button>
    </Box>
  );
};

export default CreateTeamPage;
