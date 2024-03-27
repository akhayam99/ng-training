import { Pipe, PipeTransform } from '@angular/core';
import { AppRoutes } from '../enum/AppRoutes';

@Pipe({ name: 'beautyRoute', standalone: true })

export class BeautyRoutePipe implements PipeTransform {
  transform(route: AppRoutes): string {
    switch (route) {
      case AppRoutes.EMPLOYEES: return 'Dipendenti'
      case AppRoutes.PAYROLLS: return 'Buste paga'
      case AppRoutes.MUSIC: return 'Canzoni'
      default: return 'Boh'
    }
  }
}
