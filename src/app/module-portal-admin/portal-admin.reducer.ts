import { ActionWrapper} from '../action-wrapper';

import { PortalAdminConstant } from './portal-admin.constants';

const initialState: string = 'Campaigns Page';

export function portalAdminReducer(state: string = initialState, action: ActionWrapper){
  switch (action.type) {
    case PortalAdminConstant.setState:
      return setState(state, action);

    default:
      return state;
  }
}

function setState(state: string, action: ActionWrapper) {
  return Object.assign({}, state, action.payload)
}
