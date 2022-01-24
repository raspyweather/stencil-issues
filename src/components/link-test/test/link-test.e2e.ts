import { newE2EPage } from '@stencil/core/testing';

describe('link-test', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<link-test></link-test>');

    const element = await page.find('link-test');
    expect(element).toHaveClass('hydrated');
  });
});
