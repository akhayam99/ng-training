import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngt-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tutorial1Component { }
