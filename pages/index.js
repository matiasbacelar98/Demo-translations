import Header from '../components/Header';
import Form from '../components/Form';

export default function Home() {
  return (
    <>
      <Header />

      <main className='h-[90vh] flex justify-center items-center'>
        <Form />
      </main>
    </>
  );
}
