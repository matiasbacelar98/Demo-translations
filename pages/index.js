import Head from 'next/head';
import Header from '../components/Header';
import Form from '../components/Form';

export default function Home() {
  return (
    <>
      <Head>
        <title>Demo Traducciones</title>
      </Head>

      <Header />

      <main className='min-h-[90vh] flex justify-center items-center'>
        <Form />
      </main>
    </>
  );
}
