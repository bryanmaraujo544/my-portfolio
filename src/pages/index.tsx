import type { NextPage } from 'next';
import Head from 'next/head';

import { Layout } from 'components/Layout';
import { InitialScreen } from 'sections/InitialScreen';
import { About } from 'sections/About';
import { Projects } from 'sections/Projects';
import { Contact } from 'sections/Contact';
import { Footer } from 'sections/Footer';
import { Skills } from 'sections/Skills';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Bryan Martins</title>
      <meta
        name="description"
        content="Hey, I'm Bryan. A Front-end Developer"
      />
      <link rel="icon" href="/logo.png" />
    </Head>
    <Layout>
      <InitialScreen />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </Layout>
  </>
);

export default Home;
