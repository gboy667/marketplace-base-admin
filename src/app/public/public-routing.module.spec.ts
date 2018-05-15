import { PublicRoutingModule } from './public-routing.module';

describe('PublicRoutingModule', () => {
  let publicRoutingModule: PublicRoutingModule;

  beforeEach(() => {
    publicRoutingModule = new PublicRoutingModule();
  });

  it('should create an instance', () => {
    expect(publicRoutingModule).toBeTruthy();
  });
});
