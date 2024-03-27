import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngt-empty-state',
  template: '{{ message }}',
  standalone: true,
})
export class EmptyStateComponent {
  @Input() message: string = `No items found`;
}
