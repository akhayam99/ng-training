import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/enum/AppRoutes';
import { getCurrentLocation } from 'src/app/utils';
import { SidebarVoiceComponent } from './voice/voice.component';

@Component({
  selector: 'ngt-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    SidebarVoiceComponent,
  ]
})
export class SidebarComponent implements OnInit {
  _myRoutes = new Set(Object.values(AppRoutes))
  router = inject(Router)

  selected: AppRoutes | null = null

  ngOnInit(): void {
    this.selected = getCurrentLocation()
  }

  navigateTo(value: AppRoutes): void {
    this.selected = value
    this.router.navigate([value])
  }
}
