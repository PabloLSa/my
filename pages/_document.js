import { Html, Head, Main, NextScript } from 'next/document'
import ThemeContext from '../context/ThemeContext';

export default function Document() {
  return (
<ThemeContext.Provider value={{ color: "dark" }}>
<Html lang="en">
      <Head />
        <body>
          <Main />
          <NextScript />
        </body>
    </Html>
</ThemeContext.Provider>
    

  )
}
