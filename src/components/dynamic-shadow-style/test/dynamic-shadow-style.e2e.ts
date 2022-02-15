import { newE2EPage } from '@stencil/core/testing';

describe('dynamic-hadow-style', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dynamic-hadow-style></dynamic-hadow-style>');

    const element = await page.find('dynamic-hadow-style');
    expect(element).toHaveClass('hydrated');
  });
});
