import { ActionReducerMap } from '@ngrx/store';

import { portalAdminReducerInfo } from './module-portal-admin/portal-admin.info';

export interface State {
  portalAdmin: any;
}

export const reducers: ActionReducerMap<State> = {
  ...portalAdminReducerInfo
};
