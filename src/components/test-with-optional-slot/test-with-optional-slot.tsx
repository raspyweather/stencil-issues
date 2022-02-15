import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'test-with-optional-slot',
  styleUrl: 'test-with-optional-slot.css',
  shadow: false,
})
export class TestWithOptionalSlot {

  /** enables or disables slot */
  @Prop()
  public useSlot: boolean;

  render() {
    return (<Host>
      {this.useSlot && <slot></slot>}
    </Host>);
  }

}
