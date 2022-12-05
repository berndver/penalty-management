import { Groups as GroupsIcon } from '@mui/icons-material';
import { Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Team } from '../../types/domain';
import { TeamDetailRoute } from './Routes';

type TeamListProps = {
  values: Array<Team>;
};
const TeamList: FunctionComponent<TeamListProps> = ({ values }) => {
  const navigate = useNavigate();

  const handleClick = useCallback(
    (value: Team) => {
      navigate({ pathname: `/${TeamDetailRoute.path?.replace(':id', value.id)}` });
    },
    [navigate]
  );

  return (
    <List>
      {values.map((elem, index) => (
        <>
          <ListItem onClick={() => handleClick(elem)}>
            <ListItemAvatar>
              <GroupsIcon />
            </ListItemAvatar>
            <ListItemText>{elem.name}</ListItemText>
          </ListItem>
          {index !== values.length - 1 && <Divider />}
        </>
      ))}
    </List>
  );
};

export default TeamList;
