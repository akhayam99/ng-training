import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { AppRoutes } from 'src/app/enum/AppRoutes';
import { BeautyRoutePipe } from 'src/app/pipes/beauty-route.pipe';

@Component({
  selector: 'ngt-sidebar-voice',
  template: '{{ route | beautyRoute }}',
  styleUrls: ['./voice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, BeautyRoutePipe]
})
export class SidebarVoiceComponent {

  @HostListener('click') onClick(): void {
    this.navigate.emit(this.route)
  }

  @Input() route!: AppRoutes

  @HostBinding('class.selected') @Input() selected: boolean = false

  @Output() navigate = new EventEmitter<AppRoutes>()
}
