import { Action } from '@ngrx/store';

export class ActionWrapper implements Action {
  type: string;

  static prepareAction (params: any) {
    return new ActionWrapper(params.type, params.payload);
  }

  constructor(type: string, public payload: any) {
    this.type = type;
  }
}
