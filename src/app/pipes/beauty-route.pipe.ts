import { Pipe, PipeTransform } from '@angular/core';
import { AppRoutes } from '../enum/AppRoutes';
import { beautyRoute } from '../utils';

@Pipe({ name: 'beautyRoute', standalone: true })

export class BeautyRoutePipe implements PipeTransform {
  transform = (route: AppRoutes): string => beautyRoute(route)
}
