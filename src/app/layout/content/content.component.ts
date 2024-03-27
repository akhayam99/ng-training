import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngt-content',
  template: '<ng-content />',
  styleUrls: ['./content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class ContentComponent { }
