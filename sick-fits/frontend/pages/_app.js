import Page from '../components/Page';

export default function MyApp({Component, pageProps}) {
  return <Page cool={'This is cool'}>
    <Component {...pageProps} />
  </Page>
}
