import ThemeConext from '@/context/ThemeContext'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (

    <Html lang="en">
      <Head />
      <ThemeConext.Provider value={{ color: 'dark' }}>
        <body className='bg-white flex flex-col' >
          <Main />
          <NextScript />
        </body>
      </ThemeConext.Provider>
    </Html>

  )
}
