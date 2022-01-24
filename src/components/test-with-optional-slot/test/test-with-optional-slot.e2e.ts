import { newE2EPage } from '@stencil/core/testing';

describe('test-with-optional-slot', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<test-with-optional-slot></test-with-optional-slot>');

    const element = await page.find('test-with-optional-slot');
    expect(element).toHaveClass('hydrated');
  });
});
