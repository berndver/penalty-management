import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

import PageContainer from '../components/common/PageContainer';
import PageHeading from '../components/common/PageHeading';
import TeamList from '../components/common/TeamList';
import { TEAM_COLLECTION } from '../constants/firebaseCollections';
import { selectUserId } from '../redux-modules/firebase/selectors';
import { selectTeams } from '../redux-modules/firestore/selectors';

const HomePage: FunctionComponent = () => {
  const userId = useSelector(selectUserId);
  const teams = useSelector(selectTeams);

  useFirestoreConnect([{ collection: TEAM_COLLECTION, limit: 20, where: ['memberUserIds', 'array-contains', userId] }]);

  return (
    <PageContainer>
      <PageHeading>My Teams</PageHeading>
      <TeamList values={teams} />
    </PageContainer>
  );
};

export default HomePage;
