import type { ToolRoute } from '../../../../shared/tools/src'

export const routes: ToolRoute[] = [
  {
    name: 'roman-numeral-converter',
    path: '/tools/roman-numeral-converter',
    component: () => import('./RomanNumeralConverterView.vue'),
  },
] as const
