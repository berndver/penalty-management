import { styled, Typography, TypographyProps } from '@mui/material';
import { FunctionComponent } from 'react';

const Heading = styled(Typography)`
  margin-top: 15px;
`;
const PageHeading: FunctionComponent<Omit<TypographyProps, 'color'>> = (props) => <Heading {...props} variant="h5" />;

export default PageHeading;
