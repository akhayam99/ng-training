import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
	selector: 'ngt-loader',
	template: '<mat-spinner [diameter]="32"/>',
	styleUrls: ['./loader.component.scss'],
	standalone: true,
	imports: [MatProgressSpinnerModule],
})
export class LoaderComponent {
	message: string = `loading...`;
}
