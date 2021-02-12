import NProgress from 'nprogress';
import Page from '../components/Page';
import Router from 'next/router';
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

import '../components/styles/nprogress.css'


function MyApp({Component, pageProps, apollo}) {
  return (
    <ApolloProvider client={apollo}>
      <Page cool={'This is cool'}>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  )
}

MyApp.getInitialProps = async function({ Component, ctx }) {
  let pageProps = {};
  if(Component.getInitialProps) {
    pageProps = await Component.getInitialProps(cts);
  }

  pageProps.query = ctx.query;
  return { pageProps };
}

export default withData(MyApp);
