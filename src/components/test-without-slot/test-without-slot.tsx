import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'test-without-slot',
  styleUrl: 'test-without-slot.css',
  shadow: false,
})
export class TestWithoutSlot {

  render() {
    return (
      <Host></Host>
    );
  }

}
