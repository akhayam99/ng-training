import { AppRoutes } from "../enum/AppRoutes"
import { BookComponent } from "../pages/book/book.component"
import { MusicComponent } from "../pages/music/music.component"
import { VideogameComponent } from "../pages/videogame/videogame.component"

export function uniqueArray<T>(array: T[]): T[] {
  return Array.from(new Set(array)) as T[]
}

export function beautyRoute(route: AppRoutes): string {
  switch (route) {
    case AppRoutes.BOOK: return 'Libri'
    case AppRoutes.VIDEOGAME: return 'Videogiochi'
    case AppRoutes.MUSIC: return 'Canzoni'
    default: return 'Ma che spacchio ne so scusi'
  }
}

export function componentRoute(route: AppRoutes): any {
  switch (route) {
    case AppRoutes.BOOK: return BookComponent
    case AppRoutes.VIDEOGAME: return VideogameComponent
    case AppRoutes.MUSIC: return MusicComponent
    default: return 'Ma che spacchio ne so scusi'
  }
}

export function isNullOrUndefined(value: any): boolean {
  return value === null || value === undefined
}

export function getCurrentLocation(): AppRoutes {
  const location = window.location.href.replace(window.location.origin, '')

  if (!location)
    return AppRoutes.DEFAULT

  return (location.includes('/') ? location.split('/')[1] : location) as AppRoutes
}
