import { newE2EPage } from '@stencil/core/testing';

describe('test-without-slot - works :)', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<test-without-slot></test-without-slot>');

    const element = await page.find('test-without-slot');
    expect(element).toHaveClass('hydrated');
  });
});
