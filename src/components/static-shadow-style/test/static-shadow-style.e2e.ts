import { newE2EPage } from '@stencil/core/testing';

describe('static-shadow-style', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<static-shadow-style></static-shadow-style>');

    const element = await page.find('static-shadow-style');
    expect(element).toHaveClass('hydrated');
  });
});
