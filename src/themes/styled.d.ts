import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      featuredBackground: string
      featuredFontColor: string
      featuredBackgroundDarken: string

      title: string
      text: string
      textLight: string
      textDarken: string
    }
    sizes: {
      box: string
      borderRadius: string
    }
  }
}
