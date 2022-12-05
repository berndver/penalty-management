import { Fab, styled } from '@mui/material';

const PageFloatingButton = styled(Fab)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  bottom: theme.spacing(2),
}));

export default PageFloatingButton;
