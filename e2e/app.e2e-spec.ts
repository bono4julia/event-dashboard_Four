import { EventDashboardFourPage } from './app.po';

describe('event-dashboard-four App', () => {
  let page: EventDashboardFourPage;

  beforeEach(() => {
    page = new EventDashboardFourPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
