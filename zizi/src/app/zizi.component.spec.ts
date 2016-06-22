import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ZiziAppComponent } from '../app/zizi.component';

beforeEachProviders(() => [ZiziAppComponent]);

describe('App: Zizi', () => {
  it('should create the app',
      inject([ZiziAppComponent], (app: ZiziAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'zizi works!\'',
      inject([ZiziAppComponent], (app: ZiziAppComponent) => {
    expect(app.title).toEqual('zizi works!');
  }));
});
