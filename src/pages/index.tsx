import type { NextPage } from 'next';
import Head from 'next/head';

import { Layout } from 'components/Layout';
import { InitialScreen } from 'sections/InitialScreen';
import { About } from 'sections/About';
import { Projects } from 'sections/Projects';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <InitialScreen />
      <About />
      <Projects />
    </Layout>
  </>
);

export default Home;
