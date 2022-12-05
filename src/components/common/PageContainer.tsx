import { styled } from '@mui/material';

const PageContainer = styled('div')(({ theme }) => ({
  minHeight: '80vh',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  marginTop: theme.spacing(1),
}));

export default PageContainer;
