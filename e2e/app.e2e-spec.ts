import { EngineerDiaryClientPage } from './app.po';

describe('engineer-diary-client App', () => {
  let page: EngineerDiaryClientPage;

  beforeEach(() => {
    page = new EngineerDiaryClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
