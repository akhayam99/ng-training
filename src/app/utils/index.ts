import { AppRoutes } from "../enum/AppRoutes"


export function isNullOrUndefined(value: any): boolean {
  return value === null || value === undefined
}

export function getCurrentLocation(): AppRoutes {
  const location = window.location.href.replace(window.location.origin, '')

  if (!location)
    return AppRoutes.DEFAULT

  return (location.includes('/') ? location.split('/')[1] : location) as AppRoutes
}
