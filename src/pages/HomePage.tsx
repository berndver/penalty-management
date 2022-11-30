import { FunctionComponent } from 'react';
import { Box, Typography } from '@mui/material';
import PenaltyList from '../components/common/PenaltyList';

const HomePage: FunctionComponent = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h5">Recent Penalties</Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
