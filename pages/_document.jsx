import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='bn'>
      <Head>
        <meta name='brand_name' content='হক টিম্বেরস এন্ড স-মিল, Rangpur' />
        <meta
          name='keywords'
          content='saw-mill, best-wood-supplier-bd, কাঠের ব্লগ, হক টিম্বেরস এন্ড স-মিল'
        />

        <meta property='fb:app_id' content='100091314007749' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans+Bengali:wght@300;400&display=swap'
          rel='stylesheet'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
