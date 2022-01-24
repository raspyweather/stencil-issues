import { newE2EPage } from '@stencil/core/testing';

describe('test-with-slot', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<test-with-slot></test-with-slot>');

    const element = await page.find('test-with-slot');
    expect(element).toHaveClass('hydrated');
  });
});
