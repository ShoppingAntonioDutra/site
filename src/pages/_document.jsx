import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br " className='scroll-smooth'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@600&family=Righteous&display=swap" rel="stylesheet" />
      </Head>
      <body className='flex justify-center items-center text-sm text-tema-site font-minhaFonte min-w-screen'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
