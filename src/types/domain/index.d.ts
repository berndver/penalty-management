type BaseRecord = {
  id: string;
};

export type Penalty = BaseRecord & {
  templateId: string;
  penalizedUserId: string;
  createdUserId: string;
};

export type PenaltyTemplate = BaseRecord & {
  name: string;
  centPrice: number;
};

export type User = BaseRecord & {
  displayName?: string;
  email: string;
  photoURL?: string;
};

export type Team = BaseRecord & {
  name: string;
  memberUserIds?: Array<string>;
  adminUserIds?: Array<string>;
};
