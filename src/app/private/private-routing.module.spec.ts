import { PrivateRoutingModule } from './private-routing.module';

describe('PrivateRoutingModule', () => {
  let privateRoutingModule: PrivateRoutingModule;

  beforeEach(() => {
    privateRoutingModule = new PrivateRoutingModule();
  });

  it('should create an instance', () => {
    expect(privateRoutingModule).toBeTruthy();
  });
});
