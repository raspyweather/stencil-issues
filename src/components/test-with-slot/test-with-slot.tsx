import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'test-with-slot',
  styleUrl: 'test-with-slot.css',
  shadow: false,
})
export class TestWithSlot {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
