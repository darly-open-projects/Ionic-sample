import { ActionWrapper } from '../action-wrapper';

import { PortalAdminConstant } from './portal-admin.constants'

export class PortalAdminAction {
  static PortalAdminSetStateAction(data: string): ActionWrapper {
    return ActionWrapper.prepareAction({
      type: PortalAdminConstant.setState,
      payload: {data}
    });
  }
}

