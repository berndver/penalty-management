import { Add as AddIcon } from '@mui/icons-material';
import { FunctionComponent, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useNavigate } from 'react-router-dom';

import PageContainer from '../../components/common/PageContainer';
import PageFloatingButton from '../../components/common/PageFloatingButton';
import PageHeading from '../../components/common/PageHeading';
import TeamList from '../../components/common/TeamList';
import { TEAM_COLLECTION } from '../../constants/firebaseCollections';
import { selectTeams } from '../../redux-modules/firestore/selectors';

const TeamPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const teams = useSelector(selectTeams);

  useFirestoreConnect([{ collection: TEAM_COLLECTION, limit: 20 }]);

  const handleFloatingButtonClick = useCallback(() => {
    navigate({ pathname: '/teams/create' });
  }, [navigate]);

  return (
    <PageContainer>
      <PageHeading>Teams</PageHeading>
      <TeamList values={teams} />
      <PageFloatingButton color="primary" onClick={handleFloatingButtonClick}>
        <AddIcon />
      </PageFloatingButton>
    </PageContainer>
  );
};

export default TeamPage;
