import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { selectAll } from '../../redux-modules/domain/penalty/selectors';
import { List, ListItem } from '@mui/material';

const PenaltyList: FunctionComponent = () => {
  const penalties = useSelector(selectAll);

  return (
    <List>
      {penalties.map((elem) => (
        <ListItem></ListItem>
      ))}
    </List>
  );
};

export default PenaltyList;
