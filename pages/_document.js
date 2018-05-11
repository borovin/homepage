import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
      <Head>
        <title>Andrew Borovin</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <link rel="stylesheet" href="/static/css/common.css" />
        <link rel="stylesheet" href="/_next/static/style.css" />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
      </html>
    )
  }
}
