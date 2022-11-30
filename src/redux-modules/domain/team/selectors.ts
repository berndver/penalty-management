import { entityAdapter } from './entityAdapter';

export const { selectAll, selectById, selectEntities, selectIds, selectTotal } = entityAdapter.getSelectors();
