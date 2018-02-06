import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as rootReducer from '../../app.reducer';
import { PortalAdminAction } from '../../module-portal-admin/portal-admin.actions';

@Injectable()
export class PageService {
  constructor(private store: Store<rootReducer.State>) {
  }

  setPage(page: string) {
    this.store.dispatch(PortalAdminAction.PortalAdminSetStateAction(page ? page : 'Campaigns Page'));
  }
}
