import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-gray-800 flex flex-col' >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
