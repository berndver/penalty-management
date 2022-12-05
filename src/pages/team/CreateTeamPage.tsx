import { Box, Button, styled, TextField } from '@mui/material';
import React, { FunctionComponent, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';

import PageContainer from '../../components/common/PageContainer';
import PageHeading from '../../components/common/PageHeading';
import { TEAM_COLLECTION } from '../../constants/firebaseCollections';
import { selectUserId } from '../../redux-modules/firebase/selectors';
import { Team } from '../../types/domain';

const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CreateButton = styled(Button)`
  align-self: center;
`;
const CreateTeamPage: FunctionComponent = () => {
  const firestore = useFirestore();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const userId = useSelector(selectUserId);

  const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const handleClick = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await firestore.add<Omit<Team, 'id'>>(TEAM_COLLECTION, {
        name,
        adminUserIds: [userId],
        memberUserIds: [userId],
      });
      console.log('res', res);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [firestore, name, userId]);

  return (
    <PageContainer>
      <PageHeading>Create a Team</PageHeading>
      <FormContainer>
        <TextField label="Name" defaultValue={name} onChange={handleNameChange} required />
        <CreateButton variant="contained" onClick={handleClick} disabled={isLoading}>
          Create Team
        </CreateButton>
      </FormContainer>
    </PageContainer>
  );
};

export default CreateTeamPage;
