import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@600&family=Righteous&display=swap" rel="stylesheet" />
      </Head>
      <body className='flex bg-zinc-300 justify-center items-center text-sm text-tema-site font-minhaFonte'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
