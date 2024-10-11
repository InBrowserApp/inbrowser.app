export interface GeneralInfoOptions {
  name: string
  short_name: string
  description: string
  start_url: string
  display: 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser'
  theme_color: string
  theme_color_dark_enabled: boolean
  theme_color_dark: string | undefined
  background_color: string
  path: string
}
