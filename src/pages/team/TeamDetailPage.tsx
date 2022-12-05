import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useParams } from 'react-router-dom';

import PageContainer from '../../components/common/PageContainer';
import PageHeading from '../../components/common/PageHeading';
import { TEAM_COLLECTION } from '../../constants/firebaseCollections';
import { selectTeam } from '../../redux-modules/firestore/selectors';
import { AppState } from '../../types/appState';

const TeamDetailPage: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const team = useSelector((state: AppState) => selectTeam(state, id));

  useFirestoreConnect([{ collection: TEAM_COLLECTION, doc: id }]);

  return (
    <PageContainer>
      <PageHeading>{team?.name}</PageHeading>
    </PageContainer>
  );
};

export default TeamDetailPage;
